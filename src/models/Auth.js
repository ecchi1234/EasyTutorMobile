import axios from 'axios';
import Echo from './Echo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import config from './config';
import PusherClient from './PusherClient';

export default class Auth {
  static currentUser = null;
  static token = '';
  static stateChangedHandlers = [];

  /**
   *
   * @param {{email: String, password: String}} loginData
   * @returns {Object}
   */
  static async login(loginData) {
    console.log(loginData);
    let {data} = await axios.post(
      config.hostName + '/api/auth/login',
      loginData,
    );
    Auth.saveState(data.user, data.token);
    return data;
  }

  static async autoLogin() {
    let token = await AsyncStorage.getItem('token');
    if (!token) {
      return;
    }

    try {
      let {data} = await axios.get(config.hostName + '/api/user/profile', {
        headers: {
          Authorization: token,
        },
      });

      Auth.saveState(data.user, token);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  static async register(registerData) {
    console.log(registerData);
    console.log(config.hostName);
    let {data} = await axios.post(
      config.hostName + '/api/auth/register',
      registerData,
    );
    return data;
  }

  static logout() {
    Auth.saveState(null, '');
  }

  static saveState(currentUser = null, token = '') {
    Auth.currentUser = currentUser;
    Auth.token = token;

    AsyncStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = token;
    // console.log(PusherClient.config);
    PusherClient.config.auth.headers['Authorization'] = token;
    Echo.connector.options.auth.headers['Authorization'] = token;

    Auth.handleStateChanged();
  }

  static onStateChanged(handler) {
    if (handler instanceof Function) {
      Auth.stateChangedHandlers.push(handler);
    }
  }

  static handleStateChanged() {
    for (let handler of Auth.stateChangedHandlers) {
      if (handler instanceof Function) {
        handler(Auth.currentUser);
      }
    }
  }
}

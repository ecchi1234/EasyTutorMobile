import axios from 'axios';
import Echo from './Echo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import config from './config';

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
    let {data} = await axios.post(
      config.hostName + '/api/auth/login',
      loginData,
    );
    Auth.saveState(data.user, data.token);
    return data;
  }

  static async autoLogin() {
    let token = AsyncStorage.getItem('token');
    if (!token) {
      return;
    }

    try {
      let {data} = await axios.get(config.hostName + '/api/user/info', {
        headers: {
          Authorization: token,
        },
      });
      Auth.saveState(data.user, token);
    } catch (error) {
      console.log(error);
    }
  }

  static async register(registerData) {
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
    axios.defaults.headers.common['Authorization'] = token;
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

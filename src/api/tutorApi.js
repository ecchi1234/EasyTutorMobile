import axiosClient from './axiosClient';
import {getToken} from '../helper/getToken';

export const tutorApi = {
  getSubject() {
    const url = 'api/user/subject';
    const headers = {Authorization: 'Bearer ' + getToken()};
    return axiosClient.get(url, {
      headers,
    });
  },
};

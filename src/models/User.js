import Model from './Model';

import axios from 'axios';

export default class User extends Model {
  /**
   * @override
   */
  static get apiPath() {
    return this.host + '/api/user';
  }
  /**
   *
   * @returns thong tin ca nhan cua nguoi dang dang nhap
   * {
   *  "id": 101,
        "name": "nguyen ngoc chi",
        "email": "123@gmail.com",
        "phoneNumber": "09809221",
        "profile": {
            "id": 1,
            "userId": 101,
            "sex": "female",
            "address": "Ha Noi",
            "achievementDescription": null,
            "achievements": [
                {
                    "id": 5,
                    "name": "ava.jpg",
                    "path": "http://127.0.0.1:8000/storage/3mkd85vQhjKzjGn5qoRRYuyxX7dWmEK1utXoTW32.jpg"
                },
                {
                    "id": 6,
                    "name": "background.jpg",
                    "path": "http://127.0.0.1:8000/storage/5tuswpdw5mXSMCu1XO7IXUy3Rnz1fJAzQlyp5kHg.jpg"
                },
                {
                    "id": 7,
                    "name": "background-2.jpg",
                    "path": "http://127.0.0.1:8000/storage/KVbYiiHZ2hvnHk8XRqAvXzAv6PqrHcNzMXiZO1uB.jpg"
                }
            ],
            "avatar": {
                "id": 1,
                "name": "anh.jpg",
                "path": "http://127.0.0.1:8000/storage/jTfOS7D0EKFj0CLk59eXWuoaSoHqJevBtF0Bobv9.jpg"
            }
        },
        "role": "tutor",
        "subjects": [
            {
                "id": 1,
                "name": "MistyRose"
            }
        ]
    }
   * }
   */
  static getUserInformation() {
    return axios.get(this.apiPath + '/profile');
  }
  static getTutorInformation(id) {
    return axios.get(this.apiPath + '/profile' + `/${id}`);
  }
  /**
   *
   * @param {*} updatedInformation {
   * sex: male/female
   * avatar: id cua anh
   * achivements: [] mang cac id cua anh
   * achievementDescription: mo ta
   *
   * }
   * @returns
   */
  static updateTutorProfile(updatedInformation) {
    return axios.post(this.apiPath + '/profile', updatedInformation);
  }

  static getUserSubject() {
    return axios.get(this.apiPath + '/subject');
  }

  static updateUserSubject() {
    return axios.post(this.apiPath + '/subject');
  }
}

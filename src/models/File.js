import axios from 'axios';
import Model from './Model';

export default class File extends Model {
  /**
   * @override
   */
  static get apiPath() {
    return this.host + '/api/file';
  }
  /**
   *
   * @param {*} file: file upload len server
   * @returns promise of upload file
   */
  static uploadSingleFile(file) {
    const formData = new FormData();
    formData.append('file', {
      name: file.fileName,
      type: file.type,
      uri: file.uri,
    });
    return axios.post(this.apiPath, formData, {
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    });
  }
  /**
   *
   * @param {*} files: mang cac file de upload len server
   * @returns promise of upload file
   */
  static uploadMultipleFiles(files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', {
        name: file.fileName,
        type: file.type,
        uri: file.uri,
      });
    }
    return axios.post(this.apiPath + '/multiple', formData, {
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    });
  }
}

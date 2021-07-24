import axios from 'axios';

import Model from './Model';
import Echo from './Echo';

export default class Conversation extends Model {
  static get apiPath() {
    return this.host + '/api/conversation';
  }

  static async get(page = 1) {
    let {data} = await axios.get(this.apiPath + '?page=' + page);
    return data.conversations.map(conversation => this.make(conversation));
  }

  // chỗ này để load tin nhắn cắa 1 conversation
  async loadMessages(page = 1) {
    if (!this.messages) {
      this.messages = [];
    }
    let {data} = await axios.get(
      Conversation.apiPath + '/' + this.id + '/message?page=' + page,
    );
    for (let message of data.messages) {
      if (this.messages.find(msg => msg.id === message.id)) {
        continue;
      }
      this.messages.push(message);
    }

    return this.messages;
  }

  // chỗ này để gửi tin nhắn: input: {content: 'nội dung tin nhắn'}
  async addMessage(input) {
    if (!this.id) {
      throw new Error('Invalid id');
    }
    let {data} = await axios.post(
      Conversation.apiPath + '/' + this.id + '/message',
      input,
    );
    return data;
  }

  // chỗ này để lắng nghe khi có tin nhắn mới
  onNewMessage(callback) {
    if (!this.id) {
      throw new Error('Invalid id');
    }

    console.log('Day la echo ne ', Echo);

    Echo.private('conversation.' + this.id).listen('.new-message', event => {
      console.log(event);
      this.messages.unshift(event.message);
      callback(event.message, this);
    });
  }

  // chỗ này để lắng nghe khi có 1 cuộc hội thoại mới (giống kiểu crush nó accept kết bạn đấy :D)
  // moi nguoi co list conversations af

  static onNewConversation(callback) {
    Echo.private('conversation').listen('.new-conversation', event => {
      callback(Conversation.make(event.conversation));
    });
  }

  // Conversation.get() -> lấy list conversation của người dùng dấy
  //  -> lặp qua từng cái conversation lấy được, conversation nào muốn lắng nghe tin nhắn thì gọi onNewMessage

  // Conversation.create(input) -> êể tạo 1 cuộc hội thoại giữa  2 người
  // trong ờó input: {name: 'không nhập cũng đc', users: ['id của người dùng 1', 'id của người dùng 2']};D
  // 1 trong id của 2 thằng người dùng bắt buộc phải có id cóa người dùng đang đăng nhập
  // ví dụ như bà có id = 10 => users: [10, 11] hoặc [11, 10]
  // đó, chỉ có thế thôi
  // oke de toi thu
  // mot conversation co truong thong tin ve thoi gian cua tin nhan gan nhat khong nhi ?
  // hình như có đấy, khi mà bà load tin nhắn thì nó theo thứ tự 15 tin nhắn gần nhất, uh de toi xem
  // the chac la xong, ong di code tiep api di
  // còn òể lấy ngưưi dùng hiện tại thì cứ vào Auth.currentUser là ra nhó oke
  // có gì ko chạy đc ping t nhó :D okie
}

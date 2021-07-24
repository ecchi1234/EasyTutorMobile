import Pusher from 'pusher-js/react-native';

const PusherClient = new Pusher('4bdb9c8be680a0e453e3', {
  logToConsole: true,
  key: '4bdb9c8be680a0e453e3',
  authEndpoint: 'http://10.0.2.2:8000' + '/broadcasting/auth',
  disableStats: true,
  cluster: 'ap1',
  // authEndpoint: '/broadcasting/auth',
  auth: {
    headers: {},
  },
});

// PusherClient.connection.bind('initialized', () =>
//   console.log('PusherClient::initialized', arguments),
// );
// PusherClient.connection.bind('connecting', () =>
//   console.log('PusherClient::connecting', arguments),
// );
// PusherClient.connection.bind('connected', () =>
//   console.log('PusherClient::connected', arguments),
// );
// PusherClient.connection.bind('error', () =>
//   console.log('PusherClient::error', arguments),
// );
// PusherClient.connection.bind('unavailable', () =>
//   console.log('PusherClient::unavailable', arguments),
// );
// PusherClient.connection.bind('failed', () =>
//   console.log('PusherClient::failed', arguments),
// );
// PusherClient.connection.bind('disconnected', () =>
//   console.log('PusherClient::disconnected', arguments),
// );

export default PusherClient;

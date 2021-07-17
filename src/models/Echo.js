// import LaravelEcho from 'laravel-echo';
import LaravelEcho from 'laravel-echo';
import Pusher from 'pusher-js/react-native';
// import Pusher from 'pusher-js';

// eslint-disable-next-line prettier/prettier
// window.Pusher = require('pusher-js');

const Echo = new LaravelEcho({
  broadcaster: 'pusher',
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  forceTLS: true,
  client: Pusher,
});

export default Echo;

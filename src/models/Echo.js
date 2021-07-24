import LaravelEcho from 'laravel-echo';
import PusherClient from './PusherClient';

const Echo = new LaravelEcho({
  broadcaster: 'pusher',
  key: '4bdb9c8be680a0e453e3',
  cluster: 'ap1',
  forceTLS: true,
  client: PusherClient,
  authEndpoint: '/broadcasting/auth',
});

export default Echo;

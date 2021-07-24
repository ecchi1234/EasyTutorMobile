import React from 'react';

import {View} from 'react-native';

import LottieView from 'lottie-react-native';
const LoadingView = props => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        source={require('../asset/create-post-loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingView;

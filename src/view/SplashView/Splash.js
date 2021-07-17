/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Logo from '../../component/Logo';
import {View, Text} from 'react-native';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
    </View>
  );
};
export default Splash;

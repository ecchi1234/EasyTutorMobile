import React from 'react';

import {View} from 'react-native';

import {Portal, Modal, Text} from 'react-native-paper';

import LottieView from 'lottie-react-native';

const CreatePostLoadingModal = props => {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'normal',
    height: '40%',
    margin: 20,
  };
  return (
    <Portal>
      <Modal
        visible={props.loading}
        onDismiss={props.hideLoadingModal}
        contentContainerStyle={containerStyle}>
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
        <View>
          <Text>Đang đăng bài ...</Text>
        </View>
      </Modal>
    </Portal>
  );
};

export default CreatePostLoadingModal;

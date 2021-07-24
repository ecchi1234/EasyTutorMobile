/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, ScrollView, StatusBar} from 'react-native';

import {Text, IconButton, Avatar, TextInput} from 'react-native-paper';

import {colors} from '../../asset/color';

import Auth from '../../models/Auth';

import Conversation from '../../models/Conversation';

const ListMessage = props => {
  const currentConversation = React.useMemo(() => new Conversation(), []);
  currentConversation.id = 11;
  const [listMessages, setListMessages] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(true);
  React.useEffect(() => {
    if (isLoad) {
      console.log('lan 1: ', listMessages);
      currentConversation.loadMessages().then(res => {
        console.log('lan 2: ', listMessages);
        if (listMessages.length === 0) {
          setListMessages(res.reverse());
        }
      });

      setIsLoad(false);
    }
  }, [currentConversation, isLoad, listMessages]);

  const [ourMessage, setOurMessage] = React.useState('');

  return (
    <>
      <View
        style={{
          backgroundColor: colors.primary_color,
          marginTop: StatusBar.currentHeight,
          height: 75,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View>
          <IconButton
            icon={require('../../asset/white-back-button.png')}
            color={'#fff'}
            onPress={() => props.navigation.navigate('Chat')}
            size={20}
          />
        </View>
        <View style={{marginRight: 10}}>
          <Avatar.Image
            source={require('../../asset/chat-ava-1.png')}
            size={45}
          />
        </View>
        <View>
          <View>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontWeight: 'normal',
                color: '#fff',
              }}>
              Nguyen Thi B
            </Text>
          </View>

          <View>
            <Text style={{fontSize: 11, color: '#fff'}}>Đang hoạt động</Text>
          </View>
        </View>
      </View>

      <ScrollView style={{backgroundColor: colors.background_color}}>
        <View style={{padding: 15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 10,
                maxWidth: '70%',
                minWidth: '10%',
                elevation: 5,
              }}>
              <Text>
                Hellofffffffffffffffffffffffffffffffffffffffffffffffffff
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: colors.primary_color,
                borderRadius: 10,
                padding: 10,
                maxWidth: '70%',
                minWidth: '10%',
              }}>
              <Text style={{color: '#fff'}}>
                Hellofffffffffffffffffffffffffffffffffffffffffffffffffff
              </Text>
            </View>
          </View>
          {console.log('listMessage thuc su ', listMessages)}
          {listMessages.map((item, index) => {
            if (item.userId === Auth.currentUser.id) {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: colors.primary_color,
                      borderRadius: 10,
                      padding: 10,
                      maxWidth: '70%',
                      minWidth: '10%',
                    }}>
                    <Text style={{color: '#fff'}}>{item.content}</Text>
                  </View>
                </View>
              );
            } else {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      padding: 10,
                      maxWidth: '70%',
                      minWidth: '10%',
                      elevation: 5,
                    }}>
                    <Text>{item.content}</Text>
                  </View>
                </View>
              );
            }
          })}
        </View>
      </ScrollView>
      <View
        style={{
          padding: 15,
          paddingTop: 0,
          position: 'relative',
          backgroundColor: colors.background_color,
        }}>
        <View style={{position: 'absolute'}} />

        <View>
          <TextInput
            value={ourMessage}
            placeholder={'Chat something...'}
            style={{
              height: 50,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              elevation: 4,
              fontSize: 12,
              fontFamily: 'Montserrat-Medium',
              fontWeight: 'normal',
              backgroundColor: '#fff',
            }}
            selectionColor={colors.primary_color}
            right={
              <TextInput.Icon
                icon={require('../../asset/send.png')}
                onPress={() => {
                  setOurMessage('');
                  currentConversation
                    .addMessage({content: ourMessage})
                    .then(res => {
                      console.log(res);
                      setIsLoad(true);
                    });
                }}
                color={colors.primary_color}
              />
            }
            onChangeText={value => setOurMessage(value)}
          />
        </View>
      </View>
    </>
  );
};

export default ListMessage;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';

import {Text, Badge, Avatar, Title, Button} from 'react-native-paper';

import {colors} from '../../asset/color';
import Auth from '../../models/Auth';

import Conversation from '../../models/Conversation';

const Chat = props => {
  const [listConversation, setListConversation] = React.useState([]);
  React.useEffect(() => {
    Conversation.get().then(res => {
      console.log('list conversation: ', res[0]);
      setListConversation(res);
    });
  }, []);
  // const [conversation, setConversation] = React.useState(new Conversation());
  // React.useEffect(() => {
  //   Conversation.get().then(res => {
  //     console.log(res);
  //   });
  // }, []);

  // React.useEffect(() => {
  //   if (!conversation.id) {
  //     Conversation.find(11).then(con => {
  //       console.log('doan hoi thoai dang xet: ', con);
  //       setConversation(con);
  //     });
  //   }

  //   if (conversation.id) {
  //     conversation
  //       .loadMessages()
  //       .then(res => console.log('list tin nhan cua conversation: ', res));
  //     conversation.onNewMessage(data =>
  //       console.log('tui nhan duoc tin nhan rui: ', data),
  //     );
  //   }
  // }, [conversation]);

  // const makeNewConversation = React.useCallback(() => {
  //   Conversation.create({
  //     name: '',
  //     users: [101, 102],
  //   }).then(res => {
  //     console.log('tao thanh cong: ', res);
  //   });
  // }, []);
  // // const [newMsg, setNewMsg] = React.useState(false);
  // const addNewCustomMessage = React.useCallback(() => {
  //   conversation
  //     .addMessage({content: 'lai test tiep ne'})
  //     .then(res => console.log('sau khi nhan tin: ', res));
  // }, [conversation]);

  return (
    <>
      <View
        style={{
          paddingTop: StatusBar.currentHeight,
          paddingLeft: 15,
          paddingBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',

          backgroundColor: colors.background_color,
        }}>
        <Title style={{fontFamily: 'Montserrat-Bold', fontWeight: 'normal'}}>
          Chat
        </Title>
      </View>
      <ScrollView style={{backgroundColor: colors.background_color}}>
        <View
          style={{
            padding: 15,
            flex: 1,
            backgroundColor: colors.background_color,
          }}>
          <View style={{}}>
            {listConversation.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  props.navigation.navigate('ListMessage', {
                    conversation: item,
                  })
                }
                activeOpacity={1}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    padding: 15,
                    borderRadius: 15,
                    elevation: 4,
                    flexDirection: 'row',
                    marginBottom: 20,
                  }}>
                  <View style={{position: 'relative'}}>
                    <Avatar.Image
                      source={require('../../asset/chat-ava-1.png')}
                      size={50}
                    />
                    <Badge
                      style={{
                        position: 'absolute',
                        top: 35,
                        backgroundColor: '#6FDB45',
                      }}
                      size={10}
                    />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '70%',
                        marginBottom: 10,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 11,
                            color: colors.primary_information_text_color,
                            fontFamily: 'Montserrat-Bold',
                            fontWeight: 'normal',
                            lineHeight: 11,
                          }}>
                          {
                            item.users.filter(
                              user => user.id !== Auth.currentUser.id,
                            )[0].name
                          }
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 10,
                            color: colors.tab_color,
                            lineHeight: 10,
                          }}>
                          recent
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '80%',
                        flexDirection: 'row',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 10,
                            color: colors.primary_information_text_color,
                          }}>
                          You: I had uploaded new files to trello, plea...
                        </Text>
                      </View>

                      <View style={{}}>
                        {/* <Badge
                      style={{
                        backgroundColor: "#E15554",
                      }}
                    >
                      6
                    </Badge> */}
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            {/** second picture */}
          </View>
          {/* <Button onPress={() => makeNewConversation()}>
            Create new conversation
          </Button>
          <Button onPress={() => addNewCustomMessage()}>
            Create new message
          </Button> */}
        </View>
      </ScrollView>
    </>
  );
};

export default Chat;

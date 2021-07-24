/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, StatusBar, ScrollView, TouchableOpacity} from 'react-native';

import {Text, Badge, Avatar, Title, Button} from 'react-native-paper';

import {colors} from '../../asset/color';

import Conversation from '../../models/Conversation';

const Chat = props => {
  const [conversation, setConversation] = React.useState(new Conversation());
  React.useEffect(() => {
    Conversation.get().then(res => {
      console.log(res);
    });
    Conversation.find(11).then(con => {
      con.onNewMessage(data => console.log('ahihi: ', data));
      setConversation(con);
    });
  }, []);

  const makeNewConversation = React.useCallback(() => {
    Conversation.create({
      name: '',
      users: [101, 102],
    }).then(res => {
      console.log('tao thanh cong: ', res);
    });
  }, []);
  // const [newMsg, setNewMsg] = React.useState(false);
  const addNewCustomMessage = React.useCallback(() => {
    conversation
      .addMessage({content: 'dm sao no ko console ra cai gi nhy?'})
      .then(res => console.log('sau khi nhan tin: ', res));
  }, [conversation]);

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
            {/** first picture */}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ListMessage')}
              activeOpacity={1}>
              <View
                style={{
                  backgroundColor: colors.chat_item,
                  padding: 15,
                  borderRadius: 15,
                  elevation: 7,
                  flexDirection: 'row',
                  marginBottom: 20,
                }}>
                <View style={{position: 'relative'}}>
                  <Avatar.Image
                    source={require('../../asset/review-avatar.png')}
                    size={50}
                  />
                  <Badge
                    style={{
                      position: 'absolute',
                      top: 35,
                      backgroundColor: '#F8C40E',
                    }}
                    size={10}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '76%',
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
                        Stephen Strange
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 10,
                          color: colors.tab_color,
                          lineHeight: 10,
                        }}>
                        07:34 PM
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '76%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
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
                      <Badge
                        style={{
                          backgroundColor: '#E15554',
                        }}
                        size={25}>
                        6
                      </Badge>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/** second picture */}

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
                    width: '76%',
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
                      Stephen Strange
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: colors.tab_color,
                        lineHeight: 10,
                      }}>
                      07:34 PM
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

            {/** second picture */}

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
                  source={require('../../asset/chat-ava-2.png')}
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
                    width: '76%',
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
                      Stephen Strange
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: colors.tab_color,
                        lineHeight: 10,
                      }}>
                      07:34 PM
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

            {/** second picture */}

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
                  source={require('../../asset/chat-ava-3.png')}
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
                    width: '76%',
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
                      Stephen Strange
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: colors.tab_color,
                        lineHeight: 10,
                      }}>
                      07:34 PM
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

            {/** second picture */}

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
                  source={require('../../asset/chat-ava-4.png')}
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
                    width: '76%',
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
                      Stephen Strange
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: colors.tab_color,
                        lineHeight: 10,
                      }}>
                      07:34 PM
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
          </View>
          <Button onPress={() => makeNewConversation()}>
            Create new conversation
          </Button>
          <Button onPress={() => addNewCustomMessage()}>
            Create new message
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default Chat;

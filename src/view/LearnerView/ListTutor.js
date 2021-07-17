/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {ScrollView, View} from 'react-native';

import {
  Avatar,
  IconButton,
  Text,
  Badge,
  Button,
  Paragraph,
} from 'react-native-paper';

import {colors} from '../../asset/color';

const ListTutor = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background_color,
      }}>
      <ScrollView>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <IconButton
            icon={require('../../asset/back-button.png')}
            onPress={() => console.log('back')}
            color={colors.primary_color}
            size={20}
          />
          <Text style={{fontFamily: 'Montserrat-Bold', fontWeight: 'normal'}}>
            List applicants of{' '}
            <Text
              style={{
                color: colors.primary_color,
                fontFamily: 'Montserrat-Bold',
                fontWeight: 'normal',
              }}>
              Day hoc cho be
            </Text>
          </Text>
        </View>
        <View style={{padding: 20}}>
          <View
            style={{
              backgroundColor: '#fff',
              minHeight: 100,
              borderRadius: 10,
              elevation: 4,
              flexDirection: 'row',
              padding: 10,
              marginBottom: 20,
            }}>
            <View style={{alignItems: 'center', marginRight: 15}}>
              <Avatar.Image
                source={require('../../asset/avatar.png')}
                size={40}
              />
              <View style={{padding: 5}}>
                <Badge
                  style={{
                    backgroundColor: colors.secondary_color,
                    color: colors.primary_color,
                  }}>
                  9.5
                </Badge>
              </View>

              <Text
                style={{
                  fontSize: 10,
                  color: colors.primary_color,
                  fontFamily: 'Montserrat-Bold',
                  fontWeight: 'bold',
                }}>
                1 review
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '81%',
                }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      fontFamily: 'Montserrat-Bold',
                      color: colors.black_color,
                    }}>
                    Nguyen Thi B
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.background_color,
                        borderRadius: 12,
                        padding: 5,
                        paddingHorizontal: 10,
                        elevation: 4,

                        marginRight: 10,
                      }}>
                      <Text style={{fontSize: 10}}>Toan</Text>
                    </View>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.background_color,
                        borderRadius: 12,
                        padding: 5,
                        paddingHorizontal: 10,
                        elevation: 4,
                      }}>
                      <Text style={{fontSize: 10}}>Ha Noi</Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Button
                    onPress={() => console.log('select')}
                    icon="check-bold"
                    mode={'contained'}
                    labelStyle={{
                      color: '#fff',
                      fontSize: 10,
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    }}
                    style={{borderRadius: 70, fontSize: 10}}>
                    Select
                  </Button>
                </View>
              </View>
              <View style={{marginTop: 10}}>
                <Paragraph
                  style={{color: colors.secondary_information_text_color}}>
                  lorem ipsum dolo sit amet
                </Paragraph>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              minHeight: 100,
              borderRadius: 10,
              elevation: 4,
              flexDirection: 'row',
              padding: 10,
              marginBottom: 20,
            }}>
            <View style={{alignItems: 'center', marginRight: 15}}>
              <Avatar.Image
                source={require('../../asset/avatar.png')}
                size={40}
              />
              <View style={{padding: 5}}>
                <Badge
                  style={{
                    backgroundColor: colors.secondary_color,
                    color: colors.primary_color,
                  }}>
                  9.5
                </Badge>
              </View>

              <Text
                style={{
                  fontSize: 10,
                  color: colors.primary_color,
                  fontFamily: 'Montserrat-Bold',
                  fontWeight: 'bold',
                }}>
                1 review
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '81%',
                }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      fontFamily: 'Montserrat-Bold',
                      color: colors.black_color,
                    }}>
                    Nguyen Thi B
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.background_color,
                        borderRadius: 12,
                        padding: 5,
                        paddingHorizontal: 10,
                        elevation: 4,

                        marginRight: 10,
                      }}>
                      <Text style={{fontSize: 10}}>Toan</Text>
                    </View>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.background_color,
                        borderRadius: 12,
                        padding: 5,
                        paddingHorizontal: 10,
                        elevation: 4,
                      }}>
                      <Text style={{fontSize: 10}}>Ha Noi</Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Button
                    onPress={() => console.log('select')}
                    icon="check-bold"
                    mode={'contained'}
                    labelStyle={{
                      color: '#fff',
                      fontSize: 10,
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    }}
                    style={{borderRadius: 70, fontSize: 10}}>
                    Select
                  </Button>
                </View>
              </View>
              <View style={{marginTop: 10}}>
                <Paragraph
                  style={{color: colors.secondary_information_text_color}}>
                  lorem ipsum dolo sit amet
                </Paragraph>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ListTutor;
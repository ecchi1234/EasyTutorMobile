/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {ScrollView, TouchableOpacity, View} from 'react-native';

import {
  Avatar,
  IconButton,
  Text,
  Badge,
  Button,
  Paragraph,
} from 'react-native-paper';

import {colors} from '../../asset/color';

import Post from '../../models/Post';
import User from '../../models/User';
const ListTutor = props => {
  const handleAcceptTutor = React.useCallback(() => {
    Post.find(17)
      .then(post => {
        return post.setTutor(post.applicants[0]);
      })
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data));
  }, []);
  console.log(props.route.params.applicants);
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
            Danh sách ứng tuyển cho{' '}
            <Text
              style={{
                color: colors.primary_color,
                fontFamily: 'Montserrat-Bold',
                fontWeight: 'normal',
              }}>
              {`Yêu cầu dạy #${props.route.params.post.id}`}
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
                  3.0
                </Badge>
              </View>

              <Text
                style={{
                  fontSize: 10,
                  color: colors.primary_color,
                  fontFamily: 'Montserrat-Bold',
                  fontWeight: 'bold',
                }}>
                2 review
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
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Profile')}>
                    <Text
                      style={{
                        marginBottom: 5,
                        fontFamily: 'Montserrat-Bold',
                        color: colors.black_color,
                      }}>
                      {props.route.params.applicants[0].name}
                    </Text>
                  </TouchableOpacity>

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
                    onPress={handleAcceptTutor}
                    icon="check-bold"
                    mode={'contained'}
                    labelStyle={{
                      color: '#fff',
                      fontSize: 10,
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    }}
                    style={{borderRadius: 70, fontSize: 10}}>
                    Chọn
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

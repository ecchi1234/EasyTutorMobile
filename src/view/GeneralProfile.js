/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import {Text, Avatar} from 'react-native-paper';
import {colors} from '../asset/color';
import Auth from '../models/Auth';

const listMenu = [
  {
    id: 1,
    title: 'Thông tin gia sư',
    image: require('../asset/infor-tutor.png'),
  },
  {
    id: 2,
    title: 'Danh sách bài đăng đã lưu',
    image: require('../asset/saved-posts.png'),
  },
  {
    id: 3,
    title: 'Đánh giá',
    image: require('../asset/rating.png'),
  },
  {
    id: 4,
    title: 'Danh sách bài đăng đã tạo',
    image: require('../asset/created-posts.png'),
  },
];
const Item = ({item, onPress, backgroundColor, textColor, image}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View
      style={{
        flexDirection: 'row',

        alignItems: 'center',
      }}>
      <Image source={image} style={{width: 30, height: 30, marginRight: 10}} />
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);
const GeneralProfile = props => {
  const [selectedId, setSelectedId] = React.useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#fff' : '#fff';
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          props.navigation.navigate('UpdateTutorProfile');
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
        image={item.image}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background_color}}>
      <View
        style={{
          backgroundColor: colors.primary_color,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          padding: 20,
          paddingTop: StatusBar.currentHeight + 10,
          flexDirection: 'row',
          position: 'relative',
        }}>
        <Text
          style={{color: '#fff'}}
          theme={{
            fonts: {
              regular: {
                fontFamily: 'Montserrat-Bold',
                fontWeight: 'normal',
              },
            },
          }}>
          Trang cá nhân
        </Text>
      </View>
      <View>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.background_color,
              paddingBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                position: 'relative',
                marginBottom: 20,
              }}>
              <Avatar.Image
                size={140}
                source={{
                  uri: Auth.currentUser.profile.avatar.path.replace(
                    '127.0.0.1',
                    '10.0.2.2',
                  ),
                }}
              />
            </View>

            <Text
              theme={{
                fonts: {
                  regular: {
                    fontFamily: 'Montserrat-Bold',
                    fontWeight: 'normal',
                  },
                },
              }}
              style={{fontSize: 17}}>
              {Auth.currentUser.name}
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                width: 300,
                height: 300,
                borderRadius: 10,
                elevation: 4,
                marginBottom: 20,
                marginTop: 10,
              }}>
              <FlatList
                data={listMenu}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
              />
            </View>
            <View style={{padding: 20, paddingTop: 0, width: '100%'}}>
              <TouchableOpacity onPress={() => Auth.logout()}>
                <View
                  style={{
                    backgroundColor: colors.primary_color,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15,
                  }}>
                  <Text
                    style={{color: '#fff'}}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: 'Montserrat-Bold',
                          fontWeight: 'normal',
                        },
                      },
                    }}>
                    Đăng xuất
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 13,
  },
});

export default GeneralProfile;

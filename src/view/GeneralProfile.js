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
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Image source={image} style={{width: 30, height: 30}} />
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);
const GeneralProfile = props => {
  const [selectedId, setSelectedId] = React.useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

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
        <View style={{position: 'absolute', left: 20, bottom: 25}}>
          <TouchableOpacity>
            <Image
              source={require('../asset/white-back-button.png')}
              style={{
                width: 15,
                height: 15,
                marginRight: 6,
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>
        </View>

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
                source={require('../asset/avatar.png')}
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
              Nguyễn Thị B
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                width: 300,
                height: 350,
                borderRadius: 10,
                elevation: 4,
                marginBottom: 10,
              }}>
              <FlatList
                data={listMenu}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
              />
            </View>
            <View style={{padding: 20, paddingTop: 0, width: '100%'}}>
              <TouchableOpacity onPress={() => console.log('bilobilo')}>
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 13,
  },
});

export default GeneralProfile;

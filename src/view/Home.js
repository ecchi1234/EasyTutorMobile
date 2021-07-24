/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, StyleSheet, Image, ScrollView} from 'react-native';

import {Text, IconButton} from 'react-native-paper';
import {colors} from '../asset/color';

import Slider from '../component/Slider';
import Carousel from '../component/Carousel';
import {dummyData} from '../data/Data';

const Home = props => {
  return (
    <ScrollView style={{backgroundColor: colors.background_color}}>
      <View style={{backgroundColor: colors.primary_color}}>
        <View style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../asset/home-profile.png')}
            style={{width: 20, height: 20, marginRight: 10}}
          />
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontWeight: 'normal',
              fontSize: 17,
              color: '#fff',
            }}>
            Good Morning, Chi
          </Text>
        </View>
        {/*
        <Slider /> */}
        <View
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            marginTop: 10,
          }}>
          <Slider />
          {/* <View style={{marginTop: 10}}>
            <Carousel data={dummyData} />
          </View> */}
          {/** list of functions */}
          <View style={{backgroundColor: colors.background_color}}>
            <View style={{marginLeft: 20, marginTop: 10}}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'normal',
                  fontFamily: 'Montserrat-Bold',
                }}>
                Cac chuc nang
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: colors.chat_item,
                    padding: 20,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 60,
                    height: 60,
                    margin: 20,
                    elevation: 4,
                  }}>
                  <IconButton
                    icon={require('../asset/job-focused.png')}
                    color={colors.primary_color}
                    size={25}
                    onPress={() =>
                      props.navigation.navigate('ListAvailableJob')
                    }
                  />
                </View>
                <Text
                  style={{fontFamily: 'Montserrat-Bold', fontWeight: 'normal'}}>
                  Lop hoc
                </Text>
              </View>

              {/* <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: colors.chat_item,
                    padding: 20,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 60,
                    height: 60,
                    margin: 20,
                    elevation: 4,
                  }}>
                  <IconButton
                    icon={require('../asset/proposals-focused.png')}
                    color={colors.primary_color}
                    size={25}
                    onPress={() => console.log('list posts')}
                  />
                </View>
                <View style={{width: 60, justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                      textAlign: 'center',
                    }}>
                    Danh sach yeu cau
                  </Text>
                </View>
              </View> */}

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: colors.chat_item,
                    padding: 20,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 60,
                    height: 60,
                    margin: 20,
                    elevation: 4,
                  }}>
                  <IconButton
                    icon={require('../asset/create-post.png')}
                    color={colors.primary_color}
                    size={25}
                    onPress={() => props.navigation.navigate('CreatePost')}
                  />
                </View>
                <Text
                  style={{fontFamily: 'Montserrat-Bold', fontWeight: 'normal'}}>
                  Tao yeu cau
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/** end of this feature */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
});

export default Home;

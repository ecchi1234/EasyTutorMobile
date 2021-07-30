/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text} from 'react-native-paper';
import {colors} from '../asset/color';

const Notification = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FAFAFA', flex: 1}}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <View style={{padding: 25}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Montserrat-Bold',
                fontWeight: 'normal',
              }}>
              Thông báo
            </Text>
          </View>

          <View style={{padding: 25}}>
            <View
              style={{
                backgroundColor: '#fff',
                elevation: 4,
                borderRadius: 25,
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{width: '70%'}}>
                <Text>
                  đây là thông báo từ hệ thống!jjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                </Text>
              </View>

              <Text style={{fontSize: 10, color: colors.tab_color}}>
                22:30 23/07/21
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, StyleSheet, Image, ScrollView} from 'react-native';

import {Text, IconButton} from 'react-native-paper';
import {colors} from '../asset/color';

import Slider from '../component/Slider';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontWeight: 'normal',
              fontSize: 23,
              color: colors.primary_color,
            }}>
            Good Morning, Chi
          </Text>
          <View>
            <IconButton icon={'bell-ring'} />
          </View>
        </View>

        <Slider />
        {/** list of functions */}
        <View></View>
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

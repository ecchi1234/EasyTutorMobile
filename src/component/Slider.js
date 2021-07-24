/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text as ReactNativeText,
  StyleSheet,
} from 'react-native';

import {Text} from 'react-native-paper';

const images = [
  require('../asset/banner-1.jpg'),
  require('../asset/banner-2.jpg'),
  require('../asset/banner-3.jpg'),
];

const {width} = Dimensions.get('window');

const height = width * 0.6; // 60%

const Slider = () => {
  const [active, setActive] = React.useState(0);
  const change = React.useCallback(
    ({nativeEvent}) => {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== active) {
        setActive(slide);
      }
    },
    [active],
  );
  return (
    <View style={style.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={style.scroll}>
        {images.map((image, index) => {
          return <Image key={index} source={image} style={style.image} />;
        })}
      </ScrollView>
      <View style={style.pagination}>
        {images.map((i, k) => (
          <ReactNativeText
            key={k}
            style={k === active ? style.pagingActiveText : style.pagingText}>
            ⬤
          </ReactNativeText>
        ))}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 30,
    width: width - 30,
    height: height,
    padding: 15,
  },
  scroll: {width: width - 30, height: height, borderRadius: 20},
  image: {
    width: width - 30,
    height: height,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagingText: {color: '#888', margin: 3},
  pagingActiveText: {color: '#fff', margin: 3},
});

export default Slider;

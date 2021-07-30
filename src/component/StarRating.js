/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {colors} from '../asset/color';

const StarRating = ({star}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="star"
        size={15}
        color={star <= 0 ? colors.tab_color : colors.yellow_color}
      />
      <Icon
        name="star"
        size={15}
        color={star <= 1 ? colors.tab_color : colors.yellow_color}
      />
      <Icon
        name="star"
        size={15}
        color={star <= 2 ? colors.tab_color : colors.yellow_color}
      />
      <Icon
        name="star"
        size={15}
        color={star <= 3 ? colors.tab_color : colors.yellow_color}
      />
      <Icon
        name="star"
        size={15}
        color={star <= 4 ? colors.tab_color : colors.yellow_color}
      />
    </View>
  );
};

export default StarRating;

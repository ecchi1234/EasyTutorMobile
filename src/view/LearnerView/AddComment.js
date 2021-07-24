/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Avatar, Button} from 'react-native-paper';
import {colors} from '../../asset/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Rating, AirbnbRating} from 'react-native-ratings';

const HideKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const AddComment = props => {
  const [comment, setComment] = React.useState('');
  return (
    <HideKeyboard>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: colors.background_color,
        }}>
        <View style={{padding: 30}}>
          <Avatar.Image
            source={require('../../asset/chat-ava-4.png')}
            size={120}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontWeight: 'normal',
              color: colors.primary_information_text_color,
              fontSize: 20,
            }}>
            Tran Thi Be
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <AirbnbRating
            count={5}
            reviews={[
              'Terrible',
              'Bad',
              'Meh',
              'OK',
              'Good',
              'Hmm...',
              'Very Good',
              'Wow',
              'Amazing',
              'Unbelievable',
              'Jesus',
            ]}
            defaultRating={5}
            size={25}
            onFinishRating={rating => console.log('Rating is: ' + rating)}
          />
        </View>

        <TextInput
          enablesReturnKeyAutomatically={true}
          textAlign={'left'}
          textAlignVertical={'top'}
          multiline={true}
          placeholder={'Danh gia cua ban ...'}
          onChangeText={value => setComment(value)}
          value={comment}
          style={{
            marginTop: 20,
            height: 200,
            margin: 12,
            borderWidth: 1,
            backgroundColor: '#F3F1F1',
            borderColor: '#F3F1F1',
            width: '80%',
            borderRadius: 20,
            padding: 20,
            fontFamily: 'Montserrat-Medium',
            fontWeight: 'normal',
          }}
        />
        <View style={{width: '80%', marginTop: 20}}>
          <Button
            style={{width: '100%'}}
            mode="contained"
            onPress={() => console.log('add comment')}
            //   style={{padding: 5}}
            labelStyle={{color: '#fff'}}
            contentStyle={{padding: 5}}>
            Submit
          </Button>
        </View>
      </View>
    </HideKeyboard>
  );
};

export default AddComment;

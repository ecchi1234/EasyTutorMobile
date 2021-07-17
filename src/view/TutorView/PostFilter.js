/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {Text, Button} from 'react-native-paper';

import {colors} from '../../asset/color';

const PostFilter = props => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
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
              source={require('../../asset/white-back-button.png')}
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
                fontFamily: 'MontserratBold',
                fontWeight: 'normal',
              },
            },
          }}>
          Bo loc
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholderTextColor={'#8B8B8B'}
              placeholder={'Dia chi'}
              borderRadius={10}
              backgroundColor={'#F3F1F1'}
              selectionColor={colors.primary_color}
            />
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholderTextColor={'#8B8B8B'}
              placeholder={'Chuyen mon'}
              borderRadius={10}
              backgroundColor={'#F3F1F1'}
              selectionColor={colors.primary_color}
            />
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholderTextColor={'#8B8B8B'}
              placeholder={'Offer'}
              borderRadius={10}
              backgroundColor={'#F3F1F1'}
              selectionColor={colors.primary_color}
            />
          </View>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Button
            onPress={() => console.log('pressed')}
            mode={'contained'}
            style={{
              width: '80%',
              borderRadius: 30,
              backgroundColor: colors.primary_color,
            }}>
            Tim kiem
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_color,
  },
  scrollView: {
    // paddingHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
  informationBlock: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
  },
  informationTitle: {
    marginBottom: 10,
  },
  informationTitleText: {
    color: colors.primary_information_text_color,
  },
  informationUnderline: {
    backgroundColor: colors.primary_color,
    height: 2,
    width: '10%',
  },
  addressText: {
    color: colors.primary_color,
  },
  costText: {
    color: colors.yellow_color,
  },
  input: {
    padding: 15,
    width: '85%',
    fontFamily: 'MontserratMedium',
    fontWeight: 'normal',
  },
});

export default PostFilter;

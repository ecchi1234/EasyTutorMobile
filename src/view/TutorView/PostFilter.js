/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

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

import Post from '../../models/Post';
import Subject from '../../models/Subject';

import SelectModal from '../../component/SelectModal';

const PostFilter = props => {
  const [text, onChangeText] = React.useState('');
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [searchInformation, setSearchInformation] = React.useState({});
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
        {/* <SelectModal
          visible={visible}
          hideModal={hideModal}
          listItem={['subject 1', 'subject 2']}
        /> */}
        <View style={{position: 'absolute', left: 20, bottom: 25}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ListAvailableJob')}>
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
          style={{color: '#fff', fontSize: 20}}
          theme={{
            fonts: {
              regular: {
                fontFamily: 'Montserrat-Bold',
                fontWeight: 'normal',
              },
            },
          }}>
          Bộ lọc
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
              onChangeText={value =>
                setSearchInformation({...searchInformation, address: value})
              }
              value={searchInformation?.address}
              placeholderTextColor={'#8B8B8B'}
              placeholder={'Địa chỉ'}
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
              onChangeText={value =>
                setSearchInformation({
                  ...searchInformation,
                  // eslint-disable-next-line radix
                  subjects: [parseInt(value, 10)],
                })
              }
              value={
                searchInformation?.subjects &&
                searchInformation?.subjects.length > 0
                  ? searchInformation?.subjects[0].toString()
                  : ''
              }
              placeholderTextColor={'#8B8B8B'}
              placeholder={'Chuyên môn'}
              borderRadius={10}
              backgroundColor={'#F3F1F1'}
              selectionColor={colors.primary_color}
              onPressIn={() => showModal()}
            />
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <TextInput
              style={styles.input}
              onChangeText={value =>
                setSearchInformation({
                  ...searchInformation,
                  minOffer: parseInt(value, 10),
                })
              }
              value={
                searchInformation?.minOffer &&
                searchInformation?.minOffer.toString()
              }
              placeholderTextColor={'#8B8B8B'}
              placeholder={'Offer nhỏ nhất'}
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
              onChangeText={value =>
                setSearchInformation({
                  ...searchInformation,
                  maxOffer: parseInt(value, 10),
                })
              }
              value={
                searchInformation?.maxOffer &&
                searchInformation?.maxOffer.toString()
              }
              placeholderTextColor={'#8B8B8B'}
              placeholder={'Offer lớn nhất'}
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
            onPress={() => {
              Post.withFilter(searchInformation)
                .get()
                .then(post => {
                  console.log('tim kiếm được: ', post);
                  props.navigation.navigate('ListAvailableJob', {
                    listFilter: post,
                  });
                });
            }}
            mode={'contained'}
            style={{
              width: '80%',
              borderRadius: 30,
              backgroundColor: colors.primary_color,
            }}
            labelStyle={{
              color: '#FFF',
              fontFamily: 'Montserrat-Bold',
              fontWeight: 'normal',
            }}>
            Tìm kiếm
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
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'normal',
  },
});

export default PostFilter;

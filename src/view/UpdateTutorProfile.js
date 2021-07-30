/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Platform, ScrollView} from 'react-native';

import {Text, Avatar, IconButton, TextInput} from 'react-native-paper';

import {launchImageLibrary} from 'react-native-image-picker';

import {Button} from 'react-native-paper';

import {colors} from '../asset/color';

import axios from 'axios';
import Auth from '../models/Auth';
import SelectModal from '../component/SelectModal';
import Subject from '../models/Subject';

const genders = [
  {
    id: 1,
    name: 'Nam',
  },
  {
    id: 2,
    name: 'Nữ',
  },
];

const UpdateTutorProfile = props => {
  const [photo, setPhoto] = React.useState(null);
  const [visibleGrade, setVisibleGrade] = React.useState(false);
  const [visibleSubject, setVisibleSubject] = React.useState(false);
  const showModalGrade = () => setVisibleGrade(true);
  const hideModalGrade = () => setVisibleGrade(false);
  const showModalSubject = () => setVisibleSubject(true);
  const hideModalSubject = () => setVisibleSubject(false);
  const [userInformation, setUserInformation] = React.useState({});

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response) {
        setPhoto(response.assets[0]);
      }
    });
  };
  // list mon hoc de gia su chon
  const [listSubjects, setListSubjects] = React.useState([]);

  React.useEffect(() => {
    Subject.get()
      .then(res => {
        console.log(res);
        setListSubjects(res);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background_color,
      }}>
      <ScrollView>
        <SelectModal
          visible={visibleGrade}
          hideModal={hideModalGrade}
          listItem={genders}
          model={userInformation}
          setModel={setUserInformation}
          title={'Chọn giới tính'}
          idField={'sex'}
          nameField={'genderName'}
        />

        <SelectModal
          visible={visibleSubject}
          hideModal={hideModalSubject}
          listItem={listSubjects}
          model={userInformation}
          setModel={setUserInformation}
          title={'Chọn chuyên môn'}
          idField={'subjectId'}
          nameField={'subjectName'}
        />

        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <IconButton
            icon={require('../asset/back-button.png')}
            onPress={() => console.log('back')}
            color={colors.primary_color}
            size={20}
          />
          <Text style={{fontFamily: 'Montserrat-Bold', fontWeight: 'normal'}}>
            Cập nhật thông tin
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            position: 'relative',
          }}>
          <Avatar.Image
            source={{
              uri: Auth.currentUser.profile.avatar.path.replace(
                '127.0.0.1',
                '10.0.2.2',
              ),
            }}
            size={100}
          />
          <View
            style={{
              position: 'absolute',
              left: 260,
            }}>
            <IconButton
              icon={require('../asset/edit-button.png')}
              size={23}
              onPress={() => console.log('test')}
              color={'#fff'}
              animated={true}
              style={{backgroundColor: colors.primary_color}}
            />
          </View>
        </View>
        <View style={{padding: 10}}>
          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Tên</Text>
            <TextInput label="Tên" onChangeText={value => console.log(value)} />
          </View>

          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Địa chỉ</Text>
            <TextInput
              label="Địa chỉ"
              style={{height: 100}}
              multiline={true}
              onChangeText={value => console.log(value)}
            />
          </View>

          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Số điện thoại</Text>
            <TextInput
              label="Số điện thoại"
              onChangeText={value => console.log(value)}
            />
          </View>

          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Giới tính</Text>
            <View
              style={{
                backgroundColor: '#F3F1F1',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                borderRadius: 7,
              }}>
              <Text style={{color: colors.primary_information_text_color}}>
                {userInformation?.genderName
                  ? userInformation?.genderName
                  : 'Chọn giới tính'}
              </Text>
              <IconButton
                icon="folder"
                onPress={() => showModalGrade()}
                color={colors.primary_color}
              />
            </View>
          </View>

          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Chuyên môn</Text>
            <View
              style={{
                backgroundColor: '#F3F1F1',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                borderRadius: 7,
              }}>
              <Text style={{color: colors.primary_information_text_color}}>
                {userInformation?.subjectName
                  ? userInformation?.subjectName
                  : 'Chọn chuyên môn'}
              </Text>
              <IconButton
                icon="folder"
                onPress={() => showModalSubject()}
                color={colors.primary_color}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateTutorProfile;

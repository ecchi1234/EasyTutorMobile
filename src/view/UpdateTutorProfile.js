/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Text, Avatar, IconButton, TextInput} from 'react-native-paper';

import {launchImageLibrary} from 'react-native-image-picker';

import {Button} from 'react-native-paper';

import {colors} from '../asset/color';

import axios from 'axios';
import Auth from '../models/Auth';
import SelectModal from '../component/SelectModal';
import Subject from '../models/Subject';
import File from '../models/File';
import User from '../models/User';
const genders = [
  {
    id: 'male',
    name: 'Nam',
  },
  {
    id: 'female',
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
  const [userInformation, setUserInformation] = React.useState({
    sex: 'female',
    subjectId: 1,
  });

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response) {
        setPhoto(response.assets[0]);
      }
    });
  };
  const handleUploadPhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response) {
        File.uploadSingleFile(response.assets[0])
          .then(res => {
            console.log('anh: ', res.data.data);
            setUserInformation({
              ...userInformation,
              profile: {
                ...userInformation?.profile,
                avatar: res.data.data,
              },
            });
          })
          .catch(err => console.log(err.response.data));
      }
    });
  };

  const handleUploadAchievement = () => {
    launchImageLibrary({noData: true}, response => {
      if (response) {
        File.uploadSingleFile(response.assets[0])
          .then(res => {
            console.log(userInformation.profile.achievements);
            setUserInformation({
              ...userInformation,
              profile: {
                ...userInformation.profile,
                achievements: [
                  ...userInformation.profile.achievements,
                  res.data.data,
                ],
              },
            });
          })
          .catch(err => console.log(err.response.data));
      }
    });
  };

  const handleGetProfile = React.useCallback(() => {
    User.getUserInformation().then(res => {
      console.log('thong tin ca nhan: ', res.data.user);
      setUserInformation({
        ...res.data.user,
        genderName: res.data.user.profile.sex === 'female' ? 'Nữ' : 'Nam',
        sex: res.data.user.profile.sex,
        subjectId: res.data.user.subjects[0].id,
        subjectName: res.data.user.subjects[0].name,
      });
    });
  }, []);

  const handleUpdateProfile = React.useCallback(() => {
    User.updateTutorProfile({
      avatar: 23,
      sex: 'female',
      address: '143 nguyen tuan',
    })
      .then(res => {
        console.log(res.data);
        handleGetProfile();
        // setUserInformation(res.data.user);
      })
      .catch(err => console.log(err.response.data));
  }, [handleGetProfile]);
  // list mon hoc de gia su chon
  const [listSubjects, setListSubjects] = React.useState([]);

  React.useEffect(() => {
    Subject.get()
      .then(res => {
        setListSubjects(res);
      })
      .catch(err => console.log(err.response.data));
  }, []);

  React.useEffect(() => {
    handleGetProfile();
  }, [handleGetProfile]);

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
            onPress={() => props.navigation.navigate('GeneralProfile')}
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
              uri: userInformation?.profile?.avatar?.path
                ? userInformation?.profile?.avatar?.path.replace(
                    '127.0.0.1',
                    '10.0.2.2',
                  )
                : Auth.currentUser.profile.avatar.path.replace(
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
              onPress={handleUploadPhoto}
              color={'#fff'}
              animated={true}
              style={{backgroundColor: colors.primary_color}}
            />
          </View>
        </View>
        <View style={{padding: 10}}>
          <View style={{padding: 10}}>
            <Text style={{fontFamily: 'Montserrat-Bold', fontWeight: 'normal'}}>
              Thông tin chung
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Tên</Text>
            <TextInput
              label="Tên"
              onChangeText={value => console.log(value)}
              value={userInformation?.name}
            />
          </View>

          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Địa chỉ</Text>
            <TextInput
              label="Địa chỉ"
              style={{height: 100}}
              multiline={true}
              onChangeText={value => console.log(value)}
              value={userInformation?.profile?.address}
            />
          </View>

          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Số điện thoại</Text>
            <TextInput
              label="Số điện thoại"
              onChangeText={value => console.log(value)}
              value={userInformation?.phoneNumber}
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
            <Text style={{fontFamily: 'Montserrat-Bold', fontWeight: 'normal'}}>
              Thông tin gia sư
            </Text>
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
          <View style={{padding: 10}}>
            <Text style={{marginBottom: 10}}>Thành tích</Text>
            <View style={{marginBottom: 20}}>
              <TextInput
                label="Mô tả"
                style={{height: 100}}
                multiline={true}
                onChangeText={value =>
                  setUserInformation({
                    ...userInformation,
                    profile: {
                      ...userInformation.profile,
                      achievementDescription: value,
                    },
                  })
                }
                value={userInformation?.profile?.achievementDescription}
              />
            </View>

            {userInformation?.profile?.achievements.length > 0 &&
              userInformation?.profile?.achievements.map(item => (
                <View
                  key={item.id}
                  style={{
                    borderStyle: 'dashed',
                    borderColor: colors.tab_color,
                    borderWidth: 1,
                    width: '100%',
                    height: 150,
                    borderRadius: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  {/* <IconButton
                icon="camera"
                onPress={() => showModalSubject()}
                color={colors.tab_color}
              /> */}

                  <Image
                    source={{
                      uri: item.path.replace('127.0.0.1', '10.0.2.2'),
                    }}
                    style={{width: '100%', height: 150, resizeMode: 'cover'}}
                  />
                </View>
              ))}

            <View
              style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconButton
                icon="image-plus"
                onPress={handleUploadAchievement}
                color={colors.primary_color}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{padding: 20, paddingTop: 0}}>
        <TouchableOpacity onPress={handleUpdateProfile}>
          <View
            style={{
              backgroundColor: colors.primary_color,
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
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
              Cập nhật
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateTutorProfile;

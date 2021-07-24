/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, ScrollView} from 'react-native';

import {Button, TextInput, RadioButton, Text, Title} from 'react-native-paper';
import {colors} from '../asset/color';
// import {AuthContext} from '../authContext';
import Auth from '../models/Auth';

const Register = props => {
  const [signUpInformation, setSignUpInformation] = React.useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isTutor: true,
  });

  // const {signUp} = React.useContext(AuthContext);
  const signUp = input => {
    Auth.register(input);
  };

  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <View style={{width: '85%', alignSelf: 'center'}}>
            <View style={{marginBottom: 20}}>
              <Title
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontWeight: 'normal',
                  color: colors.primary_color,
                  fontSize: 25,
                }}>
                Create new account
              </Title>
            </View>
            <TextInput
              label={'Name'}
              value={signUpInformation.name}
              mode={'contained'}
              onChangeText={text =>
                setSignUpInformation(prevState => ({
                  ...prevState,
                  name: text,
                }))
              }
              style={{marginBottom: 10}}
            />
            <TextInput
              label={'Phone'}
              value={signUpInformation.phoneNumber}
              mode={'contained'}
              onChangeText={text =>
                setSignUpInformation(prevState => ({
                  ...prevState,
                  phoneNumber: text,
                }))
              }
              style={{marginBottom: 10}}
            />
            <TextInput
              label={'Email'}
              value={signUpInformation.email}
              mode={'contained'}
              onChangeText={text =>
                setSignUpInformation(prevState => ({
                  ...prevState,
                  email: text,
                }))
              }
              style={{marginBottom: 10}}
            />
            <TextInput
              label={'Password'}
              value={signUpInformation.password}
              mode={'contained'}
              onChangeText={text =>
                setSignUpInformation(prevState => ({
                  ...prevState,
                  password: text,
                }))
              }
              style={{marginBottom: 10}}
              secureTextEntry
              right={<TextInput.Icon name="eye" color={'#8B8B8B'} />}
            />

            <TextInput
              label={'RePassword'}
              value={signUpInformation.passwordConfirmation}
              mode={'contained'}
              onChangeText={text =>
                setSignUpInformation(prevState => ({
                  ...prevState,
                  passwordConfirmation: text,
                }))
              }
              secureTextEntry
              style={{marginBottom: 10}}
              right={<TextInput.Icon name="eye" color={'#8B8B8B'} />}
            />

            <View>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontWeight: 'normal',
                  fontSize: 18,
                }}>
                Ban dang ky de?
              </Text>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="true"
                    status={signUpInformation.isTutor ? 'checked' : 'unchecked'}
                    onPress={() =>
                      setSignUpInformation(prevState => ({
                        ...prevState,
                        isTutor: true,
                      }))
                    }
                    color={colors.primary_color}
                  />
                  <Text>Lam gia su</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="false"
                    status={
                      !signUpInformation.isTutor ? 'checked' : 'unchecked'
                    }
                    onPress={() =>
                      setSignUpInformation(prevState => ({
                        ...prevState,
                        isTutor: false,
                      }))
                    }
                    color={colors.primary_color}
                  />
                  <Text>Tim nguoi day</Text>
                </View>
              </View>
            </View>

            <Button
              style={{
                marginTop: 20,
                backgroundColor: `${colors.primary_color}`,
                borderRadius: 7,
              }}
              mode="contained"
              labelStyle={{color: 'white'}}
              contentStyle={{padding: 10}}
              onPress={() => signUp(signUpInformation)}>
              Register
            </Button>

            <Button
              style={{
                marginTop: 20,
                backgroundColor: `${colors.secondary_color}`,
                borderRadius: 7,
              }}
              mode="contained"
              contentStyle={{padding: 10}}
              labelStyle={{color: `${colors.primary_color}`}}
              onPress={() => props.navigation.navigate('Login')}>
              Login
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Register;

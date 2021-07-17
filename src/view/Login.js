/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Button as ReactNativeButton} from 'react-native';

import Logo from '../component/Logo';
import {Button, TextInput, Text} from 'react-native-paper';
import {colors} from '../asset/color';
// import {AuthContext} from '../authContext';
import Auth from '../models/Auth';

const Login = props => {
  const [signInInformation, setSignInInformation] = React.useState({
    email: '',
    password: '',
  });

  // const {signIn} = React.useContext(AuthContext);

  const signIn = input => {
    Auth.login(input);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <View style={{width: '85%', alignSelf: 'center'}}>
          <View>
            <Logo />
          </View>
          <TextInput
            label={'Email'}
            value={signInInformation.email}
            mode={'flat'}
            onChangeText={text =>
              setSignInInformation(prevState => ({
                ...prevState,
                email: text,
              }))
            }
            style={{
              marginBottom: 20,
              marginTop: 20,
              borderRadius: 5,
            }}></TextInput>
          <TextInput
            label={'Password'}
            value={signInInformation.password}
            mode={'flat'}
            onChangeText={text =>
              setSignInInformation(prevState => ({
                ...prevState,
                password: text,
              }))
            }
            secureTextEntry
            right={<TextInput.Icon name="eye" color={'#8B8B8B'} />}></TextInput>
          <Text style={{color: colors.primary_color, paddingTop: 10}}>
            Forgot password ?
          </Text>
          <Button
            style={{
              marginTop: 20,
              backgroundColor: `${colors.primary_color}`,
              // padding: 10,
              borderRadius: 7,
            }}
            mode="contained"
            onPress={() => signIn(signInInformation)}
            contentStyle={{padding: 10}}
            labelStyle={{color: '#fff'}}>
            Login
          </Button>

          <Button
            style={{
              marginTop: 20,
              backgroundColor: `${colors.secondary_color}`,
              // padding: 10,
              borderRadius: 7,
            }}
            compact
            contentStyle={{padding: 10}}
            mode="contained"
            labelStyle={{color: `${colors.primary_color}`}}
            onPress={() => props.navigation.navigate('Register')}>
            Register
          </Button>
        </View>
      </View>
    </>
  );
};

export default Login;

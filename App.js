/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
// for navigation
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Image, StyleSheet, LogBox} from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
  Button,
  BottomNavigation,
} from 'react-native-paper';
import authApi from './src/api/authApi';
import Login from './src/view/Login';
import Splash from './src/view/SplashView/Splash';
import PostDetail from './src/view/PostDetail';
import Profile from './src/view/Profile';
import Register from './src/view/Register';
import ListAvailableJob from './src/view/TutorView/ListAvailableJob';
import PostFilter from './src/view/TutorView/PostFilter';
import Chat from './src/view/Chat/Chat';
import ListMessage from './src/view/Chat/ListMessage';
import Home from './src/view/Home';
import CreatePost from './src/view/LearnerView/CreatePost';
import ListTutor from './src/view/LearnerView/ListTutor';
import AddComment from './src/view/LearnerView/AddComment';
import Notification from './src/view/Notification';
import GeneralProfile from './src/view/GeneralProfile';
import UpdateTutorProfile from './src/view/UpdateTutorProfile';
import {colors} from './src/asset/color';

import {AuthContext} from './src/authContext';
import {NotificationContext} from './src/notificationContext';
import fontConfig from './src/config/font';
import Auth from './src/models/Auth';
import LoadingView from './src/view/LoadingView';

// Import module
import RNPusherPushNotifications from 'react-native-pusher-push-notifications';

// Initialize notifications
export const init = user => {
  // Set your app key and register for push
  RNPusherPushNotifications.setInstanceId(
    'a07077c0-7d74-4964-94a5-513f7270c511',
  );

  // Init interests after registration
  RNPusherPushNotifications.on('registered', () => {
    subscribe(`donut-${user.id}`);
    console.log('dang ky thiet bi');
    console.log('device: ', `donut-${user.id}`);
  });

  // Setup notification listeners
  RNPusherPushNotifications.on('notification', handleNotification);
};

// Handle notifications received
const handleNotification = notification => {
  console.log(notification);
};

// Subscribe to an interest
const subscribe = interest => {
  // Note that only Android devices will respond to success/error callbacks
  RNPusherPushNotifications.subscribe(
    interest,
    (statusCode, response) => {
      console.error(statusCode, response);
    },
    () => {
      console.log('Success');
    },
  );
};

// Unsubscribe from an interest
const unsubscribe = interest => {
  RNPusherPushNotifications.unsubscribe(
    interest,
    (statusCode, response) => {
      console.tron.logImportant(statusCode, response);
    },
    () => {
      console.tron.logImportant('Success');
    },
  );
};

const theme = {
  ...DefaultTheme,

  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary_color,
  },
};
// ignore clumsy warning
LogBox.ignoreLogs(['Setting a timer', 'If you']);

export default function App(props) {
  // state for sign-in/register/sign-out

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignup: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      isSignup: false,
    },
  );

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    Auth.autoLogin()
      .then(() => {
        dispatch({type: 'RESTORE_TOKEN'});
      })
      .catch(err => console.log(err.response.data));
  }, []);
  React.useEffect(() => {
    // user = null ,+> logout,

    Auth.onStateChanged(user => {
      if (user !== null) {
        init(user);
      }

      setIsLoggedIn(user !== null);
    });
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        authApi
          .login(data)
          .then(async res => {
            await AsyncStorage.setItem('userToken', res.token);
            dispatch({type: 'SIGN_IN', token: res.token});
          })
          .catch(err => {
            console.log(err);
          });
      },
      signOut: async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        authApi
          .register(data)
          .then(async res => {
            console.log(res);
            // await AsyncStorage.setItem('userToken', res.token);
            dispatch({type: 'SIGN_UP'});
          })
          .catch(err => {
            console.log(err);
          });
      },
    }),
    [],
  );

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <Splash />;
  }

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const ChatStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  const HomeStack = createStackNavigator();
  const PostStack = createStackNavigator();
  const GeneralProfileStack = createStackNavigator();

  const GeneralProfileStackScreen = () => (
    <GeneralProfileStack.Navigator>
      <GeneralProfileStack.Screen
        name="GeneralProfile"
        component={GeneralProfile}
        options={{
          headerShown: false,
        }}
      />
      <GeneralProfileStack.Screen
        name="UpdateTutorProfile"
        component={UpdateTutorProfile}
        options={{
          headerShown: false,
        }}
      />
    </GeneralProfileStack.Navigator>
  );

  const PostStackScreen = () => (
    <PostStack.Navigator>
      <PostStack.Screen
        name="ListAvailableJob"
        component={ListAvailableJob}
        options={{
          headerShown: false,
        }}
      />
      <PostStack.Screen
        name="PostFilter"
        component={PostFilter}
        options={{
          headerShown: false,
        }}
      />
      <PostStack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{
          headerShown: false,
        }}
      />
      <PostStack.Screen
        name="ListTutor"
        component={ListTutor}
        options={{
          headerShown: false,
        }}
      />
      <PostStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </PostStack.Navigator>
  );

  const ChatStackScreen = () => (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      <ChatStack.Screen
        name="ListMessage"
        component={ListMessage}
        options={{
          headerShown: false,
        }}
      />
    </ChatStack.Navigator>
  );

  const ProfileStackScreen = () => {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <ProfileStack.Screen
          name="AddComment"
          component={AddComment}
          options={{
            headerShown: false,
          }}
        />
      </ProfileStack.Navigator>
    );
  };

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="ListAvailableJob"
          component={PostStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            headerShown: false,
          }}
        />
      </HomeStack.Navigator>
    );
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NotificationContext.Provider value={authContext}>
        <PaperProvider theme={theme}>
          {!isLoggedIn ? (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({route}) => ({
                  tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    switch (route.name) {
                      case 'Home': {
                        iconName = focused
                          ? require('./src/asset/home-focused.png')
                          : require('./src/asset/home-not-focused.png');
                        break;
                      }
                      case 'Chat': {
                        iconName = focused
                          ? require('./src/asset/chat-focused.png')
                          : require('./src/asset/chat-not-focused.png');
                        break;
                      }
                      case 'Notification': {
                        iconName = focused
                          ? require('./src/asset/notification-focused.png')
                          : require('./src/asset/notification-not-focused.png');
                        break;
                      }
                      case 'Profile': {
                        iconName = focused
                          ? require('./src/asset/profile-focused.png')
                          : require('./src/asset/profile-not-focused.png');
                        break;
                      }
                      case 'Proposals': {
                        iconName = focused
                          ? require('./src/asset/proposals-focused.png')
                          : require('./src/asset/proposals-not-focused.png');
                        break;
                      }
                    }

                    // You can return any component that you like here!

                    return (
                      <View
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          borderRadius: 5,
                          padding: 5,
                          backgroundColor: focused
                            ? '#F1F9ED'
                            : colors.background_color,
                          width:
                            (size * Image.resolveAssetSource(iconName).width) /
                            Image.resolveAssetSource(iconName).height,
                          height: size,
                        }}>
                        <Image
                          source={iconName}
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </View>
                    );
                  },
                })}
                tabBarOptions={{
                  activeTintColor: colors.primary_information_text_color,
                  inactiveTintColor: colors.tab_color,
                  // activeBackgroundColor: '#F1F9ED',
                  // inactiveBackgroundColor: colors.background_color,
                  labelStyle: {
                    fontFamily: 'Montserrat-Medium',
                  },
                }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Chat" component={ChatStackScreen} />
                <Tab.Screen name="Notification" component={Notification} />
                <Tab.Screen
                  name="Profile"
                  component={GeneralProfileStackScreen}
                />
                {/* <Tab.Screen name="Proposals" component={ProfileStackScreen} /> */}
                {/* <Tab.Screen name="Notifications" component={Splash} /> */}
              </Tab.Navigator>
            </NavigationContainer>
            // <View
            //   style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            // >
            //   <Button onPress={() => authContext.signOut()}>Sign out</Button>
            // </View>
          )}
        </PaperProvider>
      </NotificationContext.Provider>
    </AuthContext.Provider>
  );
}

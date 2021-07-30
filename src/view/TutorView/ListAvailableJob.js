/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Text,
  Searchbar,
  Card,
  Title,
  Paragraph,
  Avatar,
  Button,
} from 'react-native-paper';

import LottieView from 'lottie-react-native';
import {colors} from '../../asset/color';
import Post from '../../models/Post';

import {logger} from 'react-native-logs';
import Auth from '../../models/Auth';

const log = logger.createLogger();

const RightContent = props => {
  return (
    <TouchableOpacity>
      <View style={{marginRight: 20}}>
        <Avatar.Icon
          icon={'star'}
          size={30}
          color={colors.tab_color}
          style={{backgroundColor: colors.background_color}}
        />
      </View>
    </TouchableOpacity>
  );
};

const ApplyButton = props => {
  return (
    <Button
      mode={'contained'}
      style={{backgroundColor: colors.primary_color, borderRadius: 15}}
      labelStyle={{color: '#fff', fontSize: 10}}
      onPress={props.onPress}
      icon={'school'}>
      Ứng tuyển
    </Button>
  );
};

const ListAvailableJob = props => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [posts, setPosts] = React.useState([]);
  const [tmpPost, setTmpPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!props.route.params) {
      console.log('hihi');
      Post.get()
        .then(res => {
          console.log(res);
          setPosts(res);
          setIsLoading(false);
        })
        .catch(err => console.log(err)); // res: mang, moi phan tu laf instance cua Post
      Post.find(17).then(post => {
        post.onNewApplicant(data => console.log('msg: ', data));
        setTmpPost(post);
      });
    } else if (props.route.params) {
      console.log(props.route.params.listFilter);
      setPosts(props.route.params.listFilter);
    }

    // Post.find(5).then(post => {
    //   setTmpPost(post);
    // });
    //   post.addApplicant({id: 22});
    // });
  }, [props.route]);

  // React.useEffect(() => {
  //   if (!tmpPost) {
  //     return;
  //   }
  //   console.log(tmpPost);
  //   tmpPost.onNewApplicant(data => {
  //     console.log(data);
  //   });
  // }, [tmpPost]);

  const addApplicant = async () => {
    console.log('them 1 applicant');
    try {
      tmpPost
        .addApplicant({id: Auth.currentUser.id})
        .then(data => {
          console.log('sau khi add gia su: ', data);
          // setTmpPost(data);
        })
        .catch(err => console.log(err.response.data));
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: StatusBar.currentHeight + 10,
            }}>
            <View style={{width: '78%', alignSelf: 'center'}}>
              <Searchbar
                placeholder="Tìm kiếm lớp học ..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{
                  borderRadius: 20,
                  borderColor: '#F0F0F0',
                  elevation: 0,
                  borderWidth: 1,
                }}
                selectionColor={colors.primary_color}
                iconColor={colors.primary_color}
                inputStyle={{fontSize: 12}}
                placeholderTextColor={colors.tab_color}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('PostFilter')}>
                <View>
                  <Image
                    source={require('../../asset/filter.png')}
                    style={{width: 20, height: 20}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{paddingHorizontal: 25, marginTop: 15, marginBottom: 15}}>
            <View>
              <Text
                style={{fontSize: 13}}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: 'Montserrat-SemiBold',
                      fontWeight: 'normal',
                    },
                  },
                }}>
                {props.route &&
                props.route.params &&
                props.route.params.listFilter
                  ? `Có ${props.route.params.listFilter.length} kết quả`
                  : 'Yêu cầu phù hợp với bạn'}
              </Text>
            </View>
            {!isLoading ? (
              posts.map(post => {
                return (
                  <View style={{marginTop: 15}} key={post.id}>
                    <Card style={{borderRadius: 12}}>
                      <Card.Title
                        title="Hourly - Posted 2 hours ago"
                        subtitle="Day toan cho be"
                        right={RightContent}
                        titleStyle={{
                          fontSize: 8,
                          fontFamily: 'Montserrat-SemiBold',
                          fontWeight: 'normal',
                          color: colors.tab_color,
                          padding: 0,
                          lineHeight: 10,
                          textAlignVertical: 'bottom',
                        }}
                        subtitleStyle={{
                          fontSize: 13,
                          fontFamily: 'Montserrat-SemiBold',
                          fontWeight: 'normal',
                          color: colors.primary_color,
                        }}
                      />
                      <Card.Content>
                        <View style={{flexDirection: 'row'}}>
                          <View
                            style={{
                              backgroundColor: colors.background_color,
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 8,
                              borderRadius: 12,
                            }}>
                            <Text
                              style={{
                                fontSize: 10,
                                fontFamily: 'Montserrat-Bold',
                                fontWeight: 'normal',
                              }}>
                              {post.subject.name}
                            </Text>
                          </View>

                          <View
                            style={{
                              backgroundColor: colors.background_color,
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 8,
                              borderRadius: 10,
                              marginHorizontal: 12,
                            }}>
                            <Text
                              style={{
                                fontSize: 10,
                                fontFamily: 'Montserrat-Bold',
                                fontWeight: 'normal',
                              }}>
                              Ha Noi
                            </Text>
                          </View>

                          <View
                            style={{
                              backgroundColor: colors.background_color,
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 8,
                              borderRadius: 12,
                            }}>
                            <Text
                              style={{
                                fontSize: 10,
                                fontFamily: 'Montserrat-Bold',
                                fontWeight: 'normal',
                              }}>
                              Offline
                            </Text>
                          </View>
                        </View>
                        <Paragraph
                          style={{
                            fontSize: 11,
                            color: colors.secondary_information_text_color,
                          }}>
                          {post.description}
                        </Paragraph>
                        <TouchableOpacity>
                          <View
                            style={{
                              backgroundColor: colors.backgroundColor,
                              borderRadius: 5,
                              padding: 5,
                            }}>
                            <Text
                              style={{
                                color: colors.darker_green_color,
                                fontSize: 10,
                              }}
                              theme={{
                                fonts: {
                                  regular: {
                                    fontFamily: 'Montserrat-Bold',
                                    fontWeight: 'normal',
                                  },
                                },
                              }}>
                              More
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </Card.Content>
                      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
                      <Card.Actions
                        style={{padding: 10, justifyContent: 'flex-end'}}>
                        <ApplyButton onPress={addApplicant} />
                      </Card.Actions>
                    </Card>
                  </View>
                );
              })
            ) : (
              <LottieView
                style={{
                  width: 100,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../asset/loading-items.json')}
                autoPlay
                loop
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_color,
    flex: 1,
  },
});

export default ListAvailableJob;

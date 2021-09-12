/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {IconButton, Text, Title} from 'react-native-paper';
import {colors} from '../asset/color';

const PostDetail = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            backgroundColor: colors.background_color,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../asset/back-button.png')}
                style={{width: 15, height: 15, marginRight: 6, marginLeft: 5}}
              />
            </TouchableOpacity>
            <View style={{}}>
              <Text style={{color: colors.tab_color, fontSize: 12}}>
                Hourly - Posted 2 hours ago
              </Text>
              <Text
                style={{
                  color: colors.primary_color,
                  fontSize: 20,
                }}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    },
                  },
                }}>
                {`Yêu cầu dạy #${props?.route?.params?.post?.id}`}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              paddingRight: 21,
              paddingLeft: 21,
              paddingBottom: 10,
              paddingTop: 10,
            }}>
            <Text style={{fontSize: 13, textAlign: 'justify'}}>
              {/* I am looking for a Co-Founder to join me visualize an idea to
              fruition. The Macro Idea is an Platform BYOB which stands for
              BeYourOwnBoss will be a social media to give a platform to
              entrepreneurs and investors and freelancers enhance the way they
              regularly network and to create for themselves and as our slogan
              says "Make it Real". You will need to show only one or two
              examples of your best quality work with proof, so original sketch
              file (screenshots ok) Will need to be turned around quickly, so
              working over the weekend ay be necessary. */}
              {props?.route?.params?.post?.description
                ? props?.route?.params?.post?.description
                : 'Không có mô tả'}
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: colors.backgroundColor,
                  borderRadius: 5,
                  padding: 5,
                }}>
                <Text
                  style={{color: colors.darker_green_color}}
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
          </View>

          <View style={[styles.informationBlock]}>
            <View style={{marginBottom: 10}}>
              <Text
                style={[styles.informationTitleText]}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    },
                  },
                }}>
                Thông tin chi tiết
              </Text>
              <View style={[styles.informationUnderline]} />
            </View>

            <View>
              <View>
                <View>
                  <Text
                    style={{fontSize: 12}}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: 'Montserrat-Bold',
                          fontWeight: 'normal',
                        },
                      },
                    }}>
                    Môn học:{' '}
                    <Text>{props?.route?.params?.post?.subject?.name}</Text>
                  </Text>
                </View>

                <View>
                  <Text
                    style={{fontSize: 12}}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: 'Montserrat-Bold',
                          fontWeight: 'normal',
                        },
                      },
                    }}>
                    Khối lớp:{' '}
                    <Text>{`Lớp ${props?.route?.params?.post?.grade}`}</Text>
                  </Text>
                </View>
              </View>

              <View>
                <Text
                  style={{fontSize: 12}}
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: 'Montserrat-Bold',
                        fontWeight: 'normal',
                      },
                    },
                  }}>
                  Địa chỉ:{' '}
                  <Text style={{color: colors.primary_color}}>
                    {`${props?.route?.params?.post?.address}`}
                  </Text>
                </Text>
              </View>

              <View>
                <Text
                  style={{fontSize: 12}}
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: 'Montserrat-Bold',
                        fontWeight: 'normal',
                      },
                    },
                  }}>
                  Học phí một buổi:{' '}
                  <Text
                    style={{color: colors.yellow_color}}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: 'Montserrat-Bold',
                          fontWeight: 'normal',
                        },
                      },
                    }}>
                    {`${props?.route?.params?.post?.offer} vnđ`}
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.informationBlock]}>
            <View style={{marginBottom: 10}}>
              <Text
                style={[styles.informationTitleText]}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    },
                  },
                }}>
                Thông tin người đăng
              </Text>
              <View style={[styles.informationUnderline]} />
            </View>

            <View>
              <View>
                <View>
                  <Text
                    style={{fontSize: 12}}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: 'Montserrat-Bold',
                          fontWeight: 'normal',
                        },
                      },
                    }}>
                    Tên: <Text>{props?.route?.params?.post?.user?.name}</Text>
                  </Text>
                </View>

                <View>
                  <Text
                    style={{fontSize: 12}}
                    theme={{
                      fonts: {
                        regular: {
                          fontFamily: 'Montserrat-Bold',
                          fontWeight: 'normal',
                        },
                      },
                    }}>
                    Số điện thoại:{' '}
                    <Text>{props?.route?.params?.post?.user?.phoneNumber}</Text>
                  </Text>
                </View>
              </View>

              <View>
                <Text
                  style={{fontSize: 12}}
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: 'Montserrat-Bold',
                        fontWeight: 'normal',
                      },
                    },
                  }}>
                  Địa chỉ:{' '}
                  <Text style={{color: colors.primary_color}}>
                    {props?.route?.params?.post?.address}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.informationBlock, {marginBottom: 10}]}>
            <View>
              <Text
                style={[styles.informationTitleText]}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    },
                  },
                }}>
                Thống kê người ứng tuyển
              </Text>
              <View style={[styles.informationUnderline]} />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <IconButton
                  icon={'eye'}
                  size={30}
                  color={colors.primary_color}
                  onPress={() =>
                    props.navigation.navigate('ListTutor', {
                      applicants: props?.route?.params?.post?.applicants,
                      post: props?.route?.params?.post,
                    })
                  }
                />
                <Text style={{color: colors.tab_color}}>
                  Xem người ứng tuyển
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
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
                Yêu cầu dạy
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.background_color,
    paddingBottom: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
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
});

export default PostDetail;

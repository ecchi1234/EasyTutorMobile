/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, Avatar, IconButton, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../asset/color';

import {AuthContext} from '../authContext';
import Auth from '../models/Auth';
import Rate from '../models/Rate';
import StarRating from '../component/StarRating';

const Profile = props => {
  // const {signOut} = React.useContext(AuthContext);
  const [listRatings, setListRatings] = React.useState([]);
  const [avgRating, setAvgRating] = React.useState();
  React.useEffect(() => {
    Rate.forTutor({id: 101})
      .get()
      .then(rates => {
        setListRatings(rates);
        setAvgRating(rates.avg);
        console.log(rates.avg);
        // rates.avg: điểm trung bình
        // rates.total: bao nhiêu thằng rate
      });
  }, []);
  const generalInformation = React.useMemo(() => {
    return (
      <>
        <View style={{padding: 20}}>
          <View
            style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
            <Text
              style={{
                color: colors.primary_information_text_color,
                marginBottom: 10,
              }}
              theme={{
                fonts: {
                  regular: {
                    fontFamily: 'Montserrat-Bold',
                    fontWeight: 'normal',
                  },
                },
              }}>
              Gioi thieu ban than
            </Text>
            <Text style={{fontSize: 11, color: '#C4C4C4'}}>
              Hi, My name is Tony Stark! I'm from California, USA. I'm seasoned
              professional with 12+ years of experience web and mobile UI/UX
              design, 4 years of Product Design, 8+ years team management in
              own, international and California, USA companies.
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: colors.backgroundColor,
                  borderRadius: 5,
                  padding: 5,
                }}>
                <Text
                  style={{color: colors.darker_green_color, fontSize: 10}}
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
        </View>

        <View style={{padding: 20}}>
          <View
            style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
            <Text
              style={{
                color: colors.primary_information_text_color,
                marginBottom: 10,
              }}
              theme={{
                fonts: {
                  regular: {
                    fontFamily: 'Montserrat-Bold',
                    fontWeight: 'normal',
                  },
                },
              }}>
              Thong tin gia su
            </Text>
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
                    Mon hoc: <Text>Toan hoc</Text>
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
                    Khoi lop: <Text>Cap 1</Text>
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
                  Dia chi:{' '}
                  <Text style={{color: colors.primary_color}}>
                    144 Xuân Thủy, Cầu Giấy, Hà Nội
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
                  Hoc phi mot buoi:{' '}
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
                    160. 000 vnđ
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }, []);

  const reviewInformation = React.useMemo(() => {
    return (
      <>
        <View style={{padding: 20}}>
          <View
            style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
            <View style={{marginBottom: 25}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: colors.primary_information_text_color,
                  }}
                  theme={{
                    fonts: {
                      regular: {
                        fontFamily: 'Montserrat-Bold',
                        fontWeight: 'normal',
                      },
                    },
                  }}>
                  Nhận xét
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                  }}>{`${listRatings.length} bình luận`}</Text>
              </View>
              <View style={[styles.informationUnderline]} />
            </View>
            {listRatings.map((rating, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}
                  key={index}>
                  <View style={{}}>
                    <Avatar.Image
                      source={require('../asset/review-avatar.png')}
                      size={35}
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: 7,
                      width: '86%',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{fontSize: 11}}
                        theme={{
                          fonts: {
                            regular: {
                              fontFamily: 'Montserrat-Bold',
                              fontWeight: 'normal',
                            },
                          },
                        }}>
                        Tran Thi B
                      </Text>
                      <StarRating star={rating.star} />
                    </View>
                    <View>
                      <Text style={{fontSize: 11}}>{rating?.comment}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </>
    );
  }, [listRatings]);

  const profileTabReducer = (state, action) => {
    switch (action.type) {
      case 'GENERAL': {
        return {
          information: generalInformation,
          tab: 'general',
        };
      }

      case 'REVIEW': {
        return {
          information: reviewInformation,
          tab: 'review',
        };
      }
    }
  };

  const [informationBlock, dispatch] = React.useReducer(profileTabReducer, {
    information: generalInformation,
    tab: 'general',
  });

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
              source={require('../asset/white-back-button.png')}
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
                fontFamily: 'Montserrat-Bold',
                fontWeight: 'normal',
              },
            },
          }}>
          Ho so gia su
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              paddingBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                position: 'relative',
                marginBottom: 40,
              }}>
              <Avatar.Image
                size={140}
                source={require('../asset/avatar.png')}
              />
              <View
                style={{
                  position: 'absolute',
                  left: 150,
                }}>
                <IconButton
                  icon={require('../asset/edit-button.png')}
                  size={23}
                  onPress={() => props.navigation.navigate('AddComment')}
                  color={'#fff'}
                  animated={true}
                  style={{backgroundColor: colors.primary_color}}
                />
              </View>
            </View>

            <View
              style={{
                borderRadius: 15,
                backgroundColor: '#fff',
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 130,
              }}>
              <Text
                style={{color: colors.primary_information_text_color}}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    },
                  },
                }}>
                {`${avgRating ? Number(avgRating).toFixed(1) : '0.0'}/5`}
              </Text>
              <Text
                style={{fontSize: 9, color: colors.tab_color}}
                theme={{
                  fonts: {
                    regular: {
                      fontFamily: 'Montserrat-Bold',
                      fontWeight: 'normal',
                    },
                  },
                }}>
                Danh gia
              </Text>
            </View>
            <Text
              theme={{
                fonts: {
                  regular: {
                    fontFamily: 'Montserrat-Bold',
                    fontWeight: 'normal',
                  },
                },
              }}>
              Nguyen Thi B
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={require('../asset/location.png')}
                style={{
                  width: 10,
                  height:
                    (10 *
                      Image.resolveAssetSource(require('../asset/location.png'))
                        .height) /
                    Image.resolveAssetSource(require('../asset/location.png'))
                      .width,
                  marginRight: 6,
                }}
              />
              <Text style={{color: colors.tab_color, fontSize: 10}}>
                Kyiv, Ukraine
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch({
                      type: 'GENERAL',
                    });
                  }}>
                  <View
                    style={{
                      backgroundColor:
                        informationBlock.tab === 'general'
                          ? colors.primary_color
                          : '#F3F1F1',
                      padding: 5,
                      borderRadius: 15,
                      paddingHorizontal: 30,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        color:
                          informationBlock.tab === 'general'
                            ? '#fff'
                            : colors.primary_information_text_color,
                      }}
                      theme={{
                        fonts: {
                          regular: {
                            fontFamily: 'Montserrat-Bold',
                            fontWeight: 'normal',
                          },
                        },
                      }}>
                      General
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width: '10%'}} />
              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch({
                      type: 'REVIEW',
                    });
                  }}>
                  <View
                    style={{
                      backgroundColor:
                        informationBlock.tab === 'review'
                          ? colors.primary_color
                          : '#F3F1F1',
                      padding: 5,
                      borderRadius: 15,
                      paddingHorizontal: 30,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        color:
                          informationBlock.tab === 'review'
                            ? '#fff'
                            : colors.primary_information_text_color,
                      }}
                      theme={{
                        fonts: {
                          regular: {
                            fontFamily: 'Montserrat-Bold',
                            fontWeight: 'normal',
                          },
                        },
                      }}>
                      Review
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {informationBlock.information}
        </View>
        <View style={{padding: 10}}>
          <Button onPress={() => Auth.logout()}>Logout</Button>
        </View>
      </ScrollView>
      <View style={{padding: 20, paddingTop: 0}}>
        <TouchableOpacity onPress={() => console.log('bilobilo')}>
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
              Moi day
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
});

export default Profile;

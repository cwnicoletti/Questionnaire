import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Text,
  ScrollView,
  View,
  Image,
  Switch,
} from 'react-native';
import {useAppDispatch} from '../../../../hooks';
import {setProgress} from '../../../../store/actions/progressbar/progressbar';
import {Feather, Ionicons, FontAwesome, AntDesign} from '@expo/vector-icons';

const SettingsScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [hibernate, setHibernate] = useState(false);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <View style={{flex: 1, marginTop: 20}}>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <ScrollView>
        <View style={{flex: 1}}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp
              onPress={() => setHibernate((prevState) => !prevState)}>
              <View
                style={{
                  paddingVertical: 20,
                  paddingBottom: 10,
                  marginHorizontal: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{marginLeft: 10}}>Hibernate</Text>
                <Switch
                  trackColor={{false: '#767577', true: '#434aa8'}}
                  thumbColor={'#FFFFFF'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setHibernate((prevState) => !prevState)}
                  value={hibernate}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  color: 'grey',
                  margin: 20,
                  marginTop: 10,
                }}>
                Hibernate puts your account on hold from new users. This
                prevents new users from finding your profile unless they are
                matched with you.
              </Text>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View style={{marginTop: 40, margin: 10}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Status</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Ionicons
                  name="ios-checkmark"
                  size={15}
                  color="green"
                  style={{marginLeft: 10, opacity: 1}}
                />
                <View
                  style={{
                    marginLeft: 10,
                    height: 10,
                    width: 10,
                    borderRadius: 25,
                    backgroundColor: 'green',
                  }}
                />
                <Text style={{marginLeft: 10}}>Online</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Ionicons
                  name="ios-checkmark"
                  size={15}
                  color="green"
                  style={{marginLeft: 10, opacity: 0}}
                />
                <View
                  style={{
                    marginLeft: 10,
                    height: 10,
                    width: 10,
                    borderRadius: 25,
                    backgroundColor: 'grey',
                  }}
                />
                <Text style={{marginLeft: 10}}>Invisible</Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  color: 'grey',
                  margin: 20,
                  marginLeft: 10,
                  marginTop: 0,
                }}>
                You will not appear online to anyone
              </Text>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View style={{marginTop: 40, margin: 10}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Account info</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <FontAwesome
                  name="envelope-o"
                  size={15}
                  color="black"
                  style={{marginLeft: 10, opacity: 1}}
                />
                <Text style={{marginLeft: 10}}>cwnicoletti@gmail.com</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Feather
                  name="phone"
                  size={15}
                  color="black"
                  style={{marginLeft: 10, opacity: 1}}
                />
                <Text style={{marginLeft: 10}}>+1 661 904 4124</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View style={{marginTop: 40, margin: 10}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Permissions</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <AntDesign
                  name="picture"
                  size={15}
                  color="black"
                  style={{marginLeft: 10}}
                />
                <Text style={{marginLeft: 10}}>Picture library</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Ionicons
                  name="ios-notifications"
                  size={15}
                  color="black"
                  style={{marginLeft: 10}}
                />
                <Text style={{marginLeft: 10}}>Notifications</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View style={{marginTop: 40, margin: 10}}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Legal info</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Ionicons
                  name="ios-lock-open-outline"
                  size={15}
                  color="black"
                  style={{marginLeft: 10}}
                />
                <Text style={{marginLeft: 10}}>Privacy Policy</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <AntDesign
                  name="user"
                  size={15}
                  color="black"
                  style={{marginLeft: 10}}
                />
                <Text style={{marginLeft: 10}}>Terms of use</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View style={{paddingVertical: 30}}>
            <Image
              source={require('../../../../assets/naire_icon/full_transparent_colored.png')}
              resizeMode="contain"
              style={{width: 150, height: 80, alignSelf: 'center'}}
            />
            <Text style={{color: 'grey', fontSize: 18, textAlign: 'center'}}>
              v0.0.1
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={{marginLeft: 10, color: 'red'}}>Logout</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableCmp>
              <View
                style={{
                  paddingVertical: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={{marginLeft: 10}}>Delete Account</Text>
              </View>
            </TouchableCmp>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <View
            style={{
              paddingVertical: 40,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  yourCode: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 29,
    fontWeight: '500',
  },

  authContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default SettingsScreen;

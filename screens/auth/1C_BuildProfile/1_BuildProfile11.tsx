import React, {useState} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {Feather, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../hooks';
import {setProgress} from '../../../store/actions/progressbar/progressbar';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AwesomeButton from 'react-native-really-awesome-button';

const BuildProfile11 = (props) => {
  const [isOften, setIsOften] = useState(false);
  const [isSometimes, setIsSometimes] = useState(false);
  const [isSocially, setIsSocially] = useState(false);
  const [isRarely, setIsRarely] = useState(false);
  const [isNever, setIsNever] = useState(false);
  const dispatch = useAppDispatch();

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.screen}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} animated={true} />
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(0.8));
            props.navigation.goBack();
          }}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{margin: 20}}
          />
        </TouchableCmp>
        <View style={{flex: 1, marginTop: 80}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.youAreAText}>
              Do you use recreational drugs?
            </Text>
            <MaterialCommunityIcons
              name="pill"
              size={28}
              color="black"
              style={{marginHorizontal: 5}}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <AwesomeButton
              raiseLevel={1}
              style={{
                marginVertical: 10,
              }}
              stretch={true}
              backgroundColor={'#ffffff'}
              backgroundActive={'rgba(0,0,0,0)'}
              borderWidth={1}
              borderColor={'#A1A1A1'}
              onPress={() => {
                setIsOften((prevState) => !prevState);
                setIsSometimes(false);
                setIsSocially(false);
                setIsRarely(false);
                setIsNever(false);
              }}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isOften}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: '#434aa8',
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Often
                </Text>
              </View>
            </AwesomeButton>
            <AwesomeButton
              raiseLevel={1}
              style={{
                marginVertical: 10,
              }}
              stretch={true}
              backgroundColor={'#ffffff'}
              backgroundActive={'rgba(0,0,0,0)'}
              borderWidth={1}
              borderColor={'#A1A1A1'}
              onPress={() => {
                setIsOften(false);
                setIsSometimes((prevState) => !prevState);
                setIsSocially(false);
                setIsRarely(false);
                setIsNever(false);
              }}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isSometimes}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: '#434aa8',
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Sometimes
                </Text>
              </View>
            </AwesomeButton>
            <AwesomeButton
              raiseLevel={1}
              style={{
                marginVertical: 10,
              }}
              stretch={true}
              backgroundColor={'#ffffff'}
              backgroundActive={'rgba(0,0,0,0)'}
              borderWidth={1}
              borderColor={'#A1A1A1'}
              onPress={() => {
                setIsOften(false);
                setIsSometimes(false);
                setIsSocially((prevState) => !prevState);
                setIsRarely(false);
                setIsNever(false);
              }}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isSocially}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: '#434aa8',
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Socially
                </Text>
              </View>
            </AwesomeButton>
            <AwesomeButton
              raiseLevel={1}
              style={{
                marginVertical: 10,
              }}
              stretch={true}
              backgroundColor={'#ffffff'}
              backgroundActive={'rgba(0,0,0,0)'}
              borderWidth={1}
              borderColor={'#A1A1A1'}
              onPress={() => {
                setIsOften(false);
                setIsSometimes(false);
                setIsSocially(false);
                setIsRarely((prevState) => !prevState);
                setIsNever(false);
              }}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isRarely}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: '#434aa8',
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Rarely
                </Text>
              </View>
            </AwesomeButton>
            <AwesomeButton
              raiseLevel={1}
              style={{
                marginVertical: 10,
              }}
              stretch={true}
              backgroundColor={'#ffffff'}
              backgroundActive={'rgba(0,0,0,0)'}
              borderWidth={1}
              borderColor={'#A1A1A1'}
              onPress={() => {
                setIsOften(false);
                setIsSometimes(false);
                setIsSocially(false);
                setIsRarely(false);
                setIsNever((prevState) => !prevState);
              }}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isNever}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: '#434aa8',
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Never
                </Text>
              </View>
            </AwesomeButton>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{fontSize: 13, marginHorizontal: 10}}>Skip</Text>
          </View>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(1));
              props.navigation.navigate('BuildProfile12');
            }}>
            <View
              style={{
                borderColor: '#A1A1A1',
                borderWidth: 1,
                marginRight: 20,
                height: 70,
                width: 70,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                borderRadius: 35,
                backgroundColor: '#ffffff',
                shadowOffset: {
                  width: -2,
                  height: 2,
                },
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}>
              <Feather name="arrow-right" size={28} color={'#616161'} />
            </View>
          </TouchableCmp>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  youAreAText: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default BuildProfile11;

import React, {useEffect, useRef, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  Ionicons,
} from '@expo/vector-icons';
import {useAppDispatch} from '../../../../hooks';
import {setProgress} from '../../../../store/actions/progressbar/progressbar';
import LottieView from 'lottie-react-native';
import AwesomeButton from 'react-native-really-awesome-button';

const CreateSurveyDone = (props) => {
  const dispatch = useAppDispatch();
  const lottieRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
    }, 200);
  }, []);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(1));
            props.navigation.goBack();
          }}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{margin: 20}}
          />
        </TouchableCmp>
        <TouchableCmp
          onPress={() => {
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
          }}>
          <Feather
            name="x-octagon"
            size={30}
            color="black"
            style={{margin: 20}}
          />
        </TouchableCmp>
      </View>
      <View style={{flex: 2, justifyContent: 'flex-end', alignItems: 'center'}}>
        <LottieView
          ref={lottieRef}
          source={require('../../../../assets/lottie_anims/52058-check.json')}
          autoPlay={false}
          loop={false}
          colorFilters={[
            {
              keypath: 'circle - bg',
              color: '#434aa8',
            },
            {
              keypath: 'circle - stroke',
              color: '#434aa8',
            },
          ]}
          style={{height: 80}}
        />
        <Text style={{fontWeight: '500', fontSize: 32, color: '#434aa8'}}>
          That's it!
        </Text>
        <Text style={{marginTop: 5, fontWeight: '300'}}>
          Thank you for completing this questionnaire
        </Text>
        <View
          style={{
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderColor: 'black',
            width: '50%',
            marginTop: 20,
          }}
        />
        <Text style={{fontSize: 22, marginTop: 10, fontWeight: '300'}}>
          Rememeber that:
        </Text>
      </View>
      <View style={{flex: 3, alignItems: 'center'}}>
        <View style={{marginHorizontal: 40}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="format-list-checks"
              size={24}
              color="black"
            />
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  marginHorizontal: 15,
                  fontWeight: '500',
                }}>
                More questionnaires means more accuracy
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 15,
                  marginTop: 5,
                  color: 'grey',
                }}>
                Each questionnaire you fill out not only helps you find a better
                next date, but everyone else as well
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome name="balance-scale" size={24} color="black" />
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  marginHorizontal: 15,
                  fontWeight: '500',
                }}>
                Genuine surveys means genuine dates
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 15,
                  marginTop: 5,
                  color: 'grey',
                }}>
                Trying to trick the algorithm is nearly statistically impossible
                and messes most with who you see
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <AwesomeButton
          raiseLevel={1}
          style={{
            marginVertical: 10,
            width: '70%',
            alignSelf: 'center',
          }}
          stretch={true}
          backgroundColor={'#ffffff'}
          backgroundActive={'rgba(0,0,0,0)'}
          borderWidth={1}
          borderColor={'#A1A1A1'}
          onPress={() => {
            props.navigation.popToTop();
          }}>
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
              Submit
            </Text>
          </View>
        </AwesomeButton>
      </View>
    </SafeAreaView>
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

export default CreateSurveyDone;

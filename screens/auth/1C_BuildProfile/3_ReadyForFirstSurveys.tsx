import React, {useEffect, useRef} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons';

import LottieView from 'lottie-react-native';

const ReadyForFirstSurveys = (props) => {
  const slideAnim = useRef(new Animated.Value(-9)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const lottieRef = useRef();

  const slideText = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const opacityText = () => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
      setTimeout(() => {
        opacityText();
        slideText();
      }, 1000);
    }, 300);
  }, []);

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
            props.navigation.goBack();
          }}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{margin: 20}}
          />
        </TouchableCmp>
        <View style={{flex: 1, alignItems: 'center'}}>
          <LottieView
            ref={lottieRef}
            source={require('../../../assets/lottie_anims/41896-application.json')}
            autoPlay={false}
            loop={false}
            speed={1}
            colorFilters={[
              {
                keypath: 'Single Ray',
                color: '#434aa8 ',
              },
              {
                keypath: 'Shape Layer 7',
                color: '#434aa8 ',
              },
              {
                keypath: 'Shape Layer 5',
                color: '#434aa8 ',
              },
              {
                keypath: 'Shape Layer 6',
                color: '#434aa8 ',
              },
            ]}
            style={{height: 200, width: 200}}
          />
          <Animated.View
            style={{
              opacity: opacityAnim,
              transform: [{translateY: slideAnim}],
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: '500', fontSize: 26, color: '#434aa8'}}>
                Woohoo! Your profile is built!
              </Text>
              <Text style={{fontSize: 22, fontWeight: '300', marginTop: 10}}>
                Time for what this app was made for!
              </Text>
              <View
                style={{
                  marginTop: 60,
                  marginHorizontal: '10%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name="format-list-checks"
                  size={28}
                  color="black"
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '300',
                    marginHorizontal: '10%',
                  }}>
                  In this last section you will be filling out surveys from
                  previous relationships and dates
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 60,
                marginHorizontal: '10%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name="chart-bar"
                size={28}
                color="black"
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '300',
                  marginHorizontal: 20,
                }}>
                This helps train our algorithm to predict the best possible next
                date for you
              </Text>
            </View>
          </Animated.View>
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
            <Text style={{fontSize: 13, marginHorizontal: 5}}>
              Show me the surveys!
            </Text>
            <LottieView
              source={require('../../../assets/lottie_anims/70797-arrows.json')}
              autoPlay={true}
              loop={true}
              colorFilters={[
                {
                  keypath: 'Shape Layer 2',
                  color: '#434aa8 ',
                },
                {
                  keypath: 'Shape Layer 3',
                  color: '#434aa8 ',
                },
                {
                  keypath: 'Shape Layer 1',
                  color: '#434aa8 ',
                },
              ]}
              speed={1.2}
              style={{height: 50, width: 50}}
            />
          </View>
          <TouchableCmp
            onPress={() => {
              props.navigation.navigate('AFirstSurveysIntroduction');
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

  seekingAText: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 29,
    fontWeight: '500',
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default ReadyForFirstSurveys;

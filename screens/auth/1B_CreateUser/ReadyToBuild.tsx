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
import {Feather} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../hooks';
import {setProgress} from '../../../store/actions/progressbar/progressbar';
import {Ionicons} from '@expo/vector-icons';

import LottieView from 'lottie-react-native';

const ReadyToBuild = (props) => {
  const dispatch = useAppDispatch();
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
      }, 600);
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
        <View style={{flex: 1, alignItems: 'center'}}>
          <LottieView
            ref={lottieRef}
            source={require('../../../assets/lottie_anims/78449-heart-beat.json')}
            autoPlay={false}
            loop={false}
            colorFilters={[
              {
                keypath: 'h6 Outlines',
                color: '#434aa8 ',
              },
              {
                keypath: 'Layer 8 Outlines 10',
                color: '#434aa8 ',
              },
              {
                keypath: 'Layer 8 Outlines 9',
                color: '#434aa8 ',
              },
              {
                keypath: 'Layer 8 Outlines 11',
                color: '#434aa8 ',
              },
              {
                keypath: 'Layer 8 Outlines 16',
                color: '#434aa8 ',
              },
              {
                keypath: 'Layer 8 Outlines 15',
                color: '#434aa8 ',
              },
              {
                keypath: 'Layer 8 Outlines 14',
                color: '#434aa8 ',
              },
              {
                keypath: 'Layer 8 Outlines 13',
                color: '#434aa8 ',
              },
              {
                keypath: 'Layer 8 Outlines 12',
                color: '#434aa8 ',
              },
            ]}
            speed={1.2}
            style={{height: 200, width: 200}}
          />
          <Animated.View
            style={{
              opacity: opacityAnim,
              transform: [{translateY: slideAnim}],
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: '500', fontSize: 26, color: '#434aa8'}}>
                Alright!
              </Text>
              <Text style={{fontSize: 26, fontWeight: '300', marginTop: 10}}>
                You're ready to build your profile!
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
              Let's get started!
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
              props.navigation.navigate('BuildProfile1');
              setTimeout(() => {
                dispatch(setProgress(0.09));
              }, 400);
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

export default ReadyToBuild;

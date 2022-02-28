import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import {FontAwesome, Feather} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const TitleOnlyHeader = ({navigation}) => {
  const [showX, setShowX] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const opacityXAnim = useRef(new Animated.Value(0)).current;
  const opacityBackAnim = useRef(new Animated.Value(0)).current;

  const showOpacityX = () => {
    Animated.timing(opacityXAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const removeOpacityX = () => {
    Animated.timing(opacityXAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const showOpacityBack = () => {
    Animated.timing(opacityBackAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const removeOpacityBack = () => {
    Animated.timing(opacityBackAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (
      typeof navigation
        .getState()
        .routes.find(
          (stackNavigator) => stackNavigator.name === 'MainStackNavigator',
        ).state !== 'undefined' &&
      typeof navigation
        .getState()
        .routes.find(
          (stackNavigator) => stackNavigator.name === 'MainStackNavigator',
        )
        .state.routes.find(
          (stackNavigator) => stackNavigator.name === 'ProfileScreen',
        ) !== 'undefined'
    ) {
      showOpacityBack();
      setShowBack(true);
    } else {
      setShowBack(false);
    }

    if (
      typeof navigation
        .getState()
        .routes.find(
          (stackNavigator) => stackNavigator.name === 'MainStackNavigator',
        ).state !== 'undefined' &&
      typeof navigation
        .getState()
        .routes.find(
          (stackNavigator) => stackNavigator.name === 'MainStackNavigator',
        )
        .state.routes.find(
          (stackNavigator) => stackNavigator.name === 'PurchaseScreen',
        ) !== 'undefined'
    ) {
      showOpacityX();
      setShowX(true);
    } else {
      setShowX(false);
    }
  }, [navigation, setShowBack, showOpacityX, navigation.getState()]);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: showX || showBack ? 'space-between' : 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {showX ? (
        <View>
          <TouchableCmp
            onPress={() => {
              removeOpacityX();
              navigation.setOptions({
                tabBarStyle: {display: 'flex'},
              });
              setTimeout(() => {
                navigation.navigate('MainScreen');
              }, 50);
            }}>
            <Animated.View
              style={{
                opacity: opacityXAnim,
                marginLeft: 30,
              }}>
              <Feather name="x" size={24} color="black" />
            </Animated.View>
          </TouchableCmp>
        </View>
      ) : null}
      {showBack ? (
        <View>
          <TouchableCmp
            onPress={() => {
              removeOpacityBack();
              navigation.setOptions({
                tabBarStyle: {display: 'flex'},
              });
              setTimeout(() => {
                navigation.navigate('MainScreen');
              }, 50);
            }}>
            <Animated.View
              style={{
                opacity: opacityBackAnim,
                marginLeft: 30,
              }}>
              <Feather name="x" size={24} color="black" />
            </Animated.View>
          </TouchableCmp>
        </View>
      ) : null}
      {showX ? (
        <MaskedView
          style={{
            flex: 1,
            height: 50,
            backgroundColor: 'black',
          }}
          maskElement={
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#434aa8',
                  textAlign: 'center',
                }}>
                Top Prediction
              </Text>
            </View>
          }>
          <LinearGradient
            colors={['#A700D1', '#434aa8']}
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </MaskedView>
      ) : (
        <MaskedView
          style={{
            height: 50,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          maskElement={
            <View>
              <Text
                style={{
                  fontSize: 34,
                  color: '#434aa8',
                  fontFamily: 'Nautilus',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                Naire
              </Text>
            </View>
          }>
          <LinearGradient
            colors={['#A700D1', '#434aa8']}
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </MaskedView>
      )}
      {showX ? (
        <View
          style={{
            opacity: 0,
            marginRight: 30,
          }}>
          <Feather name="x" size={24} color="black" />
        </View>
      ) : null}
      {showBack ? (
        <View
          style={{
            opacity: 0,
            marginRight: 30,
          }}>
          <Feather name="x" size={24} color="black" />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default TitleOnlyHeader;

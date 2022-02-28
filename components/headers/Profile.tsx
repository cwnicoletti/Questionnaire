import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Animated,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigationState} from '@react-navigation/native';

const Profile = ({navigation}) => {
  const [showX, setShowX] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Profile');
  const state = useNavigationState((state) => state);
  const opacityXAnim = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    if (state.routes[4].state?.routes[1] !== undefined) {
      switch (state.routes[4].state?.routes[1].name) {
        case 'TopTabEditProfileNavigator':
          setShowX(true);
          showOpacityX();
          setHeaderTitle('Edit Profile');
          break;
        case 'PerformanceScreen':
          setShowX(true);
          showOpacityX();
          setHeaderTitle('History & Metrics');
          break;
        case 'SettingsScreen':
          setShowX(true);
          showOpacityX();
          setHeaderTitle('Settings');
          break;
        default:
          break;
      }
    } else {
      removeOpacityX();
      setHeaderTitle('Profile');
    }
  }, [removeOpacityX, showOpacityX, state]);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: showX ? 'space-between' : 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {showX ? (
        <View
          style={{
            opacity: 0,
            marginLeft: 30,
          }}>
          <Feather name="x" size={24} color="black" />
        </View>
      ) : null}
      <Text
        style={{
          fontSize: 22,
          fontWeight: '200',
          padding: 5,
        }}>
        {headerTitle}
      </Text>

      {showX ? (
        <TouchableCmp
          onPress={() => {
            removeOpacityX();
            navigation.setOptions({
              tabBarStyle: {display: 'flex'},
            });
            setTimeout(() => {
              navigation.navigate('ProfileMainScreen');
            }, 50);
          }}>
          <Animated.View
            style={{
              opacity: opacityXAnim,
              marginRight: 30,
            }}>
            <Feather name="x" size={24} color="black" />
          </Animated.View>
        </TouchableCmp>
      ) : null}
    </SafeAreaView>
  );
};

export default Profile;

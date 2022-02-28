import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthenticatedNavigator from './2_AuthenticatedNavigator';
import {Dimensions, SafeAreaView, Animated} from 'react-native';
import * as Progress from 'react-native-progress';
import useDidMountEffect from '../helper/useDidMountEffect';
import MainNavigator from './3_MainNavigator';
import {Host, Portal} from 'react-native-portalize';

const AppNavigator = () => {
  const progress = useSelector((state) => state.progressbar.progress);
  const isUsingMain = useSelector((state) => state.signup.isUsingMain);
  const growAnim = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('window').width;

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  const growProgressBarBackground = () => {
    Animated.spring(growAnim, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const shrinkProgressBarBackground = () => {
    Animated.timing(growAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  useDidMountEffect(() => {
    shrinkProgressBarBackground();
    if (progress) {
      growProgressBarBackground();
    }
  }, [progress]);

  return (
    <NavigationContainer theme={MyTheme}>
      <Host>
        <SafeAreaView
          style={{
            position: 'absolute',
            alignSelf: 'center',
            zIndex: 2,
          }}>
          <Animated.View style={{transform: [{scaleX: growAnim}]}}>
            <Progress.Bar
              progress={progress}
              width={width - 20}
              style={{
                backgroundColor: '#F2F2F2',
              }}
              color={'#434aa8'}
              borderRadius={5}
              borderWidth={0}
            />
          </Animated.View>
        </SafeAreaView>
        {!isUsingMain && <AuthenticatedNavigator />}
        {isUsingMain && <MainNavigator />}
      </Host>
    </NavigationContainer>
  );
};

export default AppNavigator;

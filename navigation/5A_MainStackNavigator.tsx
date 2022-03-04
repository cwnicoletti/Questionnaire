import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/main/1_MainTab/Profile/ProfileScreen';
import PurchaseScreen from '../screens/main/1_MainTab/Purchase/PurchaseScreen';
import MainScreen from '../screens/main/1_MainTab/MainScreen';
import {TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();

const forFade = ({current}: {current: {progress: number | any}}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PurchaseScreen"
        component={PurchaseScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InterScreen2 from '../screens/main/1_MainTab/InterScreen2';
import BottomTabNavigator from './4_BottomTabNavigator';

const Stack = createStackNavigator();

const forFade = ({current}: {current: {progress: number | any}}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InterScreen2"
        component={InterScreen2}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;

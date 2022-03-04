import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import ProfileMainScreen from '../screens/main/5_ProfileTab/ProfileMainScreen';
import PerformanceScreen from '../screens/main/5_ProfileTab/Performance/PerformanceScreen';
import SettingsScreen from '../screens/main/5_ProfileTab/Settings/SettingsScreen';
import EditPickPrompt from '../screens/main/5_ProfileTab/EditProfile/EditPrompt/EditPickPrompt';
import EditWritePrompt from '../screens/main/5_ProfileTab/EditProfile/EditPrompt/EditWritePrompt';
import TopTabEditProfileNavigator from './6_TopTabEditProfileNavigator';

const Stack = createStackNavigator();

const forFade = ({current}: {current: {progress: number | any}}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMainScreen"
        component={ProfileMainScreen}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TopTabEditProfileNavigator"
        component={TopTabEditProfileNavigator}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditPickPrompt"
        component={EditPickPrompt}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditWritePrompt"
        component={EditWritePrompt}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PerformanceScreen"
        component={PerformanceScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;

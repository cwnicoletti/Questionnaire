import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import ProfileMainScreen from "../screens/main/5_ProfileTab/ProfileMainScreen";
import TopTabEditProfileNavigator from "./6_TopTabEditProfileNavigator";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
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
    </Stack.Navigator>
  );
}

export default ProfileStackNavigator;

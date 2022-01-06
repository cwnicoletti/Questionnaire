import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import SignupOrLoginScreen from "../screens/auth/SignupOrLoginScreen";
import SignupScreen1 from "../screens/auth/SignupPhone/SignupScreen1";
import SignupScreen2 from "../screens/auth/SignupPhone/SignupScreen2";
import AIntroduction from "../screens/auth/CreateUser/AIntroduction";
import StartupScreen from "../screens/StartupScreen";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function AuthenticatedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Startup"
        component={StartupScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StartAuth"
        component={SignupOrLoginScreen}
        options={{
          gestureEnabled: false,
          cardStyleInterpolator: forFade,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AIntroduction"
        component={AIntroduction}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupPhoneScreen1"
        component={SignupScreen1}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupPhoneScreen2"
        component={SignupScreen2}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedNavigator;

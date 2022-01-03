import React from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import { TransitionPresets } from '@react-navigation/stack';
import SignupOrLoginScreen from "../screens/auth/SignupOrLoginScreen";
import StartupScreen from "../screens/StartupScreen";

const Stack = createStackNavigator();

function AuthenticatedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "none",
        headerShown: false,
        navigationOptions: {
          headerVisible: false,
        },
      }}
    >
      <Stack.Screen name="Startup" component={StartupScreen} options={{}} />
      <Stack.Screen
        name="StartAuth"
        component={SignupOrLoginScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedNavigator;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import SignupOrLoginScreen from "../screens/auth/SignupOrLoginScreen";
import SignupScreen1 from "../screens/auth/SignupPhone/SignupScreen1";
import SignupScreen2 from "../screens/auth/SignupPhone/SignupScreen2";
import AIntroduction from "../screens/auth/CreateUser/AIntroduction";
import CreateUser1 from "../screens/auth/CreateUser/CreateUser1";
import CreateUser2 from "../screens/auth/CreateUser/CreateUser2";
import CreateUser3 from "../screens/auth/CreateUser/CreateUser3";
import CreateUser4 from "../screens/auth/CreateUser/CreateUser4";
import CreateUser5 from "../screens/auth/CreateUser/CreateUser5";
import ReadyToBuild from "../screens/auth/CreateUser/ReadyToBuild";
import BuildProfile1 from "../screens/auth/BuildProfile/BuildProfile1";
import BuildProfile2 from "../screens/auth/BuildProfile/BuildProfile2";
import BuildProfile3 from "../screens/auth/BuildProfile/BuildProfile3";
import BuildProfile4 from "../screens/auth/BuildProfile/BuildProfile4";
import BuildProfile5 from "../screens/auth/BuildProfile/BuildProfile5";
import BuildProfile6 from "../screens/auth/BuildProfile/BuildProfile6";
import BuildProfile7 from "../screens/auth/BuildProfile/BuildProfile7";
import BuildProfile8 from "../screens/auth/BuildProfile/BuildProfile8";
import BuildProfile9 from "../screens/auth/BuildProfile/BuildProfile9";
import BuildProfile10 from "../screens/auth/BuildProfile/BuildProfile10";
import ReadyToSurvey from "../screens/auth/BuildProfile/ReadyToSurvey";
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
      <Stack.Screen
        name="AIntroduction"
        component={AIntroduction}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser1"
        component={CreateUser1}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser2"
        component={CreateUser2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser3"
        component={CreateUser3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser4"
        component={CreateUser4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateUser5"
        component={CreateUser5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReadyToBuild"
        component={ReadyToBuild}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile1"
        component={BuildProfile1}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile2"
        component={BuildProfile2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile3"
        component={BuildProfile3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile4"
        component={BuildProfile4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile5"
        component={BuildProfile5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile6"
        component={BuildProfile6}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile7"
        component={BuildProfile7}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile8"
        component={BuildProfile8}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile9"
        component={BuildProfile9}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BuildProfile10"
        component={BuildProfile10}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReadyToSurvey"
        component={ReadyToSurvey}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedNavigator;

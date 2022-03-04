import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import SignupOrLoginScreen from '../screens/auth/SignupOrLoginScreen';
import SignupScreen1 from '../screens/auth/1A_SignupPhone/SignupScreen1';
import SignupScreen2 from '../screens/auth/1A_SignupPhone/SignupScreen2';
import AIntroduction from '../screens/auth/1B_CreateUser/AIntroduction';
import CreateUser1 from '../screens/auth/1B_CreateUser/CreateUser1';
import CreateUser2 from '../screens/auth/1B_CreateUser/CreateUser2';
import CreateUser3 from '../screens/auth/1B_CreateUser/CreateUser3';
import CreateUser4 from '../screens/auth/1B_CreateUser/CreateUser4';
import CreateUser5 from '../screens/auth/1B_CreateUser/CreateUser5';
import ReadyToBuild from '../screens/auth/1B_CreateUser/ReadyToBuild';
import BuildProfile1 from '../screens/auth/1C_BuildProfile/1_BuildProfile1';
import BuildProfile2 from '../screens/auth/1C_BuildProfile/1_BuildProfile2';
import BuildProfile3 from '../screens/auth/1C_BuildProfile/1_BuildProfile3';
import BuildProfile4 from '../screens/auth/1C_BuildProfile/1_BuildProfile4';
import BuildProfile5 from '../screens/auth/1C_BuildProfile/1_BuildProfile5';
import BuildProfile6 from '../screens/auth/1C_BuildProfile/1_BuildProfile6';
import BuildProfile7 from '../screens/auth/1C_BuildProfile/1_BuildProfile7';
import BuildProfile8 from '../screens/auth/1C_BuildProfile/1_BuildProfile8';
import BuildProfile9 from '../screens/auth/1C_BuildProfile/1_BuildProfile9';
import BuildProfile10 from '../screens/auth/1C_BuildProfile/1_BuildProfile10';
import BuildProfile11 from '../screens/auth/1C_BuildProfile/1_BuildProfile11';
import BuildProfile12 from '../screens/auth/1C_BuildProfile/1_BuildProfile12';
import PickPrompt from '../screens/auth/1C_BuildProfile/1_PickPrompt';
import WritePrompt from '../screens/auth/1C_BuildProfile/2_WritePrompt';
import PreviewProfile from '../screens/auth/1C_BuildProfile/3_PreviewProfile';
import ReadyForFirstSurveys from '../screens/auth/1C_BuildProfile/3_ReadyForFirstSurveys';
import AFirstSurveysIntroduction from '../screens/auth/1D_FirstSurveys/AFirstSurveysIntroduction';
import FirstSurveys2 from '../screens/auth/1D_FirstSurveys/FirstSurveys2';
import FirstSurveys3 from '../screens/auth/1D_FirstSurveys/FirstSurveys3';
import FirstSurveys4 from '../screens/auth/1D_FirstSurveys/FirstSurveys4';
import FirstSurveys5 from '../screens/auth/1D_FirstSurveys/FirstSurveys5';
import FirstSurveys6 from '../screens/auth/1D_FirstSurveys/FirstSurveys6';
import FirstSurveys7 from '../screens/auth/1D_FirstSurveys/FirstSurveys7';
import FirstSurveys8 from '../screens/auth/1D_FirstSurveys/FirstSurveys8';
import FirstSurveys9 from '../screens/auth/1D_FirstSurveys/FirstSurveys9';
import FirstSurveys10 from '../screens/auth/1D_FirstSurveys/FirstSurveys10';
import FirstSurveys11 from '../screens/auth/1D_FirstSurveys/FirstSurveys11';
import SurveyDone from '../screens/auth/1D_FirstSurveys/SurveyDone';
import LastAuthScreen1 from '../screens/auth/1E_LastAuthScreens/1_LastAuthScreen1';
import LastAuthScreen2 from '../screens/auth/1E_LastAuthScreens/1_LastAuthScreen2';
import InterScreen from '../screens/auth/1E_LastAuthScreens/InterScreen';
import StartupScreen from '../screens/StartupScreen';

type RootStackParamList = {
  Startup: undefined,
  StartAuth: undefined,
  SignupPhoneScreen1: undefined,
  SignupPhoneScreen2: undefined,
  AIntroduction: undefined,
  CreateUser1: undefined,
  CreateUser2: undefined,
  CreateUser3: undefined,
  CreateUser4: undefined,
  CreateUser5: undefined,
  ReadyToBuild: undefined,
  BuildProfile1: undefined,
  BuildProfile2: undefined,
  BuildProfile3: undefined,
  BuildProfile4: undefined,
  BuildProfile5: undefined,
  BuildProfile6: undefined,
  BuildProfile7: undefined,
  BuildProfile8: undefined,
  BuildProfile9: undefined,
  BuildProfile10: undefined,
  BuildProfile11: undefined,
  BuildProfile12: undefined,
  PickPrompt: undefined,
  WritePrompt: undefined,
  PreviewProfile: undefined,
  ReadyForFirstSurveys: undefined,
  AFirstSurveysIntroduction: undefined,
  FirstSurveys2: undefined,
  FirstSurveys3: undefined,
  FirstSurveys4: undefined,
  FirstSurveys5: undefined,
  FirstSurveys6: undefined,
  FirstSurveys7: undefined,
  FirstSurveys8: undefined,
  FirstSurveys9: undefined,
  FirstSurveys10: undefined,
  FirstSurveys11: undefined,
  SurveyDone: undefined,
  LastAuthScreen1: undefined,
  LastAuthScreen2: undefined,
  InterScreen: undefined,
};

const RootStack = createStackNavigator<RootStackParamList>();

const forFade = ({current}: {current: {progress: number | any}}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

function AuthenticatedNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Startup"
        component={StartupScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="StartAuth"
        component={SignupOrLoginScreen}
        options={{
          gestureEnabled: false,
          cardStyleInterpolator: forFade,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SignupPhoneScreen1"
        component={SignupScreen1}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SignupPhoneScreen2"
        component={SignupScreen2}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="AIntroduction"
        component={AIntroduction}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="CreateUser1"
        component={CreateUser1}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="CreateUser2"
        component={CreateUser2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="CreateUser3"
        component={CreateUser3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="CreateUser4"
        component={CreateUser4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="CreateUser5"
        component={CreateUser5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ReadyToBuild"
        component={ReadyToBuild}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile1"
        component={BuildProfile1}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile2"
        component={BuildProfile2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile3"
        component={BuildProfile3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile4"
        component={BuildProfile4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile5"
        component={BuildProfile5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile6"
        component={BuildProfile6}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile7"
        component={BuildProfile7}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile8"
        component={BuildProfile8}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile9"
        component={BuildProfile9}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile10"
        component={BuildProfile10}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile11"
        component={BuildProfile11}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="BuildProfile12"
        component={BuildProfile12}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="PickPrompt"
        component={PickPrompt}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="WritePrompt"
        component={WritePrompt}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="PreviewProfile"
        component={PreviewProfile}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ReadyForFirstSurveys"
        component={ReadyForFirstSurveys}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="AFirstSurveysIntroduction"
        component={AFirstSurveysIntroduction}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys2"
        component={FirstSurveys2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys3"
        component={FirstSurveys3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys4"
        component={FirstSurveys4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys5"
        component={FirstSurveys5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys6"
        component={FirstSurveys6}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys7"
        component={FirstSurveys7}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys8"
        component={FirstSurveys8}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys9"
        component={FirstSurveys9}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys10"
        component={FirstSurveys10}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="FirstSurveys11"
        component={FirstSurveys11}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SurveyDone"
        component={SurveyDone}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="LastAuthScreen1"
        component={LastAuthScreen1}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="LastAuthScreen2"
        component={LastAuthScreen2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="InterScreen"
        component={InterScreen}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
}

export default AuthenticatedNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import CreateSurvey1 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey1';
import CreateSurvey2 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey2';
import CreateSurvey3 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey3';
import CreateSurvey4 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey4';
import CreateSurvey5 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey5';
import CreateSurvey6 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey6';
import CreateSurvey7 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey7';
import CreateSurvey8 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey8';
import CreateSurvey9 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey9';
import CreateSurvey10 from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurvey10';
import CreateSurveyDone from '../screens/main/4_QuestionnaireTab/CreateSurvey/CreateSurveyDone';
import CurrentSurvey1 from '../screens/main/4_QuestionnaireTab/CurrentSurvey/CurrentSurvey1';
import Priorities from '../screens/main/4_QuestionnaireTab/Priorities/Priorities';
import QuestionnaireMainScreen from '../screens/main/4_QuestionnaireTab/QuestionnaireMainScreen';
import Questionnaires from '../components/headers/Questionnaires';

const Stack = createStackNavigator();

const forFade = ({current}: {current: {progress: number | any}}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function QuestionnaireStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QuestionnaireMainScreen"
        component={QuestionnaireMainScreen}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          header: ({navigation}) => <Questionnaires navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="CreateSurvey1"
        component={CreateSurvey1}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey2"
        component={CreateSurvey2}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey3"
        component={CreateSurvey3}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey4"
        component={CreateSurvey4}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey5"
        component={CreateSurvey5}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey6"
        component={CreateSurvey6}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey7"
        component={CreateSurvey7}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey8"
        component={CreateSurvey8}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey9"
        component={CreateSurvey9}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurvey10"
        component={CreateSurvey10}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateSurveyDone"
        component={CreateSurveyDone}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CurrentSurvey1"
        component={CurrentSurvey1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Priorities"
        component={Priorities}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default QuestionnaireStackNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  TransitionPresets,
} from '@react-navigation/stack';
import CardMainScreen from '../screens/main/2_CardTab/CardMainScreen';
import Card1 from '../screens/main/2_CardTab/CardCycle/Card1';
import InterCard from '../screens/main/2_CardTab/CardCycle/InterCard';
import CardPreferencesScreen from '../screens/main/2_CardTab/CardPreferences/CardPreferencesScreen';
import Explore from '../components/headers/Explore';

const Stack = createStackNavigator();

const forFade = ({current}: {current: {progress: number | any}}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function CardStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CardMainScreen"
        component={CardMainScreen}
        options={() => ({
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="CardPreferencesScreen"
        component={CardPreferencesScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          header: ({navigation}) => <Explore navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="InterCard"
        component={InterCard}
        options={{
          cardStyleInterpolator: forFade,
          header: ({navigation}) => <Explore navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Card1"
        component={Card1}
        options={{
          cardStyleInterpolator: forFade,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default CardStackNavigator;

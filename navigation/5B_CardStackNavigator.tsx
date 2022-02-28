import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Animated} from 'react-native';
import {
  TransitionPresets,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import CardMainScreen from '../screens/main/2_CardTab/CardMainScreen';
import Card1 from '../screens/main/2_CardTab/CardCycle/Card1';
import InterCard from '../screens/main/2_CardTab/CardCycle/InterCard';
import CardPreferencesScreen from '../screens/main/2_CardTab/CardPreferences/CardPreferencesScreen';
import Explore from '../components/headers/Explore';

const Stack = createStackNavigator();

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const configClose = {
  animation: 'spring',
  config: {
    stiffness: 1,
    damping: 2,
    mass: 0.002,
    overshootClamping: true,
    restDisplacementThreshold: 0.2,
    restSpeedThreshold: 0.2,
  },
};

const configOpen = {
  animation: 'spring',
  config: {
    stiffness: 1,
    damping: 2,
    mass: 0.005,
    overshootClamping: true,
    restDisplacementThreshold: 0.2,
    restSpeedThreshold: 0.2,
  },
};

const MyTransition = {
  transitionSpec: {
    open: configOpen,
    close: configClose,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [layouts.screen.width, 0],
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -layouts.screen.width],
          })
        : 0,
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: progress,
          },
        ],
      },
    };
  },
};

function CardStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CardMainScreen"
        component={CardMainScreen}
        options={({route, navigation}) => ({
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

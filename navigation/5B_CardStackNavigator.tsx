import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Animated } from "react-native";
import {
  TransitionPresets,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import CardMainScreen from "../screens/main/2_CardTab/CardMainScreen";
import Card1 from "../screens/main/2_CardTab/CardCycle/Card1";
import Card2 from "../screens/main/2_CardTab/CardCycle/Card2";
import InterCard from "../screens/main/2_CardTab/CardCycle/InterCard";
import CardPreferencesScreen from "../screens/main/2_CardTab/CardPreferences/CardPreferencesScreen";
import Explore from "../components/headers/Explore";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const configClose = {
  animation: "spring",
  config: {
    stiffness: 1,
    damping: 4000,
    mass: 0.09,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const configOpen = {
  animation: "spring",
  config: {
    stiffness: 1,
    damping: 4000,
    mass: 0.09,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const MyTransition = {
  transitionSpec: {
    open: configOpen,
    close: configClose,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [layouts.screen.height, layouts.screen.height, 0],
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, -layouts.screen.height, -layouts.screen.height],
          })
        : 0
    );

    return {
      cardStyle: {
        transform: [
          {
            translateY: progress,
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
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          header: ({ navigation }) => <Explore navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="CardPreferencesScreen"
        component={CardPreferencesScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          header: ({ navigation }) => <Explore navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="InterCard"
        component={InterCard}
        options={{
          ...MyTransition,
          header: ({ navigation }) => <Explore navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Card1"
        component={Card1}
        options={{
          ...MyTransition,
          header: ({ navigation }) => <Explore navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Card2"
        component={Card2}
        options={{
          ...MyTransition,
          header: ({ navigation }) => <Explore navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default CardStackNavigator;

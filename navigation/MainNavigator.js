import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InterScreen2 from "../screens/main/MainScreen/InterScreen2";
import TopTabNavigator from "./TopTabNavigator";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InterScreen2"
        component={InterScreen2}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;

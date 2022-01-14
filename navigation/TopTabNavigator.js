import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/main/MainScreen/MainScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;

import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./5A_MainStackNavigator";
import CardStackNavigator from "./5B_CardStackNavigator";
import MessagingStackNavigator from "./5C_MessagingStackNavigator";
import QuestionnaireStackNavigator from "./5D_QuestionnaireStackNavigator";
import ProfileStackNavigator from "./5E_ProfileStackNavigator";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import TitleOnlyHeader from "../components/headers/TitleOnlyHeader";

import Profile from "../components/headers/Profile";

const Tab = createBottomTabNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const screenOptions = (route, color) => {
  switch (route.name) {
    case "MainStackNavigator":
      return (
        <Image
          source={require("../assets/naire_icon/transparent_colored_cut.png")}
          style={{ height: 28, width: 18 }}
        />
      );
    case "CardStackNavigator":
      return (
        <MaterialCommunityIcons name="cards-outline" size={30} color={color} />
      );
    case "MessagingStackNavigator":
      return <Entypo name="chat" size={30} color={color} />;
    case "QuestionnaireStackNavigator":
      return <Feather name="list" size={30} color={color} />;
    case "ProfileStackNavigator":
      return <MaterialIcons name="person" size={38} color={color} />;
    default:
      break;
  }

  return <View />;
};

function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarBounces: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#434aa8",
        swipeEnabled: false,
        header: () => <TitleOnlyHeader />,
        tabBarIcon: ({ color }) => screenOptions(route, color),
        tabBarIndicatorStyle: { backgroundColor: "#434aa8" },
      })}
    >
      <Tab.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          tabBarShowIcon: true,
          cardStyleInterpolator: forFade,
          header: ({ navigation }) => (
            <TitleOnlyHeader navigation={navigation} />
          ),
        }}
      />
      <Tab.Screen
        name="CardStackNavigator"
        component={CardStackNavigator}
        options={{
          tabBarShowIcon: true,
          cardStyleInterpolator: forFade,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MessagingStackNavigator"
        component={MessagingStackNavigator}
        options={{
          tabBarShowIcon: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="QuestionnaireStackNavigator"
        component={QuestionnaireStackNavigator}
        options={{
          tabBarShowIcon: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
        options={{
          tabBarShowIcon: true,
          header: ({ navigation }) => <Profile navigation={navigation} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;

import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useAppSelector } from "../hooks";
import AuthenticatedNavigator from "./AuthenticatedNavigator";

const AppNavigator = () => {
  const isAuth = useAppSelector((state) => !!state.auth.token);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "black",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <AuthenticatedNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

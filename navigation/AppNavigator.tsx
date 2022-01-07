import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthenticatedNavigator from "./AuthenticatedNavigator";
import { Dimensions, SafeAreaView } from "react-native";
import * as Progress from "react-native-progress";

const AppNavigator = () => {
  const progress = useSelector((state) => state.progressbar.progress);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  const width = Dimensions.get("window").width;

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaView style={{ position: "absolute", zIndex: 2 }}>
        <Progress.Bar
          progress={progress}
          width={width}
          color={"#434aa8"}
          borderRadius={0}
          borderWidth={0}
        />
      </SafeAreaView>
      <AuthenticatedNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

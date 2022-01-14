import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const InterScreen2 = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("TabNavigator");
      console.log("hit2");
    }, 400);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
    </SafeAreaView>
  );
};

export default InterScreen2;

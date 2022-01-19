import React from "react";
import { Text, SafeAreaView } from "react-native";

const TitleOnlyHeader = () => {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 34,
          color: "#434aa8",
          fontFamily: "Nautilus",
          paddingTop: 5,
        }}
      >
        Naire
      </Text>
    </SafeAreaView>
  );
};

export default TitleOnlyHeader;

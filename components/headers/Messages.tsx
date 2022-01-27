import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Messages = () => {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "200",
          padding: 5,
        }}
      >
        Messages
      </Text>
    </SafeAreaView>
  );
};

export default Messages;

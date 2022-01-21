import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackMessages = ({ navigation }) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableCmp
        onPress={() => {
          navigation.pop();
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={28}
          color="black"
          style={{ marginLeft: 20 }}
        />
      </TouchableCmp>
      <Text
        style={{
          fontSize: 34,
          color: "#434aa8",
          fontFamily: "Nautilus",
          padding: 5,
        }}
      >
        Messages
      </Text>
      <Ionicons
        name="ios-arrow-back"
        size={28}
        color="black"
        style={{ marginRight: 20, opacity: 0 }}
      />
    </SafeAreaView>
  );
};

export default BackMessages;
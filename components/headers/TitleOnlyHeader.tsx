import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TitleOnlyHeader = ({ navigation }) => {
  const [showX, setShowX] = useState(false);
  const opacityXAnim = useRef(new Animated.Value(0)).current;

  const showOpacityX = () => {
    Animated.timing(opacityXAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const removeOpacityX = () => {
    Animated.timing(opacityXAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (
      typeof navigation
        .getState()
        .routes.find(
          (stackNavigator) => stackNavigator.name === "MainStackNavigator"
        ).state !== "undefined" &&
      typeof navigation
        .getState()
        .routes.find(
          (stackNavigator) => stackNavigator.name === "MainStackNavigator"
        )
        .state.routes.find(
          (stackNavigator) => stackNavigator.name === "ProfileScreen"
        ) !== "undefined"
    ) {
      setShowX(true);
      showOpacityX();
    } else {
      setShowX(false);
    }
  }, [navigation.getState().routes]);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: showX ? "space-between" : "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {showX ? (
        <TouchableCmp
          onPress={() => {
            removeOpacityX();
            navigation.navigate("MainScreen");
          }}
        >
          <Animated.View
            style={{
              opacity: opacityXAnim,
              marginLeft: 30,
            }}
          >
            <Ionicons name="ios-arrow-back" size={30} color="black" />
          </Animated.View>
        </TouchableCmp>
      ) : null}
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
      {showX ? (
        <View
          style={{
            opacity: 0,
            marginRight: 30,
          }}
        >
          <Ionicons name="ios-arrow-back" size={30} color="black" />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default TitleOnlyHeader;

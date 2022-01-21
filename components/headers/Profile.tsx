import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
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
          (stackNavigator) => stackNavigator.name === "ProfileStackNavigator"
        ).state !== "undefined"
    ) {
      setShowX(
        navigation
          .getState()
          .routes.find(
            (stackNavigator) => stackNavigator.name === "ProfileStackNavigator"
          ).state.index === 1
      );
      showOpacityX();
    }
  }, [
    navigation
      .getState()
      .routes.find(
        (stackNavigator) => stackNavigator.name === "ProfileStackNavigator"
      ),
  ]);

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
            navigation.navigate("ProfileMainScreen");
          }}
        >
          <Animated.View
            style={{
              opacity: opacityXAnim,
              marginLeft: 30,
            }}
          >
            <Feather name="x" size={24} color="black" />
          </Animated.View>
        </TouchableCmp>
      ) : null}
      <Text
        style={{
          fontSize: 34,
          color: "#434aa8",
          fontFamily: "Nautilus",
          padding: 5,
        }}
      >
        Profile
      </Text>
      {showX ? (
        <View
          style={{
            opacity: 0,
            marginRight: 30,
          }}
        >
          <Feather name="x" size={24} color="black" />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Profile;

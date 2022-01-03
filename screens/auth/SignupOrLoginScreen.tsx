import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";

const SignupOrLoginScreen = (props) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  const fadeInAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(fadeInAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...styles.screen,
        opacity: fadeInAnim,
      }}
    >
      <Text style={styles.titleText}>Naire</Text>
      <TouchableCmp
        onPress={() => {
          props.navigation.navigate("Signup1");
        }}
      >
        <View
          style={{
            borderColor: "#00a0db",
            borderWidth: 1,
            margin: 10,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: "20%",
            borderRadius: 15,
          }}
        >
          <Fontisto
            name="email"
            size={24}
            color="#38c9ff"
            style={{ marginVertical: 10 }}
          />
          <Text style={{ margin: 10, color: "#00a0db" }}>
            Signup with Email
          </Text>
        </View>
      </TouchableCmp>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },

  titleText: {
    color: "white",
    fontSize: 60,
  },

  image: {
    height: "35%",
    margin: 40,
  },

  text: {
    color: "white",
    padding: 10,
  },
});

export default SignupOrLoginScreen;

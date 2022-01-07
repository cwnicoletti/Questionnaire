import { FontAwesome, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Animated,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";

const SignupOrLoginScreen = (props) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  const fadeInAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 500,
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
      <StatusBar barStyle={"light-content"} animated={true} />
      <ImageBackground
        source={require("../../assets/background.jpg")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            flex: 2,
          }}
          source={require("../../assets/naire_icon/full_transparent.png")}
          resizeMode="contain"
        />
        <View style={{ flex: 1, marginHorizontal: 15 }}>
          <TouchableCmp
            onPress={() => {
              props.navigation.navigate("Signup1");
            }}
          >
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                margin: 5,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 35,
              }}
            >
              <AntDesign name="apple1" size={24} color="white" />
              <Text
                style={{
                  fontSize: 17,
                  margin: 15,
                  color: "white",
                }}
              >
                Sign up with Apple
              </Text>
            </View>
          </TouchableCmp>
          <TouchableCmp
            onPress={() => {
              props.navigation.navigate("Signup1");
            }}
          >
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                margin: 5,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 35,
              }}
            >
              <FontAwesome name="facebook-square" size={24} color="white" />
              <Text
                style={{
                  fontSize: 17,
                  margin: 15,
                  color: "white",
                }}
              >
                Sign up with Facebook
              </Text>
            </View>
          </TouchableCmp>
          <TouchableCmp
            onPress={() => {
              props.navigation.navigate("SignupPhoneScreen1");
            }}
          >
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                margin: 5,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 35,
              }}
            >
              <SimpleLineIcons name="phone" size={24} color="white" />
              <Text
                style={{
                  fontSize: 17,
                  margin: 15,
                  color: "white",
                }}
              >
                Sign up with Phone Number
              </Text>
            </View>
          </TouchableCmp>
          <View style={{ margin: 15, alignItems: "center" }}>
            <Text style={{ color: "white", marginBottom: 5 }}>
              By pressing a sign up option, you agree to our{" "}
              <Text
                style={{ fontWeight: "500", textDecorationLine: "underline" }}
              >
                Terms
              </Text>
              .
            </Text>
            <Text style={{ color: "white" }}>
              Find out how we use your data in our{" "}
              <Text
                style={{ fontWeight: "500", textDecorationLine: "underline" }}
              >
                Privacy Policy
              </Text>
              .
            </Text>
          </View>
        </View>
      </ImageBackground>
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
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 60,
    fontFamily: "Nautilus",
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

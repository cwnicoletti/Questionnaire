import React, { useEffect, useRef } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Animated,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";

import LottieView from "lottie-react-native";

const ReadyToSurvey = (props) => {
  const dispatch = useAppDispatch();
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const lottieRef = useRef();

  let width = Dimensions.get("window").width;
  if (Dimensions.get("window").width > 414) {
    width = 414;
  }

  const slideTopModal = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => {
      slideTopModal();
      setTimeout(() => {
        if (lottieRef.current) {
          lottieRef.current.play();
        }
      }, 600);
    }, 300);
  }, []);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={styles.screen}
    >
      <StatusBar barStyle={"dark-content"} animated={true} />
      <Animated.View
        style={{
          flexDirection: "row",
          borderColor: "grey",
          borderWidth: 1,
          borderTopWidth: 0,
          borderRadius: 10,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: "100%",
              position: "absolute",
            }}
          >
            <LottieView
              ref={lottieRef}
              source={require("../../../assets/lottie_anims/565-camera.json")}
              autoPlay={false}
              loop={false}
              speed={1.8}
              style={{
                marginLeft: 10,
                height: 75,
              }}
            />
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "300",
                textAlign: "center",
              }}
            >
              Lookin' pretty sweet!
            </Text>
          </View>
        </SafeAreaView>
      </Animated.View>
      <ScrollView directionalLockEnabled={true}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ }}>
            <Image
              style={{
                height: 400,
                width: width,
                alignSelf: "flex-start",
              }}
              source={{
                uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1641866787/image2_xajcrq.jpg",
              }}
            />
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 13, marginHorizontal: 5 }}>
              Just one more step
            </Text>
            <LottieView
              source={require("../../../assets/lottie_anims/70797-arrows.json")}
              autoPlay={true}
              loop={true}
              colorFilters={[
                {
                  keypath: "Shape Layer 2",
                  color: "#434aa8 ",
                },
                {
                  keypath: "Shape Layer 3",
                  color: "#434aa8 ",
                },
                {
                  keypath: "Shape Layer 1",
                  color: "#434aa8 ",
                },
              ]}
              speed={1.2}
              style={{ height: 50, width: 50 }}
            />
          </View>
          <TouchableCmp
            onPress={() => {
              props.navigation.navigate("BuildProfile1");
              setTimeout(() => {
                dispatch(setProgress(0.1));
              }, 400);
            }}
          >
            <View
              style={{
                borderColor: "#A1A1A1",
                borderWidth: 1,
                marginRight: 20,
                height: 70,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 35,
                backgroundColor: "#ffffff",
                shadowOffset: {
                  width: -2,
                  height: 2,
                },
                shadowColor: "black",
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
            >
              <Feather name="arrow-right" size={28} color={"#616161"} />
            </View>
          </TouchableCmp>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  seekingAText: {
    marginLeft: "10%",
    color: "black",
    fontSize: 29,
    fontWeight: "500",
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default ReadyToSurvey;

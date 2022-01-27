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
import FullProfile from "../../../components/FullProfile/FullProfile";

const PreviewProfile = (props) => {
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
              speed={2.2}
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
        <FullProfile
          name="Christian Nicoletti"
          age={25}
          height={`"6' 0"`}
          worksOut="Sometimes"
          city="Castaic"
          jobTitle="Software Engineer"
          smokesTobacco="Never"
          smokesWeed="Rarely"
          drinks="Socially"
          drugs="Rarely"
          education="Undergraduate Degree"
          school="University of California, Santa Cruz"
          Image1="https://res.cloudinary.com/personaluse1234/image/upload/v1641866787/Naire/my%20profile%20pictures/image2_xajcrq.jpg"
          Image2="https://res.cloudinary.com/personaluse1234/image/upload/v1643244835/Naire/image0_9_oa2qhz.jpg"
          Image3="https://res.cloudinary.com/personaluse1234/image/upload/v1642563759/Naire/my%20profile%20pictures/image0_16_1_tgu2ic.png"
          Image4="https://res.cloudinary.com/personaluse1234/image/upload/v1641866786/Naire/my%20profile%20pictures/image1_5_pgbyec.jpg"
          Image5="https://res.cloudinary.com/personaluse1234/image/upload/v1643244829/Naire/image2_1_ixidvf.jpg"
          Image6="https://res.cloudinary.com/personaluse1234/image/upload/v1643244829/Naire/image1_7_lga2kv.jpg"
        />
      </ScrollView>
      <View
        style={{
          marginTop: 20,
          marginBottom: 30,
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
            props.navigation.navigate("ReadyForFirstSurveys");
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

export default PreviewProfile;

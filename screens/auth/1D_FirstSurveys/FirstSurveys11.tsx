import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";

import Slider from "@react-native-community/slider";

const FirstSurveys11 = (props) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [secondSliderValue, setSecondSliderValue] = useState(0);
  const dispatch = useAppDispatch();

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
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"dark-content"} animated={true} />
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(0.9));
            props.navigation.goBack();
          }}
        >
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{ margin: 20 }}
          />
        </TouchableCmp>
        <View style={{ flex: 1, marginTop: 40 }}>
          <View
            style={{
              alignItems: "center",
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              How attracted were you to their emotions?
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "grey",
                fontWeight: "300",
                marginTop: 10,
              }}
            >
              (i.e., angry, sad, happy)
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>{sliderValue / 100}%</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={1}
              step={1}
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                marginHorizontal: 20,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: "10%",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              How important is this to you?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={{ color: "black", fontSize: 20, fontWeight: "400" }}>
              {secondSliderValue / 100}%
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={1}
              step={1}
              maximumValue={10000}
              onValueChange={(value) => {
                setSecondSliderValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                marginHorizontal: 20,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
        </View>
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
            <Text style={{ fontSize: 13, marginHorizontal: 10 }}>Skip</Text>
          </View>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0));
              props.navigation.navigate("SurveyDone");
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

  youAreAText: {
    color: "black",
    fontSize: 29,
    fontWeight: "500",
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
    alignItems: "center",
  },
});

export default FirstSurveys11;

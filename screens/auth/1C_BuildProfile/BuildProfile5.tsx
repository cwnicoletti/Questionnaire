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
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";

import { Picker } from "react-native-wheel-datepicker";

const BuildProfile5 = (props) => {
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
            dispatch(setProgress(0.27));
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
        <View style={{ flex: 1, marginTop: 80 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.youAreAText}>What is your height?</Text>
            <Entypo
              name="ruler"
              size={24}
              color="black"
              style={{ marginHorizontal: 5 }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Picker
              style={{
                backgroundColor: "rgba(0,0,0,0)",
              }}
              selectedValue={"<3'0\""}
              pickerData={[
                "< 3' 0\"",
                "3' 1\"",
                "3' 2\"",
                "3' 3\"",
                "3' 4\"",
                "3' 5\"",
                "3' 6\"",
                "3' 7\"",
                "3' 8\"",
                "3' 9\"",
                "3' 10\"",
                "3' 11\"",
                "4' 0\"",
                "4' 1\"",
                "4' 2\"",
                "4' 3\"",
                "4' 4\"",
                "4' 5\"",
                "4' 6\"",
                "4' 7\"",
                "4' 8\"",
                "4' 9\"",
                "4' 10\"",
                "4' 11\"",
                "5' 0\"",
                "5' 1\"",
                "5' 2\"",
                "5' 3\"",
                "5' 4\"",
                "5' 5\"",
                "5' 6\"",
                "5' 7\"",
                "5' 8\"",
                "5' 9\"",
                "5' 10\"",
                "5' 11\"",
                "6' 0\"",
                "6' 1\"",
                "6' 2\"",
                "6' 3\"",
                "6' 4\"",
                "6' 5\"",
                "6' 6\"",
                "6' 7\"",
                "6' 8\"",
                "6' 9\"",
                "6' 10\"",
                "6' 11\"",
                "7' 0\"",
                "7' 1\"",
                "7' 2\"",
                "7' 3\"",
                "7' 4\"",
                "7' 5\"",
                "7' 6\"",
                "7' 7\"",
                "7' 8\"",
                "7' 10\"",
                "7' 11\"",
                "8' 0\"",
                "8' 1\"",
                "8' 2\"",
                "8' 3\"",
                "8' 4\"",
                "8' 5\"",
                "8' 6\"",
                "8' 7\"",
                "8' 8\"",
                "8' 9\"",
                "8' 10\"",
                "8' 11\"",
                "> 9' 0\"",
              ]}
              onValueChange={() => {}}
            />
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
              dispatch(setProgress(0.42));
              props.navigation.navigate("BuildProfile6");
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
    marginLeft: "10%",
    color: "black",
    fontSize: 22,
    fontWeight: "500",
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default BuildProfile5;

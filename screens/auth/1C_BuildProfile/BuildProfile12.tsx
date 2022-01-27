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
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import AwesomeButton from "react-native-really-awesome-button";

const BuildProfile12 = (props) => {
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
        <View style={{ flex: 1, marginTop: 80 }}>
          <Text style={styles.youAreAText}>
            Last thing before we preview your profile: Prompts!
          </Text>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: "10%",
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                color: "grey",
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              Answering these prompts with a question is required
            </Text>
          </View>
          <View>
            <View style={{ marginTop: 40, alignItems: "center" }}>
              <TouchableCmp>
                <View
                  style={{
                    borderWidth: 0.7,
                    borderColor: "black",
                    borderRadius: 15,
                    width: 350,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "grey",
                      margin: 15,
                    }}
                  >
                    A very important question for our relationship is...
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 15,
                      textAlign: "center",
                      marginBottom: 20,
                    }}
                  >
                    What're we gonna cook together? 😊
                  </Text>
                </View>
              </TouchableCmp>
              <TouchableCmp>
                <View
                  style={{
                    marginVertical: 10,
                    borderWidth: 0.7,
                    borderColor: "black",
                    borderRadius: 15,
                    width: 350,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "grey", margin: 15 }}>
                    Something I'd love to know about your family is...
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 15,
                      textAlign: "center",
                      marginBottom: 20,
                    }}
                  >
                    Do you guys have any family traditions?
                  </Text>
                </View>
              </TouchableCmp>
              <TouchableCmp>
                <View
                  style={{
                    borderWidth: 0.7,
                    borderColor: "black",
                    borderRadius: 15,
                    width: 350,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "grey", margin: 15 }}>
                    The first thing I gotta know is...
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 15,
                      textAlign: "center",
                      marginBottom: 20,
                    }}
                  >
                    Do bears beat battlestar galactica?
                  </Text>
                </View>
              </TouchableCmp>
            </View>
          </View>
          <View style={styles.buttonsContainer}></View>
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
              props.navigation.navigate("PreviewProfile");
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
    marginHorizontal: "10%",
    color: "black",
    fontSize: 22,
    fontWeight: "500",
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default BuildProfile12;

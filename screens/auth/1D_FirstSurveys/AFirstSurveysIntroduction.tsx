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
import { Feather, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import AwesomeButton from "react-native-really-awesome-button";
import { ScrollView } from "react-native-gesture-handler";

const AFirstSurveysIntroduction = (props) => {
  const [isMan, setIsMan] = useState(false);
  const [isWoman, setIsWoman] = useState(false);
  const [isMore, setIsMore] = useState(false);
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
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>Your first survey</Text>
            <Text
              style={{
                fontSize: 22,
                color: "grey",
                fontWeight: "300",
                margin: 10,
              }}
            >
              Don't worry! You can change any of your surveys at any time
            </Text>
          </View>
          <ScrollView>
            <View style={styles.buttonsContainer}>
              <AwesomeButton
                raiseLevel={1}
                style={{
                  marginVertical: 10,
                }}
                stretch={true}
                backgroundColor={"#ffffff"}
                backgroundActive={"rgba(0,0,0,0)"}
                borderWidth={1}
                borderColor={"#A1A1A1"}
                onPress={() => {
                  props.navigation.navigate("FirstSurveys2");
                  setTimeout(() => {
                    dispatch(setProgress(0.1));
                  }, 400);
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={25}
                    color="black"
                    style={{ marginRight: 20 }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "300",
                    }}
                  >
                    Survey 1
                  </Text>
                </View>
              </AwesomeButton>
              <AwesomeButton
                raiseLevel={1}
                style={{
                  marginVertical: 10,
                }}
                stretch={true}
                backgroundColor={"#ffffff"}
                backgroundActive={"rgba(0,0,0,0)"}
                borderWidth={1}
                borderColor={"#A1A1A1"}
                onPress={() => {
                  setIsWoman((prevState) => !prevState);
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    justifyContent: "center",
                  }}
                >
                  <Octicons
                    name="plus-small"
                    size={25}
                    color="black"
                    style={{ marginLeft: 20 }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "300",
                    }}
                  >
                    Add another survey
                  </Text>
                </View>
              </AwesomeButton>
            </View>
          </ScrollView>
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
              props.navigation.navigate("LastAuthScreen1");
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
    color: "#434aa8",
    fontSize: 29,
    fontWeight: "500",
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default AFirstSurveysIntroduction;

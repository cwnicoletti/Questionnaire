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
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import { Ionicons } from "@expo/vector-icons";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import AwesomeButton from "react-native-really-awesome-button";

const CreateUser3 = (props) => {
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
            dispatch(setProgress(0.4));
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
          <Text style={styles.youAreAText}>You are a....</Text>
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
                setIsMan((prevState) => !prevState);
                setIsWoman(false);
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
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isMan}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: "#434aa8",
                    borderRadius: 5,
                  }}
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
                  Man
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
                setIsMan(false);
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
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isWoman}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: "#434aa8",
                    borderRadius: 5,
                  }}
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
                  Woman
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
                setIsMan(false);
                setIsWoman(false);
                setIsMore(true);
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "300" }}>More</Text>
            </AwesomeButton>
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
            <BouncyCheckbox
              size={25}
              fillColor="#434aa8"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#434aa8", borderRadius: 5 }}
              disableText={true}
            />
            <Text style={{ fontSize: 13, marginHorizontal: 10 }}>
              Display gender on my profile
            </Text>
          </View>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0.8));
              props.navigation.navigate("CreateUser4");
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
    fontSize: 29,
    fontWeight: "500",
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default CreateUser3;

import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PromptWithMessage = (props) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View
      style={{
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "500" }}>{props.prompt}</Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "200",
          marginTop: 20,
          marginHorizontal: 10,
        }}
      >
        {props.answer}
      </Text>
      {props.showMessage ? (
        <View style={{ marginTop: 10 }}>
          <TouchableCmp onPress={props.onOpen}>
            <View
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
                height: 50,
                width: 50,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowColor: "black",
                shadowOpacity: 0.1,
                shadowRadius: 6,
                borderRadius: 50 / 2,
              }}
            >
              <MaskedView
                style={{ flex: 1 }}
                maskElement={
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome
                      name="envelope-o"
                      size={28}
                      color="black"
                      style={{ position: "absolute" }}
                    />
                    <FontAwesome5
                      name="heart"
                      size={11}
                      color="black"
                      style={{ marginBottom: 5 }}
                    />
                  </View>
                }
              >
                <LinearGradient
                  colors={["#A700D1", "#434aa8"]}
                  style={{
                    flex: 1,
                    height: 50,
                    width: 50,
                  }}
                />
              </MaskedView>
            </View>
          </TouchableCmp>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PromptWithMessage;

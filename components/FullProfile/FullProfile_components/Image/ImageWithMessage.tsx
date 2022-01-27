import React, { useEffect } from "react";
import {
  StyleSheet,
  Platform,
  Image,
  View,
  Dimensions,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ImageWithMessage = (props) => {
  const width = Dimensions.get("window").width;

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ height: width, width: width, marginRight: 15 }}
      />
      {props.showMessage ? (
        <TouchableCmp onPress={props.onOpen}>
          <View
            style={{
              position: "absolute",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              right: 20,
              bottom: 20,
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
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageWithMessage;

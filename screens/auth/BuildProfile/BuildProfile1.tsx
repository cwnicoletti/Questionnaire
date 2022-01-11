import React from "react";
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
import { Feather, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import { Ionicons } from "@expo/vector-icons";
import getPhotoPermissions from "../../../helper/getPhotoPermissions";
import * as ImagePicker from "expo-image-picker";

const BuildProfile1 = (props) => {
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
            dispatch(setProgress(0));
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
          <Text style={styles.seekingAText}>
            Let's start building with some pictures!
          </Text>
          <View
            style={{
              margin: 45,
              flex: 1,
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableCmp
                onPress={async () => {
                  if (!(await getPhotoPermissions(ImagePicker))) {
                    return;
                  }
                  const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: "Images",
                    allowsEditing: true,
                    base64: true,
                    quality: 1,
                  });
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#F0F0F0",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -5,
                      right: -5,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                </View>
              </TouchableCmp>
              <TouchableCmp
                onPress={async () => {
                  if (!(await getPhotoPermissions(ImagePicker))) {
                    return;
                  }
                  const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: "Images",
                    allowsEditing: true,
                    base64: true,
                    quality: 1,
                  });
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#F0F0F0",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -5,
                      right: -5,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                </View>
              </TouchableCmp>
              <TouchableCmp
                onPress={async () => {
                  if (!(await getPhotoPermissions(ImagePicker))) {
                    return;
                  }
                  const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: "Images",
                    allowsEditing: true,
                    base64: true,
                    quality: 1,
                  });
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#F0F0F0",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -5,
                      right: -5,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                </View>
              </TouchableCmp>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableCmp
                onPress={async () => {
                  if (!(await getPhotoPermissions(ImagePicker))) {
                    return;
                  }
                  const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: "Images",
                    allowsEditing: true,
                    base64: true,
                    quality: 1,
                  });
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#F0F0F0",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -5,
                      right: -5,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                </View>
              </TouchableCmp>
              <TouchableCmp
                onPress={async () => {
                  if (!(await getPhotoPermissions(ImagePicker))) {
                    return;
                  }
                  const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: "Images",
                    allowsEditing: true,
                    base64: true,
                    quality: 1,
                  });
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#F0F0F0",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -5,
                      right: -5,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                </View>
              </TouchableCmp>
              <TouchableCmp
                onPress={async () => {
                  if (!(await getPhotoPermissions(ImagePicker))) {
                    return;
                  }
                  const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: "Images",
                    allowsEditing: true,
                    base64: true,
                    quality: 1,
                  });
                }}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#F0F0F0",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -5,
                      right: -5,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                </View>
              </TouchableCmp>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "flex-start",
              marginHorizontal: 60,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ marginRight: 10 }}>
                Try to pick photos with just you and showing your face!
              </Text>
              <Fontisto name="slightly-smile" size={24} color="black" />
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
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0.2));
              props.navigation.navigate("BuildProfile2");
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

export default BuildProfile1;

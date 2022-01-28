import React, { useRef, useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Feather, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import { Ionicons } from "@expo/vector-icons";
import getPhotoPermissions from "../../../helper/getPhotoPermissions";
import * as ImagePicker from "expo-image-picker";
import LottieView from "lottie-react-native";

const BuildProfile1 = (props) => {
  const dispatch = useAppDispatch();

  const [image1, setImage1] = useState("");
  const [loadingImage1, setLoadingImage1] = useState(false);
  const [image2, setImage2] = useState("");
  const [loadingImage2, setLoadingImage2] = useState(false);
  const [image3, setImage3] = useState("");
  const [loadingImage3, setLoadingImage3] = useState(false);
  const [image4, setImage4] = useState("");
  const [loadingImage4, setLoadingImage4] = useState(false);
  const [image5, setImage5] = useState("");
  const [loadingImage5, setLoadingImage5] = useState(false);
  const [image6, setImage6] = useState("");
  const [loadingImage6, setLoadingImage6] = useState(false);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
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
              onPress={async function () {
                if (!(await getPhotoPermissions(ImagePicker))) {
                  return;
                }
                setTimeout(() => {
                  setLoadingImage1(true);
                }, 300);

                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  quality: 1,
                });

                if (result.cancelled) {
                  setLoadingImage1(false);
                } else {
                  setImage1(result.uri);
                }
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Image
                  source={
                    image1 ? { uri: image1, width: 100, height: 100 } : null
                  }
                  onLoadEnd={async function () {
                    setLoadingImage1(false);
                  }}
                />
                {loadingImage1 ? (
                  <LottieView
                    source={require("../../../assets/lottie_anims/74653-image-loader.json")}
                    autoPlay={true}
                    loop={true}
                    colorFilters={[
                      {
                        keypath: "shapes",
                        color: "#434aa8",
                      },
                    ]}
                    speed={0.5}
                    style={{
                      height: 100,
                      width: 100,
                      position: "absolute",
                    }}
                  />
                ) : null}
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

                setTimeout(() => {
                  setLoadingImage2(true);
                }, 300);

                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  quality: 1,
                });

                if (result.cancelled) {
                  setLoadingImage2(false);
                } else {
                  setImage2(result.uri);
                }
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Image
                  source={
                    image2 ? { uri: image2, width: 100, height: 100 } : null
                  }
                  onLoadEnd={async function () {
                    setLoadingImage2(false);
                  }}
                />
                {loadingImage2 ? (
                  <LottieView
                    source={require("../../../assets/lottie_anims/74653-image-loader.json")}
                    autoPlay={true}
                    loop={true}
                    colorFilters={[
                      {
                        keypath: "shapes",
                        color: "#434aa8",
                      },
                    ]}
                    speed={0.5}
                    style={{
                      height: 100,
                      width: 100,
                      position: "absolute",
                    }}
                  />
                ) : null}
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

                setTimeout(() => {
                  setLoadingImage3(true);
                }, 300);

                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  quality: 1,
                });

                if (result.cancelled) {
                  setLoadingImage3(false);
                } else {
                  setImage3(result.uri);
                }
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Image
                  source={
                    image3 ? { uri: image3, width: 100, height: 100 } : null
                  }
                  onLoadEnd={async function () {
                    setLoadingImage3(false);
                  }}
                />
                {loadingImage3 ? (
                  <LottieView
                    source={require("../../../assets/lottie_anims/74653-image-loader.json")}
                    autoPlay={true}
                    loop={true}
                    colorFilters={[
                      {
                        keypath: "shapes",
                        color: "#434aa8",
                      },
                    ]}
                    speed={0.5}
                    style={{
                      height: 100,
                      width: 100,
                      position: "absolute",
                    }}
                  />
                ) : null}
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

                setTimeout(() => {
                  setLoadingImage4(true);
                }, 200);

                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  quality: 1,
                });

                if (result.cancelled) {
                  setLoadingImage4(false);
                } else {
                  setImage4(result.uri);
                }
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Image
                  source={
                    image4 ? { uri: image4, width: 100, height: 100 } : null
                  }
                  onLoadEnd={async function () {
                    setLoadingImage4(false);
                  }}
                />
                {loadingImage4 ? (
                  <LottieView
                    source={require("../../../assets/lottie_anims/74653-image-loader.json")}
                    autoPlay={true}
                    loop={true}
                    colorFilters={[
                      {
                        keypath: "shapes",
                        color: "#434aa8",
                      },
                    ]}
                    speed={0.5}
                    style={{
                      height: 100,
                      width: 100,
                      position: "absolute",
                    }}
                  />
                ) : null}
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

                setTimeout(() => {
                  setLoadingImage5(true);
                }, 300);

                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  quality: 1,
                });

                if (result.cancelled) {
                  setLoadingImage5(false);
                } else {
                  setImage5(result.uri);
                }
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Image
                  source={
                    image5 ? { uri: image5, width: 100, height: 100 } : null
                  }
                  onLoadEnd={async function () {
                    setLoadingImage5(false);
                  }}
                />
                {loadingImage5 ? (
                  <LottieView
                    source={require("../../../assets/lottie_anims/74653-image-loader.json")}
                    autoPlay={true}
                    loop={true}
                    colorFilters={[
                      {
                        keypath: "shapes",
                        color: "#434aa8",
                      },
                    ]}
                    speed={0.5}
                    style={{
                      height: 100,
                      width: 100,
                      position: "absolute",
                    }}
                  />
                ) : null}
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

                setTimeout(() => {
                  setLoadingImage6(true);
                }, 300);

                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  quality: 1,
                });

                if (result.cancelled) {
                  setLoadingImage6(false);
                } else {
                  setImage6(result.uri);
                }
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#F0F0F0",
                }}
              >
                <Image
                  source={
                    image6 ? { uri: image6, width: 100, height: 100 } : null
                  }
                  onLoadEnd={async function () {
                    setLoadingImage6(false);
                  }}
                />
                {loadingImage6 ? (
                  <LottieView
                    source={require("../../../assets/lottie_anims/74653-image-loader.json")}
                    autoPlay={true}
                    loop={true}
                    colorFilters={[
                      {
                        keypath: "shapes",
                        color: "#434aa8",
                      },
                    ]}
                    speed={0.5}
                    style={{
                      height: 100,
                      width: 100,
                      position: "absolute",
                    }}
                  />
                ) : null}
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
              dispatch(setProgress(0.18));
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

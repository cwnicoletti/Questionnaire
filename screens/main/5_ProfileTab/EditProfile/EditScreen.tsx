import React, { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Text,
  Image,
  Dimensions,
  View,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setProgress } from "../../../../store/actions/progressbar/progressbar";
import getPhotoPermissions from "../../../../helper/getPhotoPermissions";
import * as ImagePicker from "expo-image-picker";

const EditScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const hideCardScreen = useAppSelector(
    (state) => state.toptabbar.hideCardScreen
  );
  const width = Dimensions.get("window").width;

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      {!hideCardScreen ? (
        <ScrollView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row", margin: 10 }}>
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
                <View>
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 9999,
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -10,
                      right: 0,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1641866787/Naire/my%20profile%20pictures/image2_xajcrq.jpg",
                    }}
                    style={{ height: 100, width: 100, marginRight: 15 }}
                  />
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
                <View>
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 9999,
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -10,
                      right: 0,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1642562428/Naire/my%20profile%20pictures/DSC_3955_1_sfknqc.png",
                    }}
                    style={{ height: 100, width: 100, marginRight: 15 }}
                  />
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
                <View>
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 9999,
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -10,
                      right: 0,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1642563759/Naire/my%20profile%20pictures/image0_16_1_tgu2ic.png",
                    }}
                    style={{ height: 100, width: 100, marginRight: 15 }}
                  />
                </View>
              </TouchableCmp>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
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
                <View>
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 9999,
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -10,
                      right: 0,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1641866786/Naire/my%20profile%20pictures/image1_5_pgbyec.jpg",
                    }}
                    style={{ height: 100, width: 100, marginRight: 15 }}
                  />
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
                <View>
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 9999,
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -10,
                      right: 0,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1642563737/Naire/my%20profile%20pictures/image1_6_v4kvyb.jpg",
                    }}
                    style={{ height: 100, width: 100, marginRight: 15 }}
                  />
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
                <View>
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 9999,
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      top: -10,
                      right: 0,
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                  </View>
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1642563729/Naire/my%20profile%20pictures/DSC_6411_1_1_eqvpwm.jpg",
                    }}
                    style={{ height: 100, width: 100, marginRight: 15 }}
                  />
                </View>
              </TouchableCmp>
            </View>
          </View>
        </ScrollView>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  yourCode: {
    marginLeft: "10%",
    color: "black",
    fontSize: 29,
    fontWeight: "500",
  },

  authContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default EditScreen;

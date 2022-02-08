import React, { useEffect, useRef, useState } from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import * as Progress from "react-native-progress";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import MaskedView from "@react-native-masked-view/masked-view";

const ProfileMainScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const CIRCLE_MAX = 0.76;

  const data = {
    points: [
      { x: 1, y: 1.47 },
      { x: 2, y: 1.37 },
      { x: 3, y: 1.53 },
      { x: 4, y: 1.54 },
      { x: 5, y: 1.52 },
      { x: 6, y: 2.03 },
      { x: 7, y: 2.1 },
      { x: 8, y: 2.5 },
      { x: 9, y: 2.3 },
      { x: 10, y: 2.42 },
      { x: 11, y: 2.55 },
      { x: 12, y: 2.41 },
      { x: 13, y: 2.43 },
      { x: 14, y: 2.2 },
      { x: 15, y: 2.2 },
      { x: 14, y: 2.2 },
      { x: 16, y: 2.2 },
      { x: 17, y: 2.2 },
      { x: 18, y: 2.2 },
      { x: 19, y: 2.2 },
      { x: 20, y: 2.2 },
      { x: 21, y: 2.2 },
      { x: 22, y: 2.2 },
      { x: 23, y: 2.2 },
      { x: 24, y: 2.2 },
      { x: 25, y: 2.2 },
      { x: 26, y: 2.2 },
    ],
    smoothingStrategy: "bezier",
  };

  const height = Dimensions.get("window").height;

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(setProgress(0));
      navigation.getParent()?.setOptions({
        tabBarStyle: { position: "absolute" },
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        height: height - 160,
        width: "100%",
        zIndex: -99999,
      }}
    >
      <StatusBar barStyle={"dark-content"} animated={true} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableCmp
          onPress={() => {
            navigation.getParent()?.setOptions({
              tabBarStyle: { display: "none" },
            });
            navigation.navigate("TopTabEditProfileNavigator");
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaskedView
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              maskElement={
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Progress.Circle
                    progress={0.78 * CIRCLE_MAX}
                    size={160}
                    color={"#434aa8"}
                    borderWidth={0}
                    showsText={false}
                    strokeCap={"round"}
                    thickness={2}
                    style={{
                      position: "absolute",
                      transform: [{ rotate: "42deg" }],
                    }}
                  />
                </View>
              }
            >
              <LinearGradient
                colors={["#A700D1", "#602C91", "#434aa8"]}
                style={{
                  height: "110%",
                  width: "110%",
                }}
              />
            </MaskedView>
            <LinearGradient
              colors={["#A700D1", "#434aa8"]}
              style={{
                position: "absolute",
                top: 0,
                alignSelf: "center",
                zIndex: 9999,
                height: 25,
                width: 100,
                borderRadius: 25 / 2,
                backgroundColor: "purple",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="pencil"
                size={12}
                color="white"
                style={{ marginRight: 3 }}
              />
              <Text style={{ color: "white" }}>78% done</Text>
            </LinearGradient>
            <Image
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
              }}
              source={{
                uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1641866787/Naire/my%20profile%20pictures/image2_xajcrq.jpg",
              }}
            />
          </View>
        </TouchableCmp>
        <View>
          <Text style={{ fontSize: 32, fontWeight: "200", margin: 10 }}>
            Christian Nicoletti
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="ios-lock-closed-outline" size={18} color="grey" />
          <Text style={{ fontSize: 16, margin: 5, color: "grey" }}>
            Your last name is only public to matches
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
          }}
        />
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TouchableCmp
            onPress={() => {
              navigation.getParent()?.setOptions({
                tabBarStyle: { display: "none" },
              });
              navigation.navigate("TopTabEditProfileNavigator");
            }}
          >
            <View
              style={{
                paddingVertical: 20,
                borderColor: "#E8E8E8",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="pencil"
                size={24}
                color="black"
                style={{ marginLeft: 20 }}
              />
              <Text style={{ marginLeft: 10 }}>Edit Profile</Text>
            </View>
          </TouchableCmp>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
          }}
        />
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TouchableCmp
            onPress={() => {
              navigation.getParent()?.setOptions({
                tabBarStyle: { display: "none" },
              });
              navigation.navigate("PerformanceScreen");
            }}
          >
            <View
              style={{
                paddingVertical: 20,
                borderColor: "#E8E8E8",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <AntDesign
                name="linechart"
                size={24}
                color="black"
                style={{ marginLeft: 20 }}
              />
              <Text style={{ marginLeft: 10 }}>Performance</Text>
            </View>
          </TouchableCmp>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
          }}
        />
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <TouchableCmp
            onPress={() => {
              navigation.getParent()?.setOptions({
                tabBarStyle: { display: "none" },
              });
              navigation.navigate("SettingsScreen");
            }}
          >
            <View
              style={{
                paddingVertical: 20,
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="ios-cog"
                size={24}
                color="black"
                style={{ marginLeft: 20 }}
              />
              <Text style={{ marginLeft: 10 }}>Settings</Text>
            </View>
          </TouchableCmp>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
          }}
        />
      </View>
    </View>
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

export default ProfileMainScreen;

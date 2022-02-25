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
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PurchaseScreen = ({ navigation }) => {
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
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 75,
                width: 75,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: "black",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../../../assets/naire_icon/transparent_black.png")}
                style={{ height: 75, width: 75 }}
              />
            </View>
          </View>
          <Text style={{ marginTop: 20, fontSize: 24, fontWeight: "200" }}>
            Unlock your top prediction
          </Text>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={{ marginBottom: 40, alignItems: "center" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 40,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  height: 170,
                  width: 110,
                }}
              >
                <Text style={{ fontSize: 32, fontWeight: "500" }}>6</Text>
                <Text>Months</Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>$24.99</Text>
                <View
                  style={{
                    marginTop: 10,
                    height: 20,
                    width: 80,
                    borderRadius: 20 / 2,
                    justifyContent: "center",
                    backgroundColor: "black",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontWeight: "400",
                    }}
                  >
                    Save 65%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  borderWidth: 0.8,
                  borderColor: "black",
                  height: 180,
                  width: 120,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ fontSize: 32, fontWeight: "500" }}>1</Text>
                <Text>Month</Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>$4.99</Text>
                <View
                  style={{
                    marginTop: 10,
                    height: 20,
                    width: 80,
                    borderRadius: 20 / 2,
                    justifyContent: "center",
                    backgroundColor: "black",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontWeight: "400",
                    }}
                  >
                    Save 58%
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  height: 170,
                  width: 110,
                }}
              >
                <Text style={{ fontSize: 32, fontWeight: "500" }}>1</Text>
                <Text>Week</Text>
                <Text>$2.99</Text>
              </View>
            </View>
            <TouchableCmp>
              <LinearGradient
                colors={["#A700D1", "#434aa8"]}
                style={{
                  height: 60,
                  width: 300,
                  borderRadius: 60 / 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 28, color: "white", fontWeight: "200" }}
                >
                  Unlock
                </Text>
              </LinearGradient>
            </TouchableCmp>
          </View>
        </View>
      </View>
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

export default PurchaseScreen;

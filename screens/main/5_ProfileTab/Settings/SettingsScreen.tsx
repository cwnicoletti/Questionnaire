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

const SettingsScreen = ({ navigation }) => {
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
      {!hideCardScreen ? (
        <ScrollView>
          <View style={{ flex: 1 }}>
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
              <TouchableCmp onPress={() => {}}>
                <View
                  style={{
                    paddingVertical: 20,
                    borderColor: "#E8E8E8",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons
                    name="sleep"
                    size={24}
                    color="black"
                    style={{ marginLeft: 20 }}
                  />
                  <Text style={{ marginLeft: 10 }}>Snooze</Text>
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
              <TouchableCmp>
                <View
                  style={{
                    paddingVertical: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ marginLeft: 10 }}>Logout</Text>
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
              <TouchableCmp>
                <View
                  style={{
                    paddingVertical: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ marginLeft: 10 }}>Delete Account</Text>
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

export default SettingsScreen;

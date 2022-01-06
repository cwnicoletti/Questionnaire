import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const AIntroduction = (props) => {
  const [loading, setLoading] = useState(false);

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
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <LottieView
            source={require("../../../assets/lottie_anims/52058-check.json")}
            autoPlay
            loop={false}
            colorFilters={[
              {
                keypath: "circle - bg",
                color: "#434aa8 ",
              },
              {
                keypath: "circle - stroke",
                color: "#434aa8 ",
              },
            ]}
            style={{ height: 80 }}
          />
          <Text style={{ fontSize: 32 }}>Awesome!</Text>
          <Text>You're ready to start</Text>
          <View
            style={{
              alignSelf: "center",
              borderBottomWidth: 1,
              borderColor: "black",
              width: "50%",
              marginTop: 20,
            }}
          />
          <Text style={{ fontSize: 22, marginTop: 20 }}>
            Naire is a survey-based dating app
          </Text>
          <Text style={{ fontSize: 18, marginTop: 20 }}>
            This means you will:
          </Text>
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          <View style={{ marginHorizontal: 40 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="format-list-checks"
                size={24}
                color="black"
              />
              <Text style={{ fontSize: 16, marginHorizontal: 15 }}>
                Be provided with a questionnaire after each date or relationship
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="history" size={24} color="black" />
              <Text style={{ fontSize: 16, marginHorizontal: 15 }}>
                Answer questionnaires based on previous relationships
                or dates
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="people" size={24} color="black" />
              <Text style={{ fontSize: 16, marginHorizontal: 15 }}>
                Be provided with a list of potential dates
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <TouchableCmp
            onPress={() => {
              props.navigation.navigate("AIntroduction");
            }}
          >
            <View
              style={{
                borderColor: "#A1A1A1",
                borderWidth: 1,
                marginRight: 20,
                marginBottom: 20,
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
              {!loading ? (
                <Feather name="arrow-right" size={28} color={"#616161"} />
              ) : (
                <ActivityIndicator color="#616161" />
              )}
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

export default AIntroduction;

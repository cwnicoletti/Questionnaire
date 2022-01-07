import React, { useState } from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import LottieView from "lottie-react-native";

const AIntroduction = (props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      <View
        style={{ flex: 2, justifyContent: "flex-end", alignItems: "center" }}
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
        <Text
          style={{
            fontSize: 22,
            marginTop: 20,
            fontWeight: "500",
            color: "#434aa8",
          }}
        >
          Naire is a survey-based dating app
        </Text>
        <Text style={{ fontSize: 18, marginTop: 20 }}>
          This means you will be provided with:
        </Text>
      </View>
      <View style={{ flex: 3, alignItems: "center" }}>
        <View style={{ marginHorizontal: 40 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="format-list-checks"
              size={24}
              color="black"
            />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  marginHorizontal: 15,
                  fontWeight: "500",
                }}
              >
                A questionnaire after each date/relationship
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 15,
                  marginTop: 5,
                  color: "grey",
                }}
              >
                Every questionnaire will help the algorithm bring you one step
                closer to a better date
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="history" size={24} color="black" />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  marginHorizontal: 15,
                  fontWeight: "500",
                }}
              >
                Questionnaires based on previous relationships/dates
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 15,
                  marginTop: 5,
                  color: "grey",
                }}
              >
                This will help the algorithm kick-start with a good first date
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="people" size={24} color="black" />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  marginHorizontal: 15,
                  fontWeight: "500",
                }}
              >
                Cards of potential dates
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 15,
                  marginTop: 5,
                  color: "grey",
                }}
              >
                In return the algorithm will predict your most compatible dates
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <TouchableCmp
          onPress={() => {
            props.navigation.navigate("CreateUser1");
            setTimeout(() => {
              dispatch(setProgress(0.1));
            }, 600);
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

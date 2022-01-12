import React, { useEffect, useRef, useState } from "react";
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

const SurveyDone = (props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const lottieRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
    }, 200);
  }, []);

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
          ref={lottieRef}
          source={require("../../../assets/lottie_anims/52058-check.json")}
          autoPlay={false}
          loop={false}
          colorFilters={[
            {
              keypath: "circle - bg",
              color: "#434aa8",
            },
            {
              keypath: "circle - stroke",
              color: "#434aa8",
            },
          ]}
          style={{ height: 80 }}
        />
        <Text style={{ fontWeight: "500", fontSize: 32, color: "#434aa8" }}>
          That's it!
        </Text>
        <Text style={{ marginTop: 5, fontWeight: "300" }}>
          You're done with your first survey
        </Text>
        <View
          style={{
            alignSelf: "center",
            borderBottomWidth: 1,
            borderColor: "black",
            width: "50%",
            marginTop: 20,
          }}
        />
        <Text style={{ fontSize: 22, marginTop: 10, fontWeight: "300" }}>
          Now you have two options:
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
                  fontSize: 15,
                  marginHorizontal: 15,
                  fontWeight: "500",
                }}
              >
                Continue filling out surveys of previous relationships
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 15,
                  marginTop: 5,
                  color: "grey",
                }}
              >
                Which will help the algorithm even further
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
                  fontSize: 15,
                  marginHorizontal: 15,
                  fontWeight: "500",
                }}
              >
                Start seeing potential dates
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal: 15,
                  marginTop: 5,
                  color: "grey",
                }}
              >
                Might not be the best prediction, but it's fun to see who's the best candidate after one survey!
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <TouchableCmp
          onPress={() => {
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
            props.navigation.pop();
          }}
        >
          <View
            style={{
              borderColor: "#A1A1A1",
              borderWidth: 1,
              marginLeft: 20,
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
              <Feather name="arrow-left" size={28} color={"#616161"} />
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

export default SurveyDone;

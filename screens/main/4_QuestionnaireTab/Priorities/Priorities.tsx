import React, { useCallback, useEffect, useReducer, useState } from "react";
import {
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ScrollView,
  Keyboard,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../../hooks";
import Slider from "@react-native-community/slider";

const Priorities = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [sliderEnjoymentValue, setSliderEnjoymentValue] = useState(1);
  const [sliderCompatibilityValue, setSliderCompatibilityValue] = useState(1);
  const [sliderCommunicationValue, setSliderCommunicationValue] = useState(1);
  const [sliderLoyaltyValue, setSliderLoyaltyValue] = useState(1);
  const [sliderFunValue, setSliderFunValue] = useState(1);
  const [sliderPhysicalAttractionValue, setSliderPhysicalAttractionValue] =
    useState(1);
  const [sliderMentalAttractionValue, setSliderMentalAttractionValue] =
    useState(1);
  const [
    sliderInstinctualAttractionValue,
    setSliderInstinctualAttractionValue,
  ] = useState(1);
  const [sliderEmotionAttractionValue, setSliderEmotionAttractionValue] =
    useState(1);

  let getParams: Record<string, unknown> = {};
  if (
    typeof navigation
      .getState()
      .routes.filter((screen) => screen.name === "CurrentSurvey1")[0] !==
    "undefined"
  ) {
    getParams = navigation
      .getState()
      .routes.filter((screen) => screen.name === "CurrentSurvey1")[0].params;
  }

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    setSliderEnjoymentValue(
      getParams.enjoyment ? getParams.enjoyment * 100 : 0
    );
    setSliderCompatibilityValue(
      getParams.compatibility ? getParams.compatibility * 100 : 0
    );
    setSliderCommunicationValue(
      getParams.communication ? getParams.communication * 100 : 0
    );
    setSliderLoyaltyValue(getParams.loyalty ? getParams.loyalty * 100 : 0);
    setSliderFunValue(getParams.fun ? getParams.fun * 100 : 0);
    setSliderPhysicalAttractionValue(
      getParams.physicalAttraction ? getParams.physicalAttraction * 100 : 0
    );
    setSliderMentalAttractionValue(
      getParams.mentalAttraction ? getParams.mentalAttraction * 100 : 0
    );
    setSliderInstinctualAttractionValue(
      getParams.instinctualAttraction
        ? getParams.instinctualAttraction * 100
        : 0
    );
    setSliderEmotionAttractionValue(
      getParams.emotionAttraction ? getParams.emotionAttraction * 100 : 0
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableCmp
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{ marginHorizontal: 20 }}
          />
        </TouchableCmp>
        <TouchableCmp
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              marginHorizontal: 20,
              color: "#434aa8",
            }}
          >
            Save
          </Text>
        </TouchableCmp>
      </View>
      <View style={{ flex: 1, marginTop: 20 }}>
        <ScrollView>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F2E3FF",
              marginHorizontal: "10%",
              paddingVertical: 10,
              borderRadius: 15,
            }}
          >
            <AntDesign
              name="exclamationcircleo"
              size={14}
              color="black"
              style={{ padding: 5 }}
            />
            <Text style={{ textAlign: "center" }}>
              Can only be saved once every 12 hours
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 40,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is you enjoying a relationship or date?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              {sliderEnjoymentValue / 100}%
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={getParams.enjoyment ? getParams.enjoyment * 100 : 0}
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderEnjoymentValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 80,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is it to be compatible with someone?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              {sliderCompatibilityValue / 100}%
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={
                getParams.compatibility ? getParams.compatibility * 100 : 0
              }
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderCompatibilityValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 80,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is communication to you?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              {sliderCommunicationValue / 100}%
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={
                getParams.communication ? getParams.communication * 100 : 0
              }
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderCommunicationValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 80,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is loyalty to you?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>{sliderLoyaltyValue / 100}%</Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={getParams.loyalty ? getParams.loyalty * 100 : 0}
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderLoyaltyValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 80,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is it that a relationship or date is fun?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>{sliderFunValue / 100}%</Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={getParams.fun ? getParams.fun * 100 : 0}
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderFunValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 80,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is physical attraction?
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "grey",
              fontWeight: "300",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            (i.e., physical features, physical actions, etc.)
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              {sliderPhysicalAttractionValue / 100}%
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={
                getParams.physicalAttraction
                  ? getParams.physicalAttraction * 100
                  : 0
              }
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderPhysicalAttractionValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 80,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is mental attraction?
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "grey",
              fontWeight: "300",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            (i.e., their thoughts, intelligence, etc.)
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              {sliderMentalAttractionValue / 100}%
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={
                getParams.mentalAttraction
                  ? getParams.mentalAttraction * 100
                  : 0
              }
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderMentalAttractionValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 80,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is instinctual attraction?
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "grey",
              fontWeight: "300",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            Gut feeling attraction
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              {sliderInstinctualAttractionValue / 100}%
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={
                getParams.instinctualAttraction
                  ? getParams.instinctualAttraction * 100
                  : 0
              }
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderInstinctualAttractionValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
              marginTop: 80,
            }}
          >
            <Text style={styles.youAreAText}>
              How important is your attraction to a person's emotional
              expression?
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: "grey",
              fontWeight: "300",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            (i.e., angry, sad, happy)
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 40,
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              {sliderEmotionAttractionValue / 100}%
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              step={1}
              value={
                getParams.emotionAttraction
                  ? getParams.emotionAttraction * 100
                  : 0
              }
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderEmotionAttractionValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginHorizontal: 10 }}>
                0% the least
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% the most
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  youAreAText: {
    color: "black",
    fontSize: 22,
    fontWeight: "500",
  },
});

export default Priorities;

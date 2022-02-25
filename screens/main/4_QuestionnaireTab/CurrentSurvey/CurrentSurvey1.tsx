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
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../../hooks";
import Slider from "@react-native-community/slider";

import Input from "../../../../components/Input";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === "FORM_INPUT_UPDATE") {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      if (updatedValidities.hasOwnProperty(key)) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updateValues,
    };
  }
  return state;
};

const CurrentSurvey1 = ({ navigation }) => {
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

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      label: getParams.label ? getParams.label : "",
    },
    inputValidities: {
      label: false,
    },
    formIsValid: false,
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

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
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      <SafeAreaView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
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
      </SafeAreaView>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: "10%",
            }}
          >
            <Text style={styles.youAreAText}>
              What should the label for this survey be?
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Input
              id="label"
              placeholder={getParams.label}
              required
              keyboardType="default"
              returnKeyType="done"
              autoFocus={false}
              autoCorrect={false}
              contextMenuHidden={true}
              maxLength={25}
              blurOnSubmit={false}
              onInputChange={inputChangeHandler}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              initialValue={getParams.label}
              styleInput={{
                fontSize: 28,
                fontWeight: "300",
                backgroundColor: "#ffffff",
                marginHorizontal: "10%",
                width: "50%",
                borderColor: "grey",
                borderBottomWidth: 1,
              }}
            />
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
              How much did you enjoy the relationship?
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
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
              How compatible were the two of you?
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
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
              How much did you like the way they communicated?
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
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
            <Text style={styles.youAreAText}>How loyal were they?</Text>
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
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
              How fun was the relationship?
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
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
              How physically attracted were you to this person?
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
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
              How mentally attracted were you to this person?
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
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
              How instinctually attracted were you to this person?
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
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
              How attracted were you to their emotions?
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
                0% least ever
              </Text>
              <Text style={{ textAlign: "right", marginHorizontal: 10 }}>
                100% most ever
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
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

export default CurrentSurvey1;

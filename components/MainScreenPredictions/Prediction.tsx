import React, { useState } from "react";
import {
  Animated,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
} from "react-native";

const Prediction = (props) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View
      style={{
        width: 400,
      }}
    >
      <TouchableCmp
        onPress={() => {
          props.navigation.getParent()?.setOptions({
            tabBarStyle: { display: "none" },
          });
          props.navigation.navigate("ProfileScreen", {
            name: props.name,
            predictionRank: props.predictionRank,
            predictionValue: props.predictionValue,
            previewImage: props.previewImage,
            image1: props.image1,
            image2: props.image2,
            image3: props.image3,
            image4: props.image4,
            image5: props.image5,
            image6: props.image6,
            prompt1: props.prompt1,
            answer1: props.answer1,
            prompt2: props.prompt2,
            answer2: props.answer2,
            prompt3: props.prompt3,
            answer3: props.answer3,
            age: props.age,
            height: props.height,
            worksOut: props.worksOut,
            city: props.city,
            smokesTobacco: props.smokesTobacco,
            smokesWeed: props.smokesWeed,
            drinks: props.drinks,
            drugs: props.drugs,
            education: props.education,
            school: props.school,
            jobTitle: props.jobTitle,
          });
        }}
      >
        <View
          style={{
            paddingVertical: 40,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 36,
              fontWeight: "100",
              color:
                props.predictionRank <= 1
                  ? "red"
                  : props.predictionRank === 2
                  ? "#FF6200"
                  : props.predictionRank === 3
                  ? "#FFAE00"
                  : "#434aa8",
              marginRight: 10,
            }}
          >
            {`#${props.predictionRank}`}
          </Text>
          <Image
            source={{ uri: props.previewImage }}
            style={{
              height: 75,
              width: 75,
              marginRight: 15,
              borderRadius: 5,
            }}
          />
          <View style={{ alignSelf: "flex-start" }}>
            {props.predictionRank <= 1 ? (
              <Text style={{ fontSize: 12, fontWeight: "300", color: "red" }}>
                TOP PREDICTION
              </Text>
            ) : null}
            <Text
              style={{
                fontSize: 16,
                fontWeight: "300",
                color:
                  props.predictionRank <= 1
                    ? "red"
                    : props.predictionRank === 2
                    ? "#FF6200"
                    : props.predictionRank === 3
                    ? "#FFAE00"
                    : "#434aa8",
              }}
            >
              {`${props.predictionValue}% chance of a better date`}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "200" }}>
              {props.name}
            </Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default Prediction;

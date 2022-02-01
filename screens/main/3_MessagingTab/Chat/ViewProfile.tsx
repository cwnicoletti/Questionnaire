import React, { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { EvilIcons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { setProgress } from "../../../../store/actions/progressbar/progressbar";
import FullProfile from "../../../../components/FullProfile/FullProfile";

const CardMainScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const params = navigation
    .getState()
    .routes.filter((screen) => screen.name === "ChatScreen")[0].params;

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={styles.screen}
    >
      <StatusBar barStyle={"dark-content"} animated={true} />
      <ScrollView>
        <FullProfile
          name={params.name}
          predictionValue={params.predictionValue}
          age={params.age}
          height={params.height}
          worksOut={params.worksOut}
          city={params.city}
          smokesTobacco={params.smokesTobacco}
          smokesWeed={params.smokesWeed}
          drinks={params.drinks}
          drugs={params.drugs}
          education={params.education}
          school={params.school}
          jobTitle={params.jobTitle}
          image1={params.image1}
          image2={params.image2}
          image3={params.image3}
          image4={params.image4}
          image5={params.image5}
          image6={params.image6}
          prompt1={params.prompt1}
          answer1={params.answer1}
          prompt2={params.prompt2}
          answer2={params.answer2}
          prompt3={params.prompt3}
          answer3={params.answer3}
          showMessage={false}
        />
      </ScrollView>
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

export default CardMainScreen;

import React, { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { EvilIcons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { setProgress } from "../../../../store/actions/progressbar/progressbar";
import FullProfileCard from "../../../../components/FullProfile/FullProfileCard";

const Card1 = ({ navigation }) => {
  const dispatch = useAppDispatch();

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
        <TouchableCmp
          onPress={() => {
            navigation.navigate("CardPreferencesScreen");
          }}
        >
          <EvilIcons
            name="search"
            size={32}
            color="black"
            style={{
              alignSelf: "flex-end",
              paddingBottom: 20,
              paddingRight: 25,
            }}
          />
        </TouchableCmp>
        <FullProfileCard
          name="Son Ye-Jin"
          predictionValue={98.67}
          age={27}
          height={`5' 6"`}
          worksOut="Sometimes"
          smokesTobacco="Never"
          smokesWeed="Never"
          drinks="Socially"
          drugs="Rarely"
          education="Undergraduate Degree"
          city="San Jose"
          school="University of California, Berkley"
          jobTitle="Product Marketing Manager at SoundCloud"
          Image1="https://res.cloudinary.com/personaluse1234/image/upload/v1642785082/Naire/Son%20Ye-Jin/sduitgeru8i3845253465_xj5oqt.jpg"
          Image2="https://res.cloudinary.com/personaluse1234/image/upload/v1642785083/Naire/Son%20Ye-Jin/wdiofjirte78546_cro9vj.jpg"
          Image3="https://res.cloudinary.com/personaluse1234/image/upload/v1642785086/Naire/Son%20Ye-Jin/rewuiythuienjwdf896576_axoypd.png"
          Image4="https://res.cloudinary.com/personaluse1234/image/upload/v1642785085/Naire/Son%20Ye-Jin/iojhrtiekry9768_lqndme.jpg"
          Image5="https://res.cloudinary.com/personaluse1234/image/upload/v1642785085/Naire/Son%20Ye-Jin/mdsakofmkik873536_mcp9pf.jpg"
          Image6="https://res.cloudinary.com/personaluse1234/image/upload/v1642785083/Naire/Son%20Ye-Jin/rjkewhutre8456_z9gdhi.jpg"
        />
      </ScrollView>
      <TouchableCmp
        onPress={() => {
          navigation.push("InterCard");
        }}
      >
        <View
          style={{
            position: "absolute",
            zIndex: 9999,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "black",
            left: 20,
            bottom: 20,
            height: 75,
            width: 75,
            shadowOffset: {
              width: -1,
              height: 1,
            },
            shadowColor: "black",
            shadowOpacity: 0.1,
            shadowRadius: 2,
            borderRadius: 75 / 2,
          }}
        >
          <Feather name="fast-forward" size={24} color="black" />
        </View>
      </TouchableCmp>
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

export default Card1;

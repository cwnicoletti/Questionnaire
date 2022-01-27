import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackMessages = ({ navigation }) => {
  const [name, setName] = useState("");
  const [image1, setImage1] = useState(
    "https://res.cloudinary.com/personaluse1234/image/upload/v1642534555/Naire/rthrehtjtj_wgi4xx.jpg"
  );
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [worksOut, setWorksOut] = useState("");
  const [city, setCity] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [predictionValue, setPredictionValue] = useState("");
  const [params, setParams] = useState({});

  useEffect(() => {
    let params = {};
    if (
      typeof navigation
        .getState()
        .routes.filter((screen) => screen.name === "ChatScreen")[0] !==
      "undefined"
    ) {
      params = navigation
        .getState()
        .routes.filter((screen) => screen.name === "ChatScreen")[0].params;
    }
    setParams(params);
    setName(params.name);
    setImage1(params.image1);
    setImage2(params.image2);
    setImage3(params.image3);
    setImage4(params.image4);
    setImage5(params.image5);
    setImage6(params.image6);
    setAge(params.age);
    setHeight(params.height);
    setWorksOut(params.worksOut);

    setCity(params.city);
    setJobTitle(params.jobTitle);
    setPredictionValue(params.predictionValue);
  }, []);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableCmp
        onPress={() => {
          navigation.pop();
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={28}
          color="black"
          style={{ marginLeft: 20 }}
        />
      </TouchableCmp>
      <TouchableCmp
        onPress={() => {
          navigation.navigate("ViewProfile", {
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            age,
            height,
            worksOut,
            city,
            smokesTobacco: params.smokesTobacco,
            smokesWeed: params.smokesWeed,
            drinks: params.drinks,
            drugs: params.drugs,
            education: params.education,
            school: params.school,
            jobTitle,
            predictionValue,
          });
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: image1 }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 60 / 2,
            }}
          />
          <Text style={{ fontSize: 16, fontWeight: "200", margin: 5 }}>
            {name}
          </Text>
        </View>
      </TouchableCmp>
      <Ionicons
        name="ios-arrow-back"
        size={28}
        color="black"
        style={{ marginRight: 20, opacity: 0 }}
      />
    </SafeAreaView>
  );
};

export default BackMessages;

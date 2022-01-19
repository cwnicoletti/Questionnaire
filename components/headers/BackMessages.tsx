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
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/personaluse1234/image/upload/v1642534555/Naire/rthrehtjtj_wgi4xx.jpg"
  );
  const [name, setName] = useState("");

  useEffect(() => {
    const params = navigation
      .getState()
      .routes.filter((screen) => screen.name === "ChatScreen")[0].params;
    setImageUrl(params.imageUrl);
    setName(params.name);
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
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: imageUrl }}
          style={{
            height: 60,
            width: 60,
            borderRadius: 60 / 2,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "300", margin: 5 }}>
          {name}
        </Text>
      </View>
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

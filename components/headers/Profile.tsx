import React from "react";
import { Text, SafeAreaView } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 34,
          color: "#434aa8",
          fontFamily: "Nautilus",
          padding: 5,
        }}
      >
        Profile
      </Text>
    </SafeAreaView>
  );
};

export default Profile;

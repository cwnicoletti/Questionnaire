import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";

const PromptWithoutMessage = (props) => {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 60,
        marginHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "500" }}>{props.prompt}</Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "200",
          marginTop: 20,
          marginHorizontal: 10,
        }}
      >
        {props.answer}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PromptWithoutMessage;

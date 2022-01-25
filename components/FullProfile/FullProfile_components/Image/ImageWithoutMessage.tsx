import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";

const ImageWithoutMessage = (props) => {
  const width = Dimensions.get("window").width;
  return (
    <Image
      source={{
        uri: props.image,
      }}
      style={{ height: width, width: width, marginRight: 15 }}
    />
  );
};

const styles = StyleSheet.create({});

export default ImageWithoutMessage;

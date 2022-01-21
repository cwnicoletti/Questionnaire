import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import {
  FontAwesome,
  EvilIcons,
  MaterialIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const FullProfile = (props) => {
  const width = Dimensions.get("window").width;
  return (
    <View>
      <View>
        <Image
          source={{
            uri: props.Image1,
          }}
          style={{ height: 400, width: width, marginRight: 15 }}
        />
        <View
          style={{
            flex: 1,
            height: 200,
            marginVertical: 30,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 36,
              fontWeight: "200",
              marginLeft: 20,
            }}
          >
            {props.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              color: "#434aa8",
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            {`99.99% chance of a better date`}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                width: 65,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                marginLeft: 20,
                marginHorizontal: 5,
              }}
            >
              <Ionicons name="ios-hourglass" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.age}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                width: 100,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
              }}
            >
              <Entypo name="ruler" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 10,
                }}
              >
                {props.height}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                width: 150,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                marginHorizontal: 5,
              }}
            >
              <MaterialCommunityIcons name="dumbbell" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 10,
                }}
              >
                {props.worksOut}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-pin" size={22} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "300", margin: 10 }}>
              {props.city}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Feather name="briefcase" size={22} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "300", margin: 10 }}>
              {props.jobTitle}
            </Text>
          </View>
        </View>
      </View>
      <Image
        source={{
          uri: props.Image2,
        }}
        style={{ height: 400, width: width, marginRight: 15 }}
      />
      <View style={{ flex: 1, height: 200 }} />
      <Image
        source={{
          uri: props.Image3,
        }}
        style={{ height: 400, width: width, marginRight: 15 }}
      />
      <View style={{ flex: 1, height: 200 }} />
      <Image
        source={{
          uri: props.Image4,
        }}
        style={{ height: 400, width: width, marginRight: 15 }}
      />
      <View style={{ flex: 1, height: 200 }} />
      <Image
        source={{
          uri: props.Image5,
        }}
        style={{ height: 400, width: width, marginRight: 15 }}
      />
      <View style={{ flex: 1, height: 200 }} />
      <Image
        source={{
          uri: props.Image6,
        }}
        style={{ height: 400, width: width, marginRight: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FullProfile;

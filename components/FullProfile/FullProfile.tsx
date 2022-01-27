import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import {
  FontAwesome,
  EvilIcons,
  FontAwesome5,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import ImageWithoutMessage from "./FullProfile_components/Image/ImageWithoutMessage";
import PromptWithoutMessage from "./FullProfile_components/Prompt/PromptWithoutMessage";

const FullProfile = (props) => {
  const width = Dimensions.get("window").width;

  return (
    <View>
      <View>
        <ImageWithoutMessage image={props.Image1} />
        <View
          style={{
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
              flexWrap: "wrap",
              marginVertical: 10,
              marginHorizontal: 18,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                paddingHorizontal: 15,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                margin: 2,
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
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                margin: 2,
                paddingHorizontal: 15,
              }}
            >
              <Entypo name="ruler" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginLeft: 10,
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
                paddingHorizontal: 15,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                margin: 2,
              }}
            >
              <MaterialCommunityIcons name="dumbbell" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.worksOut}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <MaterialCommunityIcons name="smoking" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.smokesTobacco}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <Entypo name="leaf" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.smokesWeed}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <MaterialCommunityIcons
                name="glass-cocktail"
                size={16}
                color="black"
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.drinks}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <MaterialCommunityIcons name="pill" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.drugs}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.7,
                height: 30,
                borderColor: "black",
                borderRadius: 50,
                paddingHorizontal: 15,
                margin: 2,
              }}
            >
              <Entypo name="graduation-cap" size={16} color="black" />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  marginHorizontal: 5,
                }}
              >
                {props.education}
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
            <FontAwesome5 name="school" size={18} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "300", margin: 10 }}>
              {props.school}
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
      <ImageWithoutMessage image={props.Image2} />
      <PromptWithoutMessage
        prompt="A very important question for our relationship is..."
        answer="What're we gonna cook together? 😊"
      />
      <ImageWithoutMessage image={props.Image3} />
      <PromptWithoutMessage
        prompt="Something I'd love to know about your family is..."
        answer="Do you guys have any family traditions?"
      />
      <ImageWithoutMessage image={props.Image4} />
      <PromptWithoutMessage
        prompt="The first thing I gotta know is..."
        answer="Do bears beat battlestar galactica?"
      />
      <ImageWithoutMessage image={props.Image5} />
      <ImageWithoutMessage image={props.Image6} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FullProfile;

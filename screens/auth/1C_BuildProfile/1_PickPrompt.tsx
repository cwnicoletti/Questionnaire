import React, { useEffect, useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import Carousel from "react-native-snap-carousel";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const data = [
  {
    id: "67859437h-5-4h6h-5hh6h",
    prompt: "A very important question for our relationship",
  },
  {
    id: "67859437h-5-4h6h-5hhghh6h",
    prompt: "Something I'd love to know about your family",
  },
  {
    id: "67859437h-5-4h6h-5h54654gh6h",
    prompt: "The first thing I gotta know",
  },
  {
    id: "67859437h-5-4h6h-5h54655t4ty4gh6h",
    prompt: "Something I'd like to know about our first date",
  },
  {
    id: "67859437h-5-4h6h-5h54fgvsfds45654gh6h",
    prompt: "Something I'd like to know about your interests",
  },
  {
    id: "67859437h-5-4h6h-5h5465trfref44gh6h",
    prompt: "My favorite question to ask people",
  },
  {
    id: "67859437h-5-4h6h-5h5g45ghhhhf43434654gh6h",
    prompt: "One of my favorite deep questions",
  },
  {
    id: "67859437h-5-4h6h-5h5g45f4343rtew44654gh6h",
    prompt: "If I could ask an alien one question",
  },
  {
    id: "67859437h-5-4hgfsg546h-5h5g45f43434654gh6h",
    prompt: "If I could ask God one question",
  },
  {
    id: "67859437h-5-4h6h-5h5g45dfh5445f43434654gh6h",
    prompt: "If I could ask our Gods one question",
  },
];

const PickPrompt = (props) => {
  const dispatch = useAppDispatch();
  const [editingIndex, setEditingIndex] = useState(undefined);
  const [promptIds, setPromptIds] = useState([]);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    if (props.route.params?.editingIndex !== undefined) {
      setEditingIndex(props.route.params?.editingIndex);
    }
  }, [props.route.params?.editingIndex]);

  useEffect(() => {
    if (props.route.params?.promptIds) {
      setPromptIds(props.route.params?.promptIds);
    }
  }, [props.route.params?.promptIds]);

  console.log(promptIds);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowColor: "black",
          shadowOpacity: 0.3,
          shadowRadius: 3,
        }}
      >
        <TouchableCmp
          onPress={() => {
            props.navigation.navigate("WritePrompt", {
              prompt: {
                prompt: item.prompt,
                id: item.id,
              },
              editingIndex: editingIndex,
            });
          }}
        >
          <View
            style={{
              borderRadius: 10,
              height: 100,
              width: 400,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                marginHorizontal: "10%",
              }}
            >
              {item.prompt}
            </Text>
          </View>
        </TouchableCmp>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle={"dark-content"} animated={true} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TouchableCmp
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Feather name="x" size={30} color="black" style={{ margin: 20 }} />
        </TouchableCmp>
        <Text style={{ fontWeight: "500", color: "#434aa8" }}>
          Tap your prompt
        </Text>
        <Feather
          name="x"
          size={30}
          color="black"
          style={{ margin: 20, opacity: 0 }}
        />
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data.filter((prompt) =>
          promptIds.length > 0 ? !promptIds.includes(prompt.id) : prompt
        )}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 10,
          alignSelf: "center",
        }}
        ItemSeparatorComponent={(e) => (
          <View
            style={{
              marginVertical: 5,
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  youAreAText: {
    marginHorizontal: "10%",
    color: "black",
    fontSize: 22,
    fontWeight: "500",
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default PickPrompt;

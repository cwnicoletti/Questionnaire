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
  FlatList,
} from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import useDidMountEffect from "../../../helper/useDidMountEffect";

const BuildProfile12 = (props) => {
  const dispatch = useAppDispatch();
  const [prompts, setPrompts] = useState([]);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    if (props.route.params?.prompt) {
      setPrompts((prevState) => {
        if (props.route.params?.editingIndex !== undefined) {
          prevState.splice(
            props.route.params?.editingIndex,
            1,
            props.route.params?.prompt
          );
          return [...new Set([...prevState])];
        }
        return [...new Set([...prevState, props.route.params?.prompt])];
      });
    }
  }, [props.route.params?.prompt]);

  const Item = ({ item, index }) => {
    return (
      <TouchableCmp
        onPress={() => {
          console.log(prompts.map((prompt) => prompt.id));
          props.navigation.navigate("PickPrompt", {
            editingIndex: index,
            promptIds: prompts.map((prompt) => prompt.id),
          });
        }}
      >
        <View
          style={{
            borderWidth: 0.7,
            borderColor: "black",
            borderRadius: 15,
            width: 350,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "grey",
              margin: 15,
            }}
          >
            {item.prompt}
          </Text>
          <Text
            style={{
              marginHorizontal: 15,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            {item.response}
          </Text>
        </View>
      </TouchableCmp>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={styles.screen}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"dark-content"} animated={true} />
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(0.9));
            props.navigation.goBack();
          }}
        >
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{ margin: 20 }}
          />
        </TouchableCmp>
        <View style={{ flex: 1, marginTop: 80 }}>
          <Text style={styles.youAreAText}>Question prompts</Text>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: "10%",
            }}
          >
            <Text
              style={{
                marginLeft: 10,
                color: "grey",
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              Required: Answer prompts with a question
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                marginLeft: 10,
                color: "#434aa8",
                fontSize: 16,
                fontWeight: "400",
              }}
            >
              Why?
            </Text>
          </View>
          <View>
            <View style={{ marginTop: 40, alignItems: "center" }}>
              {prompts.length <= 0 ? (
                <TouchableCmp
                  onPress={() => {
                    props.navigation.navigate("PickPrompt");
                  }}
                >
                  <View
                    style={{
                      borderWidth: 0.7,
                      borderColor: "#434aa8",
                      borderRadius: 15,
                      width: 350,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: "#434aa8",
                        margin: 15,
                      }}
                    >
                      Pick your first prompt
                    </Text>
                  </View>
                </TouchableCmp>
              ) : null}

              {prompts.length > 0
                ? prompts.map((item, index) => (
                    <Item key={item.id} item={item} index={index} />
                  ))
                : null}

              {prompts.length > 0 && prompts.length <= 2 ? (
                <TouchableCmp
                  onPress={() => {
                    props.navigation.navigate("PickPrompt", {
                      promptIds: prompts.map((prompt) => prompt.id),
                    });
                  }}
                >
                  <View
                    style={{
                      borderWidth: 0.7,
                      borderColor: "#434aa8",
                      borderRadius: 15,
                      width: 350,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: "#434aa8",
                        margin: 15,
                      }}
                    >
                      Pick your next prompt
                    </Text>
                  </View>
                </TouchableCmp>
              ) : null}
            </View>
          </View>
          <View style={styles.buttonsContainer}></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 13, marginHorizontal: 10 }}>Skip</Text>
          </View>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0));
              props.navigation.navigate("PreviewProfile");
            }}
          >
            <View
              style={{
                borderColor: "#A1A1A1",
                borderWidth: 1,
                marginRight: 20,
                height: 70,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 35,
                backgroundColor: "#ffffff",
                shadowOffset: {
                  width: -2,
                  height: 2,
                },
                shadowColor: "black",
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
            >
              <Feather name="arrow-right" size={28} color={"#616161"} />
            </View>
          </TouchableCmp>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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

export default BuildProfile12;

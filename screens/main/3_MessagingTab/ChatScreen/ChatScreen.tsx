import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
  FlatList,
  Dimensions,
  Keyboard,
  Animated,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { setProgress } from "../../../../store/actions/progressbar/progressbar";
import { AntDesign } from "@expo/vector-icons";
import Input from "../../../../components/Input";
import KeyboardSpacer from "react-native-keyboard-spacer";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === "FORM_INPUT_UPDATE") {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      if (updatedValidities.hasOwnProperty(key)) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updateValues,
    };
  }
  return state;
};

const ChatScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const width = Dimensions.get("window").width;
  const [chat, setChat] = useState([]);

  const flatListRef = useRef();

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

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      messageBar: "",
    },
    inputValidities: {
      messageBar: false,
    },
    formIsValid: false,
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const Item = ({ text, fromMe }) => (
    <View
      style={{
        flex: 1,
        alignItems: fromMe ? "flex-end" : "flex-start",
        marginVertical: fromMe && text ? 0.5 : !fromMe && text ? 2 : 0,
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 10,
          borderRadius: 20,
          backgroundColor: fromMe ? "#6929FF" : "#291063",
        }}
      >
        <Text
          ellipsizeMode="tail"
          style={{
            flex: 1,
            maxWidth: width / 1.5,
            color: "white",
          }}
        >
          {text}
        </Text>
        <View
          style={{
            position: "absolute",
            zIndex: -999999,
            right: 0,
            bottom: 0,
            left: !fromMe ? 0 : null,
            width: 0,
            height: 0,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderBottomWidth: 25,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: fromMe ? "#6929FF" : "#291063",
            transform: fromMe ? [{ rotate: "125deg" }] : [{ rotate: "225deg" }],
          }}
        />
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item text={item.text} fromMe={item.fromMe} />
  );

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

  useEffect(() => {
    setChat(params.chat);
  }, []);

  // const onKeyboardDidShow = (e) => {
  //   if (flatListRef.current) {
  //     flatListRef.current.scrollToEnd({ animated: true });
  //   }
  // };

  // useEffect(() => {
  //   Keyboard.addListener("keyboardDidShow", onKeyboardDidShow);
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
      }}
    >
      <StatusBar barStyle={"dark-content"} animated={true} />
      <FlatList
        ref={flatListRef}
        data={chat}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          marginVertical: 5,
        }}
      >
        <View
          style={{
            height: 40,
            width: "80%",
            backgroundColor: "#F5F5F5",
            borderWidth: 1,
            borderColor: "grey",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Input
            id="messageBar"
            placeholder="Message"
            required
            keyboardType="default"
            returnKeyType="send"
            autoCorrect={false}
            contextMenuHidden={true}
            multiline={true}
            onFocus={() => {
              setTimeout(() => {
                if (flatListRef.current) {
                  flatListRef.current.scrollToEnd({ animated: true });
                }
              }, 70);
            }}
            onContentSizeChange={({
              nativeEvent: {
                contentSize: { width, height },
              },
            }) => {
            }}
            onInputChange={inputChangeHandler}
            initialValue=""
            styleInput={{
              height: 40,
              width: "100%",
              backgroundColor: "rgba(0,0,0,0)",
              paddingHorizontal: 15,
              paddingRight: 45,
              marginHorizontal: 0,
              marginVertical: 5,
              marginTop: 10,
              fontSize: 16,
              fontWeight: "300",
              color: "black",
            }}
          />
          <View style={{ position: "absolute", right: 1 }}>
            <TouchableCmp>
              <View
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 35 / 2,
                  backgroundColor: "#434aa8",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="arrowup" size={18} color="white" />
                </View>
              </View>
            </TouchableCmp>
          </View>
        </View>
      </View>
      <KeyboardSpacer topSpacing={-80} />
    </View>
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

export default ChatScreen;

import React, { useCallback, useReducer, useRef, useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../../components/Input";

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

const CreateUser2 = (props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      numbers: "",
    },
    inputValidities: {
      numbers: false,
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

  const lastNameRef = useRef<Input>(null);

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
            dispatch(setProgress(0.1));
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
        <View style={{ marginTop: 80 }}>
          <Text style={styles.yourCode}>Let's start with your name...</Text>
          <View style={styles.authContainer}>
            <Input
              id="firstName"
              label="First Name"
              placeholder="First name (required)"
              required
              keyboardType="default"
              returnKeyType="next"
              autoFocus={true}
              autoCorrect={false}
              contextMenuHidden={true}
              maxLength={25}
              onInputChange={inputChangeHandler}
              onSubmitEditing={() => {
                lastNameRef.current.focus();
              }}
              initialValue=""
              styleInput={{
                fontSize: 28,
                fontWeight: "300",
                backgroundColor: "#ffffff",
                marginHorizontal: "10%",
              }}
            />
            <Input
              id="lastName"
              label="Last Name"
              placeholder="Last Name"
              keyboardType="default"
              returnKeyType="done"
              autoCorrect={false}
              contextMenuHidden={true}
              maxLength={25}
              onInputChange={inputChangeHandler}
              inputRef={lastNameRef}
              initialValue=""
              styleInput={{
                fontSize: 28,
                fontWeight: "300",
                backgroundColor: "#ffffff",
                marginHorizontal: "10%",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <TouchableCmp
            onPress={() => {
              props.navigation.navigate("CreateUser1");
            }}
            disabled={formState.formIsValid === false}
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

  yourCode: {
    marginLeft: "10%",
    color: "black",
    fontSize: 29,
    fontWeight: "500",
  },

  authContainer: {
    flexDirection: "column",
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default CreateUser2;

import React, { useEffect, useReducer } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const VerifyCodeInput = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    touched: false,
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (text) => {
    dispatch({
      type: INPUT_CHANGE,
      value: text,
    });
  };

  const lostFocusHandler = () => {
    dispatch({
      type: INPUT_BLUR,
    });
  };

  return (
    <View style={styles.formControl}>
      <TextInput
        {...props}
        style={{
          ...styles.input,
          backgroundColor: "#eeeeee",
          ...props.styleInput,
        }}
        color={"Black"}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
        ref={props.inputRef}
        maxLength={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    flex: 1,
  },

  input: {
    paddingVertical: 15,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderColor: "black",
  },
});

export default VerifyCodeInput;

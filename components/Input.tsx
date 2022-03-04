import React, {useEffect, useReducer} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        error: action.error,
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

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    error: props.errorText,
    isValid: props.initiallyValid,
    touched: false,
  });

  const {onInputChange, id} = props;

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (text: string) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    let error = props.errorText;
    const realUndefined = void 0;

    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min !== realUndefined && +text < props.min) {
      isValid = false;
    }
    if (props.max !== realUndefined && +text > props.max) {
      isValid = false;
    }
    if (
      props.confirmPassword !== realUndefined &&
      props.confirmPassword !== text
    ) {
      isValid = false;
      error = "Passwords don't match!";
    }
    if (props.minLength !== realUndefined && text.length < props.minLength) {
      isValid = false;
      error = 'Password not long enough!';
    }

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid,
      error,
    });
  };

  const lostFocusHandler = () => {
    dispatch({
      type: INPUT_BLUR,
    });
  };

  return (
    <View style={styles.formControl}>
      {props.label ? (
        <Text style={{...styles.label, ...props.textLabel}}>{props.label}</Text>
      ) : null}
      <TextInput
        {...props}
        style={{
          ...styles.input,
          color: 'black',
          backgroundColor: '#eeeeee',
          ...props.styleInput,
        }}
        value={inputState.value}
        placeholder={props.placeholder ? props.placeholder : 'type here...'}
        placeholderTextColor={
          props.placeholderTextColor ? props.placeholderTextColor : 'grey'
        }
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
        ref={props.inputRef}
      />
      {!inputState.isValid && inputState.touched ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{inputState.error}</Text>
        </View>
      ) : null}
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    height: 60,
    width: '100%',
  },

  label: {
    marginVertical: 1,
    paddingLeft: 15,
    color: 'white',
  },

  input: {
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 13,
    marginHorizontal: 10,
  },

  errorContainer: {
    marginVertical: 5,
    paddingLeft: 10,
  },

  errorText: {
    color: 'red',
    fontSize: 13,
  },
});

export default Input;

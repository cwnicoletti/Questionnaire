import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../../../hooks';

import Input from '../../../../../components/Input';
import KeyboardSpacer from '../../../../../components/KeyboardSpacer';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === 'FORM_INPUT_UPDATE') {
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

const EditWritePrompt = (props) => {
  const dispatch = useAppDispatch();
  const [prompt, setPrompt] = useState('');
  const [promptId, setPromptId] = useState('');
  const [editingIndex, setEditingIndex] = useState(undefined);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      response: '',
    },
    inputValidities: {
      response: false,
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
    [dispatchFormState],
  );

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  const inputRefer = useRef();

  useEffect(() => {
    if (props.route.params?.prompt) {
      setPrompt(props.route.params?.prompt.prompt);
      setPromptId(props.route.params?.prompt.id);
    }
  }, [props.route.params?.prompt]);

  useEffect(() => {
    if (props.route.params?.editingIndex !== undefined) {
      setEditingIndex(props.route.params?.editingIndex);
    }
  }, [props.route.params?.editingIndex]);

  useEffect(() => {
    if (inputRefer.current) {
      setTimeout(() => {
        inputRefer.current.focus();
      }, 75);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.screen}>
      <View style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} animated={true} />
        <TouchableCmp
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{margin: 20}}
          />
        </TouchableCmp>
        <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 0.7,
              borderColor: 'black',
              borderRadius: 15,
              width: 350,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'grey',
                margin: 15,
              }}>
              {prompt}
            </Text>
            <View style={{marginHorizontal: '5%'}}>
              <Input
                inputRef={inputRefer}
                id="response"
                placeholder="Question"
                required
                keyboardType="default"
                returnKeyType="done"
                autoCorrect={false}
                contextMenuHidden={true}
                maxLength={80}
                blurOnSubmit={false}
                onInputChange={inputChangeHandler}
                onSubmitEditing={() => {
                  props.navigation.navigate('Edit', {
                    prompt: {
                      prompt: prompt,
                      id: promptId,
                      response: formState.inputValues.response,
                    },
                    editingIndex: editingIndex,
                  });
                }}
                initialValue=""
                styleInput={{
                  fontSize: 24,
                  fontWeight: '200',
                  backgroundColor: '#ffffff',
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <TouchableCmp
            onPress={() => {
              props.navigation.navigate('Edit', {
                prompt: {
                  prompt: prompt,
                  id: promptId,
                  response: formState.inputValues.response,
                },
                editingIndex: editingIndex,
              });
            }}>
            <View
              style={{
                borderColor: '#A1A1A1',
                borderWidth: 1,
                marginRight: 20,
                height: 70,
                width: 70,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                borderRadius: 35,
                backgroundColor: '#ffffff',
                shadowOffset: {
                  width: -2,
                  height: 2,
                },
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}>
              <Feather name="arrow-right" size={28} color={'#616161'} />
            </View>
          </TouchableCmp>
        </View>
        <KeyboardSpacer topSpacing={-240} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  youAreAText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },

  buttonsContainer: {
    paddingTop: 40,
    marginHorizontal: '2%',
    paddingBottom: 120,
  },
});

export default EditWritePrompt;

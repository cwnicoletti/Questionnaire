import React, {useCallback, useReducer, useRef} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../hooks';
import {setProgress} from '../../../store/actions/progressbar/progressbar';
import Input from '../../../components/Input';

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

const CreateUser1 = (props) => {
  const dispatch = useAppDispatch();

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      numbers: '',
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
    [dispatchFormState],
  );

  const lastNameRef = useRef<Input>(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.screen}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} animated={true} />
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(0));
            props.navigation.goBack();
          }}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{margin: 20}}
          />
        </TouchableCmp>
        <View style={{flex: 1, marginTop: 80}}>
          <Text style={styles.yourCode}>Let's start with your name...</Text>
          <View style={styles.authContainer}>
            <Input
              id="firstName"
              placeholder="First name (required)"
              required
              keyboardType="default"
              returnKeyType="next"
              textContentType="givenName"
              autoFocus={true}
              autoCorrect={false}
              contextMenuHidden={true}
              maxLength={25}
              blurOnSubmit={false}
              onInputChange={inputChangeHandler}
              onKeyPress={({nativeEvent: {key: keyValue}}) => {
                if (keyValue.length > 1 && keyValue !== 'Backspace') {
                  lastNameRef.current.focus();
                }
              }}
              onSubmitEditing={() => {
                lastNameRef.current.focus();
              }}
              initialValue=""
              styleInput={{
                fontSize: 28,
                fontWeight: '300',
                backgroundColor: '#ffffff',
                marginHorizontal: '10%',
              }}
            />
            <Input
              id="lastName"
              placeholder="Last Name"
              keyboardType="default"
              returnKeyType="done"
              textContentType="familyName"
              autoCorrect={false}
              contextMenuHidden={true}
              maxLength={25}
              blurOnSubmit={false}
              onKeyPress={({nativeEvent: {key: keyValue}}) => {
                if (keyValue.length > 1 && keyValue !== 'Backspace') {
                  dispatch(setProgress(0.2));
                  props.navigation.navigate('CreateUser2');
                }
              }}
              onSubmitEditing={() => {
                dispatch(setProgress(0.2));
                props.navigation.navigate('CreateUser2');
              }}
              onInputChange={inputChangeHandler}
              inputRef={lastNameRef}
              initialValue=""
              styleInput={{
                fontSize: 28,
                fontWeight: '300',
                backgroundColor: '#ffffff',
                marginHorizontal: '10%',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Ionicons name="ios-lock-open-outline" size={16} color="black" />
            <Text style={{fontSize: 13, marginHorizontal: 5}}>
              Your last name will only be shown to matches
            </Text>
          </View>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0.4));
              props.navigation.navigate('CreateUser2');
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
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  yourCode: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 29,
    fontWeight: '500',
  },

  authContainer: {
    marginTop: 20,
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default CreateUser1;

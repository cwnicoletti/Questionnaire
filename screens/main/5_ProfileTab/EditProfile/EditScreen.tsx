import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import getPhotoPermissions from '../../../../helper/getPhotoPermissions';
import * as ImagePicker from 'expo-image-picker';
import Input from '../../../../components/Input';
import KeyboardSpacer from 'react-native-keyboard-spacer';

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

const EditScreen = ({navigation, route}) => {
  const [prompts, setPrompts] = useState([]);

  const width = Dimensions.get('window').width;

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      education: '',
    },
    inputValidities: {
      education: false,
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

  useEffect(() => {
    if (route.params?.prompt) {
      setPrompts((prevState) => {
        if (route.params?.editingIndex !== undefined) {
          prevState.splice(route.params?.editingIndex, 1, route.params?.prompt);
          return [...new Set([...prevState])];
        }
        return [...new Set([...prevState, route.params?.prompt])];
      });
    }
  }, [route.params?.prompt]);

  const Item = ({item, index}) => {
    return (
      <TouchableCmp
        onPress={() => {
          navigation.navigate('EditPickPrompt', {
            editingIndex: index,
            promptIds: prompts.map((prompt) => prompt.id),
          });
        }}>
        <View
          style={{
            borderWidth: 0.7,
            borderColor: 'black',
            borderRadius: 15,
            width: 350,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'grey',
              margin: 15,
            }}>
            {item.prompt}
          </Text>
          <Text
            style={{
              marginHorizontal: 15,
              textAlign: 'center',
              marginBottom: 20,
            }}>
            {item.response}
          </Text>
        </View>
      </TouchableCmp>
    );
  };

  return (
    <View>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableCmp
              onPress={async () => {
                if (!(await getPhotoPermissions(ImagePicker))) {
                  return;
                }
                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: 'Images',
                  allowsEditing: true,
                  base64: true,
                  quality: 1,
                });
              }}>
              <View>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 9999,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    top: -10,
                    right: 0,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>+</Text>
                </View>
                <Image
                  source={{
                    uri: 'https://res.cloudinary.com/personaluse1234/image/upload/v1643741748/Naire/me/image2_2_wbgnsj.jpg',
                  }}
                  style={{
                    height: width / 3 - 10,
                    width: width / 3 - 10,
                    marginHorizontal: 5,
                  }}
                />
              </View>
            </TouchableCmp>
            <TouchableCmp
              onPress={async () => {
                if (!(await getPhotoPermissions(ImagePicker))) {
                  return;
                }
                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: 'Images',
                  allowsEditing: true,
                  base64: true,
                  quality: 1,
                });
              }}>
              <View>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 9999,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    top: -10,
                    right: 0,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>+</Text>
                </View>
                <Image
                  source={{
                    uri: 'https://res.cloudinary.com/personaluse1234/image/upload/v1643741915/Naire/me/image0_9_1_ypgomm.jpg',
                  }}
                  style={{
                    height: width / 3 - 10,
                    width: width / 3 - 10,
                    marginHorizontal: 5,
                  }}
                />
              </View>
            </TouchableCmp>
            <TouchableCmp
              onPress={async () => {
                if (!(await getPhotoPermissions(ImagePicker))) {
                  return;
                }
                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: 'Images',
                  allowsEditing: true,
                  base64: true,
                  quality: 1,
                });
              }}>
              <View>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 9999,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    top: -10,
                    right: 0,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>+</Text>
                </View>
                <Image
                  source={{
                    uri: 'https://res.cloudinary.com/personaluse1234/image/upload/v1643741856/Naire/me/image0_16_2_1_izegvt.png',
                  }}
                  style={{
                    height: width / 3 - 10,
                    width: width / 3 - 10,
                    marginHorizontal: 5,
                  }}
                />
              </View>
            </TouchableCmp>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <TouchableCmp
              onPress={async () => {
                if (!(await getPhotoPermissions(ImagePicker))) {
                  return;
                }
                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: 'Images',
                  allowsEditing: true,
                  base64: true,
                  quality: 1,
                });
              }}>
              <View>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 9999,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    top: -10,
                    right: 0,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>+</Text>
                </View>
                <Image
                  source={{
                    uri: 'https://res.cloudinary.com/personaluse1234/image/upload/v1643741989/Naire/me/image1_5_1_owj9s3.jpg',
                  }}
                  style={{
                    height: width / 3 - 10,
                    width: width / 3 - 10,
                    marginHorizontal: 5,
                  }}
                />
              </View>
            </TouchableCmp>
            <TouchableCmp
              onPress={async () => {
                if (!(await getPhotoPermissions(ImagePicker))) {
                  return;
                }
                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: 'Images',
                  allowsEditing: true,
                  base64: true,
                  quality: 1,
                });
              }}>
              <View>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 9999,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    top: -10,
                    right: 0,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>+</Text>
                </View>
                <Image
                  source={{
                    uri: 'https://res.cloudinary.com/personaluse1234/image/upload/v1643741991/Naire/me/image2_1_1_dupx5e.jpg',
                  }}
                  style={{
                    height: width / 3 - 10,
                    width: width / 3 - 10,
                    marginHorizontal: 5,
                  }}
                />
              </View>
            </TouchableCmp>
            <TouchableCmp
              onPress={async () => {
                if (!(await getPhotoPermissions(ImagePicker))) {
                  return;
                }
                const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: 'Images',
                  allowsEditing: true,
                  base64: true,
                  quality: 1,
                });
              }}>
              <View>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 9999,
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    top: -10,
                    right: 0,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>+</Text>
                </View>
                <Image
                  source={{
                    uri: 'https://res.cloudinary.com/personaluse1234/image/upload/v1643741993/Naire/me/image1_7_1_jdlnkn.jpg',
                  }}
                  style={{
                    height: width / 3 - 10,
                    width: width / 3 - 10,
                    marginHorizontal: 5,
                  }}
                />
              </View>
            </TouchableCmp>
          </View>
        </View>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 22,
            margin: 10,
            marginLeft: '5%',
          }}>
          Questions
        </Text>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: '10%',
          }}>
          <Text
            style={{
              marginLeft: 10,
              color: 'grey',
              fontSize: 16,
              fontWeight: '300',
            }}>
            Required: Answer prompts with a question
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              marginLeft: 10,
              color: '#434aa8',
              fontSize: 16,
              fontWeight: '400',
            }}>
            Why?
          </Text>
        </View>
        <View>
          <View style={{marginTop: 40, alignItems: 'center'}}>
            {prompts.length <= 0 ? (
              <View
                style={{
                  width: '100%',
                }}>
                <TouchableCmp
                  onPress={() => {
                    navigation.navigate('EditPickPrompt');
                  }}>
                  <View
                    style={{
                      alignSelf: 'center',
                      borderWidth: 0.7,
                      borderColor: '#434aa8',
                      borderRadius: 15,
                      width: '95%',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        color: '#434aa8',
                        margin: 15,
                      }}>
                      Pick your first prompt
                    </Text>
                  </View>
                </TouchableCmp>
              </View>
            ) : null}

            {prompts.length > 0
              ? prompts.map((item, index) => (
                  <Item key={item.id} item={item} index={index} />
                ))
              : null}

            {prompts.length > 0 && prompts.length <= 2 ? (
              <TouchableCmp
                onPress={() => {
                  navigation.navigate('EditPickPrompt', {
                    promptIds: prompts.map((prompt) => prompt.id),
                  });
                }}>
                <View
                  style={{
                    borderWidth: 0.7,
                    borderColor: '#434aa8',
                    borderRadius: 15,
                    width: 350,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: '#434aa8',
                      margin: 15,
                    }}>
                    Pick your next prompt
                  </Text>
                </View>
              </TouchableCmp>
            ) : null}
          </View>
        </View>
        <View style={{marginLeft: '5%', marginTop: 30}}>
          <Text style={{fontWeight: '600', fontSize: 22}}>Education</Text>
          <Input
            id="education"
            placeholder="Add your school"
            required
            keyboardType="default"
            returnKeyType="send"
            autoCorrect={false}
            contextMenuHidden={true}
            onContentSizeChange={({
              nativeEvent: {
                contentSize: {width, height},
              },
            }) => {}}
            onInputChange={inputChangeHandler}
            initialValue="University of California, Santa Cruz"
            styleInput={{
              height: '100%',
              width: '80%',
              marginLeft: 10,
              backgroundColor: 'rgba(0,0,0,0)',
              paddingHorizontal: 0,
              marginHorizontal: 0,
              marginVertical: 5,
              fontSize: 16,
              fontWeight: '300',
              color: 'black',
              borderRadius: 0,
              borderBottomWidth: 1,
              borderColor: '#D4D4D4',
            }}
          />
        </View>
        <View style={{marginLeft: '5%', marginTop: 30}}>
          <Text style={{fontWeight: '600', fontSize: 22}}>Job Title</Text>
          <Input
            id="jobTitle"
            placeholder="Add your job title"
            required
            keyboardType="default"
            returnKeyType="send"
            autoCorrect={false}
            contextMenuHidden={true}
            onContentSizeChange={({
              nativeEvent: {
                contentSize: {width, height},
              },
            }) => {}}
            onInputChange={inputChangeHandler}
            initialValue="Software Engineer"
            styleInput={{
              height: '100%',
              width: '80%',
              marginLeft: 10,
              backgroundColor: 'rgba(0,0,0,0)',
              paddingHorizontal: 0,
              marginHorizontal: 0,
              marginVertical: 5,
              fontSize: 16,
              fontWeight: '300',
              color: 'black',
              borderRadius: 0,
              borderBottomWidth: 1,
              borderColor: '#D4D4D4',
            }}
          />
        </View>
        <View style={{marginLeft: '5%', marginTop: 30}}>
          <Text style={{fontWeight: '600', fontSize: 22}}>Location</Text>
          <Input
            id="location"
            placeholder="Add City"
            required
            keyboardType="default"
            returnKeyType="send"
            autoCorrect={false}
            contextMenuHidden={true}
            onContentSizeChange={({
              nativeEvent: {
                contentSize: {width, height},
              },
            }) => {}}
            onInputChange={inputChangeHandler}
            initialValue="Castaic"
            styleInput={{
              height: '100%',
              width: '80%',
              marginLeft: 10,
              backgroundColor: 'rgba(0,0,0,0)',
              paddingHorizontal: 0,
              marginHorizontal: 0,
              marginVertical: 5,
              fontSize: 16,
              fontWeight: '300',
              color: 'black',
              borderRadius: 0,
              borderBottomWidth: 1,
              borderColor: '#D4D4D4',
            }}
          />
        </View>
      </ScrollView>
      <KeyboardSpacer topSpacing={-80} />
    </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default EditScreen;

import React, {useCallback, useReducer, useRef, useState} from 'react';
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
import {Feather, EvilIcons, MaterialIcons, Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../hooks';
import {setProgress} from '../../../store/actions/progressbar/progressbar';
import {Modalize} from 'react-native-modalize';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AwesomeButton from 'react-native-really-awesome-button';
import Input from '../../../components/Input';
import useDidMountEffect from '../../../helper/useDidMountEffect';

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

const CreateUser4 = (props) => {
  const dispatch = useAppDispatch();
  const [isMan, setIsMan] = useState(false);
  const [isWoman, setIsWoman] = useState(false);
  const [isMore, setIsMore] = useState('More');
  const [isMoreDisplay, setIsMoreDisplay] = useState('More');
  const [isAFAB, setIsAFAB] = useState(false);
  const [isAgender, setIsAgender] = useState(false);
  const [isAliagender, setIsAliagender] = useState(false);
  const [isAMAB, setIsAMAB] = useState(false);
  const [isAndrogyne, setIsAndrogyne] = useState(false);
  const [isAporagender, setIsAporagender] = useState(false);
  const [isBigender, setIsBigender] = useState(false);
  const [isBinarism, setIsBinarism] = useState(false);
  const [isBodyDysphoria, setIsBodyDysphoria] = useState(false);
  const [isBoi, setIsBoi] = useState(false);
  const [isButch, setIsButch] = useState(false);
  const [isCisgender, setIsCisgender] = useState(false);
  const [isCisnormativity, setIsCisnormativity] = useState(false);
  const [isCissexism, setIsCissexism] = useState(false);
  const [isDemiboy, setIsDemiboy] = useState(false);
  const [isDemigender, setIsDemigender] = useState(false);
  const [isDemigirl, setIsDemigirl] = useState(false);
  const [isDyadic, setIsDyadic] = useState(false);
  const [isFeminineOfCenter, setIsFeminineOfCenter] = useState(false);
  const [isFemininePresenting, setIsFemininePresenting] = useState(false);
  const [isFemme, setIsFemme] = useState(false);
  const [isFTM, setIsFTM] = useState(false);
  const [isGraygender, setIsGraygender] = useState(false);
  const [isIntergender, setIsIntergender] = useState(false);
  const [isIntersex, setIsIntersex] = useState(false);
  const [isMasculineOfCenter, setIsMasculineOfCenter] = useState(false);
  const [isMaverique, setIsMaverique] = useState(false);
  const [isMTF, setIsMTF] = useState(false);
  const [isMultiGender, setIsMultiGender] = useState(false);
  const [isNeutrois, setIsNeutrois] = useState(false);
  const [isNonbinary, setIsNonbinary] = useState(false);
  const [isNovigender, setIsNovigender] = useState(false);
  const [isPangender, setIsPangender] = useState(false);
  const [isPolygender, setIsPolygender] = useState(false);
  const [isSoftButch, setIsSoftButch] = useState(false);
  const [isStoneButch, setIsStoneButch] = useState(false);
  const [isThirdGender, setIsThirdGender] = useState(false);
  const [isTransfeminine, setIsTransfeminine] = useState(false);
  const [isTransgender, setIsTransgender] = useState(false);
  const [isTransmasculine, setIsTransmasculine] = useState(false);
  const [isTranssexual, setIsTranssexual] = useState(false);
  const [isTrigender, setIsTrigender] = useState(false);
  const [isTwoSpirit, setIsTwoSpirit] = useState(false);

  const genderData = [
    {value: 'AFAB', buttonValue: isAFAB, setButtonValue: setIsAFAB},
    {value: 'Agender', buttonValue: isAgender, setButtonValue: setIsAgender},
    {
      value: 'Aliagender',
      buttonValue: isAliagender,
      setButtonValue: setIsAliagender,
    },
    {value: 'AMAB', buttonValue: isAMAB, setButtonValue: setIsAMAB},
    {
      value: 'Androgyne',
      buttonValue: isAndrogyne,
      setButtonValue: setIsAndrogyne,
    },
    {
      value: 'Aporagender',
      buttonValue: isAporagender,
      setButtonValue: setIsAporagender,
    },
    {
      value: 'Bigender',
      buttonValue: isBigender,
      setButtonValue: setIsBigender,
    },
    {
      value: 'Binarism',
      buttonValue: isBinarism,
      setButtonValue: setIsBinarism,
    },
    {
      value: 'Body Dysphoria',
      buttonValue: isBodyDysphoria,
      setButtonValue: setIsBodyDysphoria,
    },
    {
      value: 'Boi',
      buttonValue: isBoi,
      setButtonValue: setIsBoi,
    },
    {
      value: 'Butch',
      buttonValue: isButch,
      setButtonValue: setIsButch,
    },
    {
      value: 'Cisgender',
      buttonValue: isCisgender,
      setButtonValue: setIsCisgender,
    },
    {
      value: 'Cisnormativity',
      buttonValue: isCisnormativity,
      setButtonValue: setIsCisnormativity,
    },
    {
      value: 'Cissexism',
      buttonValue: isCissexism,
      setButtonValue: setIsCissexism,
    },
    {value: 'Demiboy', buttonValue: isDemiboy, setButtonValue: setIsDemiboy},
    {
      value: 'Demigender',
      buttonValue: isDemigender,
      setButtonValue: setIsDemigender,
    },
    {
      value: 'Demigirl',
      buttonValue: isDemigirl,
      setButtonValue: setIsDemigirl,
    },
    {
      value: 'Dyadic',
      buttonValue: isDyadic,
      setButtonValue: setIsDyadic,
    },
    {
      value: 'Feminine-of-center',
      buttonValue: isFeminineOfCenter,
      setButtonValue: setIsFeminineOfCenter,
    },
    {
      value: 'Feminine-presenting',
      buttonValue: isFemininePresenting,
      setButtonValue: setIsFemininePresenting,
    },
    {
      value: 'Femme',
      buttonValue: isFemme,
      setButtonValue: setIsFemme,
    },
    {
      value: 'Female-to-male (FTM)',
      buttonValue: isFTM,
      setButtonValue: setIsFTM,
    },
    {
      value: 'Graygender',
      buttonValue: isGraygender,
      setButtonValue: setIsGraygender,
    },
    {
      value: 'Intergender',
      buttonValue: isIntergender,
      setButtonValue: setIsIntergender,
    },
    {
      value: 'Intersex',
      buttonValue: isIntersex,
      setButtonValue: setIsIntersex,
    },
    {
      value: 'Masculine-of-center',
      buttonValue: isMasculineOfCenter,
      setButtonValue: setIsMasculineOfCenter,
    },
    {
      value: 'Maverique',
      buttonValue: isMaverique,
      setButtonValue: setIsMaverique,
    },
    {
      value: 'Male-to-female (MTF)',
      buttonValue: isMTF,
      setButtonValue: setIsMTF,
    },
    {
      value: 'MultiGender',
      buttonValue: isMultiGender,
      setButtonValue: setIsMultiGender,
    },
    {
      value: 'Neutrois',
      buttonValue: isNeutrois,
      setButtonValue: setIsNeutrois,
    },
    {
      value: 'Nonbinary',
      buttonValue: isNonbinary,
      setButtonValue: setIsNonbinary,
    },
    {
      value: 'Novigender',
      buttonValue: isNovigender,
      setButtonValue: setIsNovigender,
    },
    {
      value: 'Pangender',
      buttonValue: isPangender,
      setButtonValue: setIsPangender,
    },
    {
      value: 'Polygender',
      buttonValue: isPolygender,
      setButtonValue: setIsPolygender,
    },
    {
      value: 'Soft butch',
      buttonValue: isSoftButch,
      setButtonValue: setIsSoftButch,
    },
    {
      value: 'Stone butch',
      buttonValue: isStoneButch,
      setButtonValue: setIsStoneButch,
    },
    {
      value: 'Third gender',
      buttonValue: isThirdGender,
      setButtonValue: setIsThirdGender,
    },
    {
      value: 'Transfeminine',
      buttonValue: isTransfeminine,
      setButtonValue: setIsTransfeminine,
    },
    {
      value: 'Transgender',
      buttonValue: isTransgender,
      setButtonValue: setIsTransgender,
    },
    {
      value: 'Transmasculine',
      buttonValue: isTransmasculine,
      setButtonValue: setIsTransmasculine,
    },
    {
      value: 'Transsexual',
      buttonValue: isTranssexual,
      setButtonValue: setIsTranssexual,
    },
    {
      value: 'Trigender',
      buttonValue: isTrigender,
      setButtonValue: setIsTrigender,
    },
    {
      value: 'Two-spirit',
      buttonValue: isTwoSpirit,
      setButtonValue: setIsTwoSpirit,
    },
  ];

  useDidMountEffect(() => {
    if (genderData.filter((gender) => gender.buttonValue === true).length > 1) {
      setIsMore(
        `+ ${
          genderData.filter((gender) => gender.buttonValue === true).length
        } More`,
      );
    }

    if (
      genderData.filter((gender) => gender.buttonValue === true).length <= 0
    ) {
      setIsMore('More');
    }
  }, [genderData]);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  const modalizeRef = useRef<Modalize>(null);
  const searchBarRef = useRef<Input>();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    Keyboard.dismiss();
    modalizeRef.current?.close();
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderTopWidth: 1,
          borderColor: 'grey',
        }}>
        <TouchableCmp
          onPress={async () => {
            item.setButtonValue((prevState) => !prevState);
            setIsMore(item.value);
          }}>
          <View
            style={{
              height: 65,
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                justifyContent: 'center',
              }}>
              <BouncyCheckbox
                size={25}
                fillColor="#434aa8"
                unfillColor="#FFFFFF"
                isChecked={item.buttonValue}
                disableBuiltInState={true}
                disableText={true}
                onPress={async () => {
                  item.setButtonValue((prevState) => !prevState);
                  setIsMore(item.value);
                }}
                iconStyle={{
                  marginLeft: 20,
                  borderColor: '#434aa8',
                  borderRadius: 5,
                }}
              />
            </View>
            <Text style={{marginLeft: 70}}>{item.value}</Text>
          </View>
        </TouchableCmp>
      </View>
    );
  };

  const modalSearchHeader = () => (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        height: 65,
        overflow: 'hidden',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        flexDirection: 'row',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 3,
        }}>
        <View
          style={{
            flex: 1,
            margin: 10,
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F2F2F2',
            borderRadius: 10,
          }}>
          <EvilIcons name="search" size={24} color="grey" style={{margin: 5}} />
          <Input
            inputRef={searchBarRef}
            id="searchBar"
            placeholder="Search"
            required
            keyboardType="default"
            returnKeyType="search"
            autoCorrect={false}
            contextMenuHidden={true}
            maxLength={25}
            onInputChange={inputChangeHandler}
            initialValue=""
            styleInput={{
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0)',
              paddingHorizontal: 0,
              paddingVertical: 0,
              marginHorizontal: 0,
              fontSize: 16,
              fontWeight: '300',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableCmp onPress={onClose}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: '#434aa8'}}>Done</Text>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      searchBar: '',
    },
    inputValidities: {
      searchBar: false,
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.screen}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} animated={true} />
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(0.6));
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
          <Text style={styles.seekingAText}>Seeking a....</Text>
          <View style={styles.buttonsContainer}>
            <AwesomeButton
              raiseLevel={1}
              style={{
                marginVertical: 10,
              }}
              stretch={true}
              backgroundColor={'#ffffff'}
              backgroundActive={'rgba(0,0,0,0)'}
              borderWidth={1}
              borderColor={'#A1A1A1'}
              onPress={() => {
                setIsMan((prevState) => !prevState);
              }}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isMan}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: '#434aa8',
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Man
                </Text>
              </View>
            </AwesomeButton>
            <AwesomeButton
              raiseLevel={1}
              style={{
                marginVertical: 10,
              }}
              stretch={true}
              backgroundColor={'#ffffff'}
              backgroundActive={'rgba(0,0,0,0)'}
              borderWidth={1}
              borderColor={'#A1A1A1'}
              onPress={() => {
                setIsWoman((prevState) => !prevState);
              }}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}>
                <BouncyCheckbox
                  size={25}
                  fillColor="#434aa8"
                  unfillColor="#FFFFFF"
                  isChecked={isWoman}
                  disableBuiltInState={true}
                  iconStyle={{
                    marginLeft: 20,
                    borderColor: '#434aa8',
                    borderRadius: 5,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Woman
                </Text>
              </View>
            </AwesomeButton>
            <AwesomeButton
              raiseLevel={1}
              style={{
                marginVertical: 10,
              }}
              stretch={true}
              backgroundColor={'#ffffff'}
              backgroundActive={'rgba(0,0,0,0)'}
              borderWidth={1}
              borderColor={'#A1A1A1'}
              onPress={() => {
                onOpen();
              }}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}>
                {isMore !== 'More' ? (
                  <BouncyCheckbox
                    size={25}
                    fillColor="#434aa8"
                    unfillColor="#FFFFFF"
                    isChecked={isMore !== 'More' ? true : false}
                    disableBuiltInState={true}
                    iconStyle={{
                      marginLeft: 20,
                      borderColor: '#434aa8',
                      borderRadius: 5,
                    }}
                  />
                ) : null}
              </View>
              {isMore === 'More' ? (
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={25}
                    color="black"
                    style={{marginRight: 20}}
                  />
                </View>
              ) : null}
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  {isMore}
                </Text>
              </View>
            </AwesomeButton>
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
              dispatch(setProgress(1));
              props.navigation.navigate('CreateUser5');
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
      <Modalize
        ref={modalizeRef}
        rootStyle={{borderRadius: 10}}
        HeaderComponent={modalSearchHeader}
        childrenStyle={{
          marginTop: 65,
        }}
        flatListProps={{
          keyboardShouldPersistTaps: 'handled',
          data: genderData.filter(
            (gender) =>
              gender.value.toLowerCase() ===
                formState.inputValues.searchBar.toLowerCase() ||
              gender.value
                .toLowerCase()
                .includes(formState.inputValues.searchBar.toLowerCase()),
          ),
          renderItem: renderItem,
          keyExtractor: (item, index) => `${index}-${item.value}`,
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  seekingAText: {
    marginLeft: '10%',
    color: 'black',
    fontSize: 29,
    fontWeight: '500',
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default CreateUser4;

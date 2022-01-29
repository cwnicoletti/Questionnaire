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
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Text,
  Image,
  Dimensions,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  FontAwesome,
  FontAwesome5,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { setProgress } from "../../../../store/actions/progressbar/progressbar";
import FullProfile from "../../../../components/FullProfile/FullProfile";
import { Modalize } from "react-native-modalize";
import { Host, Portal } from "react-native-portalize";
import Input from "../../../../components/Input";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import LottieView from "lottie-react-native";

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

const ProfileScreen = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const [params, setParams] = useState({});
  const [showLottie, setShowLottie] = useState(false);
  const [extraModalHeightKeyboard, setExtraModalHeightKeyboard] = useState(0);
  const width = Dimensions.get("window").width;
  const [extraModalHeightPictureOrPrompt, setExtraModalHeightPictureOrPrompt] =
    useState(width / 1.5);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const sentLottieFadeAnim = useRef(new Animated.Value(0)).current;
  const lottieRef = useRef();

  const modalizeRef = useRef<Modalize>(null);

  const fadeOutLoading = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const sentLottieFadeIn = () => {
    Animated.timing(sentLottieFadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    setExtraModalHeightKeyboard(0);
    modalizeRef.current?.close();
  };

  const onCloseModal = () => {
    setExtraModalHeightKeyboard(0);
    Keyboard.dismiss();
  };

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

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    if (route.params) {
      setParams(route.params);
    }
  }, [route.params]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={styles.screen}
    >
      <StatusBar barStyle={"dark-content"} animated={true} />
      <View style={{ height: 10 }} />
      <ScrollView>
        <FullProfile
          name={params.name}
          predictionValue={params.predictionValue}
          age={params.age}
          height={params.height}
          worksOut={params.worksOut}
          smokesTobacco={params.smokesTobacco}
          smokesWeed={params.smokesWeed}
          drinks={params.drinks}
          drugs={params.drugs}
          city={params.city}
          school={params.school}
          education={params.education}
          jobTitle={params.jobTitle}
          Image1={params.image1}
          Image2={params.image2}
          Image3={params.image3}
          Image4={params.image4}
          Image5={params.image5}
          Image6={params.image6}
          onOpen={onOpen}
          showMessage={!showLottie}
        />
      </ScrollView>
      <Modalize
        ref={modalizeRef}
        modalHeight={
          150 + extraModalHeightKeyboard + extraModalHeightPictureOrPrompt
        }
        onClose={onCloseModal}
        scrollViewProps={{
          keyboardShouldPersistTaps: "handled",
          scrollEnabled: false,
        }}
      >
        {showLottie ? (
          <Animated.View
            style={{
              opacity: sentLottieFadeAnim,
              justifyContent: "center",
              alignItems: "center",
              height: "40%",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Feather
                  name="x"
                  size={24}
                  color="black"
                  style={{
                    flex: 1,
                    paddingLeft: 20,
                    paddingTop: 20,
                    opacity: 0,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <TouchableCmp onPress={onClose}>
                  <Feather
                    name="x"
                    size={24}
                    color="black"
                    style={{ flex: 1, paddingRight: 20, paddingTop: 20 }}
                  />
                </TouchableCmp>
              </View>
              <LottieView
                ref={lottieRef}
                source={require("../../../../assets/lottie_anims/19666-love-message-pop.json")}
                autoPlay={false}
                loop={false}
                colorFilters={[
                  {
                    keypath: "HEART",
                    color: "#ffffff",
                  },
                  {
                    keypath: "BALOON",
                    color: "#434aa8",
                  },
                ]}
                style={{ height: 150 }}
              />
              <Text style={{ fontSize: 22, fontWeight: "500" }}>
                Your message has been sent!
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "200", marginTop: 5 }}>
                They'll recieve your notifcation soon!
              </Text>
            </View>
          </Animated.View>
        ) : null}
        <Animated.View
          style={{
            flex: 1,
            borderRadius: 25,
            backgroundColor: "white",
            paddingTop: 5,
            opacity: fadeAnim,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Feather
              name="x"
              size={24}
              color="black"
              style={{ paddingLeft: 30, opacity: 0 }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaskedView
                style={{}}
                maskElement={
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome
                      name="envelope-o"
                      size={28}
                      color="black"
                      style={{ position: "absolute" }}
                    />
                    <FontAwesome5
                      name="heart"
                      size={11}
                      color="black"
                      style={{ marginBottom: 5 }}
                    />
                  </View>
                }
              >
                <LinearGradient
                  colors={["#A700D1", "#434aa8"]}
                  style={{
                    flex: 1,
                    height: 50,
                    width: 50,
                  }}
                />
              </MaskedView>
              <Text style={{ fontSize: 20, fontWeight: "200" }}>
                Send a message
              </Text>
            </View>
            <TouchableCmp onPress={onClose}>
              <Feather
                name="x"
                size={24}
                color="black"
                style={{ padding: 20, paddingRight: 30 }}
              />
            </TouchableCmp>
          </View>
          <Image
            source={{
              uri: params.image1,
            }}
            style={{
              height: width / 1.5,
              width: width / 1.5,
              marginBottom: 20,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: 40,
                width: "70%",
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "grey",
                justifyContent: "center",
                borderRadius: 20,
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
                onContentSizeChange={({
                  nativeEvent: {
                    contentSize: { width, height },
                  },
                }) => {}}
                onInputChange={inputChangeHandler}
                initialValue=""
                styleInput={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0)",
                  paddingHorizontal: 15,
                  paddingRight: 45,
                  marginHorizontal: 0,
                  fontSize: 16,
                  fontWeight: "300",
                  color: "black",
                }}
              />
            </View>
            <View style={{ marginLeft: 20 }}>
              <TouchableCmp
                onPress={() => {
                  fadeOutLoading();
                  Keyboard.dismiss();
                  setTimeout(async () => {
                    setShowLottie(true);
                    sentLottieFadeIn();
                    setExtraModalHeightKeyboard(0);
                    if (lottieRef.current) {
                      lottieRef.current.play();
                    }
                  }, 200);
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                    height: 50,
                    width: 50,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowColor: "black",
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                    borderRadius: 50 / 2,
                  }}
                >
                  <MaskedView
                    style={{ flex: 1 }}
                    maskElement={
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesome name="send-o" size={28} color="black" />
                      </View>
                    }
                  >
                    <LinearGradient
                      colors={
                        formState.formIsValid
                          ? ["#A700D1", "#434aa8"]
                          : ["#000000", "grey"]
                      }
                      style={{
                        flex: 1,
                        height: 50,
                        width: 50,
                        borderRadius: 50 / 2,
                      }}
                    />
                  </MaskedView>
                </View>
              </TouchableCmp>
            </View>
          </View>
        </Animated.View>
        <KeyboardSpacer
          topSpacing={-80}
          onToggle={(toggleState, keyboardSpace) => {
            setExtraModalHeightKeyboard(keyboardSpace);
          }}
        />
      </Modalize>
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
    flexDirection: "row",
    justifyContent: "center",
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default ProfileScreen;

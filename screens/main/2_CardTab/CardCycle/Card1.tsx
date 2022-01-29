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
  Keyboard,
  View,
  KeyboardAvoidingView,
  Animated,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  FontAwesome,
  FontAwesome5,
  EvilIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { setProgress } from "../../../../store/actions/progressbar/progressbar";
import FullProfile from "../../../../components/FullProfile/FullProfile";
import * as Progress from "react-native-progress";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Modalize } from "react-native-modalize";
import Input from "../../../../components/Input";
import KeyboardSpacer from "react-native-keyboard-spacer";
import LottieView from "lottie-react-native";
import { CommonActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

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

const Card1 = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [indeterminate, setIndeterminate] = useState(true);
  const [showLottie, setShowLottie] = useState(false);
  const [extraModalHeightKeyboard, setExtraModalHeightKeyboard] = useState(0);
  const width = Dimensions.get("window").width;
  const [extraModalHeightPictureOrPrompt, setExtraModalHeightPictureOrPrompt] =
    useState(width / 1.5);
  const sentLottieFadeAnim = useRef(new Animated.Value(0)).current;
  const fadeLoadingAnim = useRef(new Animated.Value(0)).current;
  const fadeModalAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const lottieRef = useRef();

  const modalizeRef = useRef<Modalize>(null);

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

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
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

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const fadeInLoading = () => {
    Animated.timing(fadeLoadingAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutLoading = () => {
    Animated.timing(fadeLoadingAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutModal = () => {
    Animated.timing(fadeModalAnim, {
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

  // TODO: hide tabbar on scroll
  // let offset = 0;
  // const onScrollHandler = (e) => {
  //   const currentOffset = e.nativeEvent.contentOffset.y;
  //   if (currentOffset > 100) {
  //     offset = currentOffset;
  //     navigation.getParent().setParams({
  //       tabBarStyle: "none",
  //       offset: offset,
  //     });
  //   }

  //   if (currentOffset < 100) {
  //     offset = currentOffset;
  //     navigation.getParent().setParams({
  //       tabBarStyle: null,
  //       offset: offset,
  //     });
  //   }
  // };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      {!loading ? (
        <Animated.View style={{ opacity: fadeAnim, justifyContent: "center" }}>
          <ScrollView
          // TODO: hide tabbar on scroll
          // onScroll={onScrollHandler}
          // showsVerticalScrollIndicator={false}
          // scrollEventThrottle={1}
          >
            <SafeAreaView>
              <TouchableCmp
                onPress={() => {
                  navigation.navigate("CardPreferencesScreen");
                }}
              >
                <EvilIcons
                  name="search"
                  size={32}
                  color="black"
                  style={{
                    alignSelf: "flex-end",
                    paddingBottom: 23,
                    paddingRight: 25,
                  }}
                />
              </TouchableCmp>
              <FullProfile
                name="Son Ye-Jin"
                predictionValue={98.67}
                age={27}
                height={`5' 6"`}
                worksOut="Sometimes"
                smokesTobacco="Never"
                smokesWeed="Never"
                drinks="Socially"
                drugs="Rarely"
                education="Undergraduate Degree"
                city="San Jose"
                school="University of California, Berkley"
                jobTitle="Product Marketing Manager at SoundCloud"
                Image1="https://res.cloudinary.com/personaluse1234/image/upload/v1642785082/Naire/Son%20Ye-Jin/sduitgeru8i3845253465_xj5oqt.jpg"
                Image2="https://res.cloudinary.com/personaluse1234/image/upload/v1642785083/Naire/Son%20Ye-Jin/wdiofjirte78546_cro9vj.jpg"
                Image3="https://res.cloudinary.com/personaluse1234/image/upload/v1642785086/Naire/Son%20Ye-Jin/rewuiythuienjwdf896576_axoypd.png"
                Image4="https://res.cloudinary.com/personaluse1234/image/upload/v1642785085/Naire/Son%20Ye-Jin/iojhrtiekry9768_lqndme.jpg"
                Image5="https://res.cloudinary.com/personaluse1234/image/upload/v1642785085/Naire/Son%20Ye-Jin/mdsakofmkik873536_mcp9pf.jpg"
                Image6="https://res.cloudinary.com/personaluse1234/image/upload/v1642785083/Naire/Son%20Ye-Jin/rjkewhutre8456_z9gdhi.jpg"
                onOpen={onOpen}
                showMessage={!showLottie}
              />
            </SafeAreaView>
          </ScrollView>
          <TouchableCmp
            onPress={() => {
              navigation.push("InterCard");
            }}
          >
            <View
              style={{
                position: "absolute",
                zIndex: 9999,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "black",
                left: 20,
                bottom: 20,
                height: 75,
                width: 75,
                shadowOffset: {
                  width: -1,
                  height: 1,
                },
                shadowColor: "black",
                shadowOpacity: 0.1,
                shadowRadius: 2,
                borderRadius: 75 / 2,
              }}
            >
              <Feather name="fast-forward" size={24} color="black" />
            </View>
          </TouchableCmp>
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
                  <Text
                    style={{ fontSize: 16, fontWeight: "200", marginTop: 5 }}
                  >
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
                opacity: fadeModalAnim,
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
                  uri: "https://res.cloudinary.com/personaluse1234/image/upload/v1642454905/Naire/Sonya/cardpic2_hzqqeq.jpg",
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
                      fadeOutModal();
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
                            <FontAwesome
                              name="send-o"
                              size={28}
                              color="black"
                            />
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
        </Animated.View>
      ) : (
        <MaskedView
          style={{
            height: "100%",
            marginTop: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
          maskElement={
            <Animated.View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                opacity: fadeLoadingAnim,
              }}
            >
              <SafeAreaView>
                <Progress.Circle
                  size={150}
                  color={"#434aa8"}
                  borderWidth={1}
                  strokeCap={"round"}
                  thickness={2}
                  indeterminate={true}
                  style={{
                    paddingTop: 10,
                    alignItems: "center",
                  }}
                />
              </SafeAreaView>
            </Animated.View>
          }
        >
          <LinearGradient
            colors={["#A700D1", "#434aa8"]}
            style={{
              height: 180,
              width: "100%",
            }}
          />
        </MaskedView>
      )}
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

export default Card1;

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
  Keyboard,
  View,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { EvilIcons, Feather } from "@expo/vector-icons";
import FullProfile from "../../../../components/FullProfile/FullProfile";
import * as Progress from "react-native-progress";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Modalize } from "react-native-modalize";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "../../../../components/FullProfile/FullProfile_components/Modal/Modal";

const Card1 = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [showMessageButton, setShowMessageButton] = useState(true);
  const [pickedPicture, setPickedPicture] = useState("");
  const [pickedPrompt, setPickedPrompt] = useState({});
  const [pickedPromptHeight, setPickedPromptHeight] = useState(0);
  const fadeLoadingAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onCloseModal = () => {
    setTimeout(() => {
      setPickedPrompt({});
      setPickedPicture("");
    }, 500);
    Keyboard.dismiss();
  };

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const setPicture = (imageUrl) => {
    setPickedPicture(imageUrl);
  };

  const setPrompt = (prompt) => {
    setPickedPrompt(prompt);
  };

  const getPromptHeight = (height) => {
    setPickedPromptHeight(height);
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
                predictionValue={67.21}
                age={20}
                height={`5' 5"`}
                worksOut="Rarely"
                smokesTobacco="Never"
                smokesWeed="Never"
                drinks="Sometimes"
                drugs="Never"
                education="In college"
                city="Los Angeles"
                school="University of Southern California"
                jobTitle="Digital Advertising Intern"
                image1="https://res.cloudinary.com/personaluse1234/image/upload/v1642785082/Naire/Son%20Ye-Jin/sduitgeru8i3845253465_xj5oqt.jpg"
                image2="https://res.cloudinary.com/personaluse1234/image/upload/v1642785083/Naire/Son%20Ye-Jin/wdiofjirte78546_cro9vj.jpg"
                image3="https://res.cloudinary.com/personaluse1234/image/upload/v1642785086/Naire/Son%20Ye-Jin/rewuiythuienjwdf896576_axoypd.png"
                image4="https://res.cloudinary.com/personaluse1234/image/upload/v1642785085/Naire/Son%20Ye-Jin/iojhrtiekry9768_lqndme.jpg"
                image5="https://res.cloudinary.com/personaluse1234/image/upload/v1642785085/Naire/Son%20Ye-Jin/mdsakofmkik873536_mcp9pf.jpg"
                image6="https://res.cloudinary.com/personaluse1234/image/upload/v1642785083/Naire/Son%20Ye-Jin/rjkewhutre8456_z9gdhi.jpg"
                prompt1="The first thing I gotta know"
                answer1="are you a morning or a night person? cuz I'm definitely a morning person and I know that bugs some people lol"
                prompt2="Something I'd like to know about your interests"
                answer2="are they something I can join in on? 😊"
                prompt3="My favorite question to ask people"
                answer3="what's something you've always wanted to try?"
                onOpen={onOpen}
                showMessage={showMessageButton}
                setPicture={setPicture}
                setPrompt={setPrompt}
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
          <Modal
            modalizeRef={modalizeRef}
            pickedPicture={pickedPicture}
            pickedPrompt={pickedPrompt}
            pickedPromptHeight={pickedPromptHeight}
            onCloseModal={onCloseModal}
            getPromptHeight={getPromptHeight}
            setShowMessageButton={setShowMessageButton}
          />
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

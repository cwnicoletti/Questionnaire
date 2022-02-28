import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Animated,
  Text,
  Dimensions,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import * as Progress from "react-native-progress";
import useDidMountEffect from "../../../helper/useDidMountEffect";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import LockedItem from "../../../components/MainScreenPredictions/LockedItem";
import Prediction from "../../../components/MainScreenPredictions/Prediction";
import { mainScreenData } from "../../../data/mainScreenData";

const MainScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [testProgress, setTestProgress] = useState(1);
  const [showPercent, setShowPercent] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(false);
  const [loadTopPredictions, setLoadTopPredictions] = useState(false);
  const height = Dimensions.get("window").height;

  const fadeProgressAnim = useRef(new Animated.Value(0)).current;
  const fadeTextAnim = useRef(new Animated.Value(1)).current;
  const fadeTopPredictionsAnim = useRef(new Animated.Value(0)).current;

  const Item = ({
    name,
    predictionRank,
    predictionValue,
    previewImage,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    prompt1,
    answer1,
    prompt2,
    answer2,
    prompt3,
    answer3,
    age,
    height,
    worksOut,
    city,
    smokesTobacco,
    smokesWeed,
    drinks,
    drugs,
    education,
    school,
    jobTitle,
    locked,
  }) => {
    const fadeItemProgressAnim = useRef(new Animated.Value(0)).current;
    const fadeItemLockedProgressAnim = useRef(new Animated.Value(0)).current;
    const lottieRef = useRef();

    const fadeInItemProgress = () => {
      Animated.timing(fadeItemProgressAnim, {
        toValue: 1,
        duration: 200 * predictionRank,
        useNativeDriver: true,
      }).start();
    };

    const fadeInLockProgress = () => {
      Animated.timing(fadeItemLockedProgressAnim, {
        toValue: 1,
        duration: 200 * predictionRank,
        useNativeDriver: true,
      }).start();
    };

    useEffect(() => {
      setTimeout(() => {
        fadeInItemProgress();
        setTimeout(() => {
          fadeInLockProgress();
          setTimeout(() => {
            if (lottieRef.current) {
              lottieRef.current.play();
            }
          }, 200);
        }, 1600 * predictionRank);
      }, 200 * predictionRank);
    }, []);

    return (
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          opacity: fadeItemProgressAnim,
          marginVertical: 5,
          justifyContent: "center",
        }}
      >
        {locked ? (
          <LockedItem
            fadeItemLockedProgressAnim={fadeItemLockedProgressAnim}
            predictionRank={predictionRank}
            lottieRef={lottieRef}
            navigation={navigation}
          />
        ) : null}
        <Prediction
          name={name}
          predictionRank={predictionRank}
          predictionValue={predictionValue}
          previewImage={previewImage}
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
          image6={image6}
          prompt1={prompt1}
          answer1={answer1}
          prompt2={prompt2}
          answer2={answer2}
          prompt3={prompt3}
          answer3={answer3}
          age={age}
          height={height}
          worksOut={worksOut}
          city={city}
          smokesTobacco={smokesTobacco}
          smokesWeed={smokesWeed}
          drinks={drinks}
          drugs={drugs}
          education={education}
          school={school}
          jobTitle={jobTitle}
          navigation={navigation}
        />
      </Animated.View>
    );
  };

  const fadeOutText = () => {
    Animated.timing(fadeTextAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutProgress = () => {
    Animated.timing(fadeProgressAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeInProgress = () => {
    Animated.timing(fadeProgressAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeInTopPredictions = () => {
    Animated.timing(fadeTopPredictionsAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => {
      fadeInProgress();
    }, 500);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      predictionRank={item.predictionRank}
      predictionValue={item.predictionValue}
      previewImage={item.previewImage}
      image1={item.image1}
      image2={item.image2}
      image3={item.image3}
      image4={item.image4}
      image5={item.image5}
      image6={item.image6}
      prompt1={item.prompt1}
      answer1={item.answer1}
      prompt2={item.prompt2}
      answer2={item.answer2}
      prompt3={item.prompt3}
      answer3={item.answer3}
      age={item.age}
      height={item.height}
      worksOut={item.worksOut}
      city={item.city}
      smokesTobacco={item.smokesTobacco}
      smokesWeed={item.smokesWeed}
      drinks={item.drinks}
      drugs={item.drugs}
      education={item.education}
      school={item.school}
      jobTitle={item.jobTitle}
      locked={item.locked}
    />
  );

  useDidMountEffect(() => {
    fadeInTopPredictions();
  }, [loadTopPredictions]);

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        position: "absolute",
        height: height - 100,
        width: "100%",
        zIndex: -99999,
      }}
    >
      <StatusBar barStyle={"dark-content"} animated={true} />
      {!loadTopPredictions ? (
        <TouchableCmp
          onPress={() => {
            setTestProgress(0);
            fadeOutText();
            setTimeout(() => {
              setShowPercent(true);
              setTimeout(() => {
                setTestProgress(
                  parseFloat((Math.random() * (0.2 - 0.1) + 0.1).toFixed(2))
                );
                setShowLoadingText(true);
                setTimeout(() => {
                  setTestProgress(1);
                  fadeOutProgress();
                  setTimeout(() => {
                    setLoadTopPredictions(true);
                  }, 800);
                }, 800);
              }, 300);
            }, 800);
          }}
        >
          <MaskedView
            style={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            maskElement={
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Animated.View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: fadeProgressAnim,
                  }}
                >
                  <Progress.Circle
                    progress={testProgress}
                    size={150}
                    color={"#434aa8"}
                    borderWidth={0}
                    showsText={showPercent}
                    strokeCap={"round"}
                    thickness={2}
                    textStyle={{ fontWeight: "300" }}
                    formatText={(percent) => (
                      <Animated.Text
                        style={{ opacity: percent * 9 }}
                      >{`${parseInt(
                        percent.toFixed(2) * 100
                      )}%`}</Animated.Text>
                    )}
                    style={{
                      paddingBottom: 30,
                      alignItems: "center",
                      justifyContent: !showLoadingText ? "center" : "flex-end",
                    }}
                  >
                    {showLoadingText ? (
                      <Text
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          fontSize: 12,
                          color: "#434aa8",
                          fontWeight: "300",
                        }}
                      >
                        Uploading surveys...
                      </Text>
                    ) : null}
                    <Animated.Text
                      style={{
                        position: "absolute",
                        fontSize: 32,
                        paddingBottom: 30,
                        color: "#434aa8",
                        fontWeight: "300",
                        opacity: fadeTextAnim,
                      }}
                    >
                      Start
                    </Animated.Text>
                  </Progress.Circle>
                </Animated.View>
              </View>
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
        </TouchableCmp>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            position: "absolute",
            height: height - 160,
            width: "100%",
            zIndex: -99999,
            justifyContent: "center",
          }}
        >
          <Animated.FlatList
            data={mainScreenData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={(e) => (
              <View
                style={{
                  alignSelf: "center",
                  width: 300,
                  borderBottomWidth: 0.5,
                  borderColor: "#C2C2C2",
                }}
              />
            )}
            style={{
              flex: 1,
              opacity: fadeTopPredictionsAnim,
            }}
          />
        </View>
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

export default MainScreen;

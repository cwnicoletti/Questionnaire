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
  Image,
  SafeAreaView,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import * as Progress from "react-native-progress";
import useDidMountEffect from "../../../helper/useDidMountEffect";
import { setProgress } from "../../../store/actions/progressbar/progressbar";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import LockedItem from "../../../components/MainScreenPredictions/LockedItem";
import Prediction from "../../../components/MainScreenPredictions/Prediction";

const MainScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [testProgress, setTestProgress] = useState(1);
  const [showPercent, setShowPercent] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(false);
  const [loadTopPredictions, setLoadTopPredictions] = useState(false);

  const fadeProgressAnim = useRef(new Animated.Value(0)).current;
  const fadeTextAnim = useRef(new Animated.Value(1)).current;
  const fadeTopPredictionsAnim = useRef(new Animated.Value(0)).current;

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742678/Naire/Genevieve%20Hannelius/nbvmnmbn3333_1_yw6lh7.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782746/Naire/Genevieve%20Hannelius/nbvmnmbn3333_pzyg8g.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782745/Naire/Genevieve%20Hannelius/237685gfdhfnghfm_j_kiy4ti.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642457993/Naire/Genevieve%20Hannelius/messagespic5_g33hm3.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782745/Naire/Genevieve%20Hannelius/678867tjhrjtyhrh_ahmijd.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782746/Naire/Genevieve%20Hannelius/1111hfgdhgfh_bls1ng.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642782745/Naire/Genevieve%20Hannelius/tweyruyti909090_khanw3.jpg",
      prompt1: "If I could ask you any question about the universe",
      answer1: "Do you believe in a higher power? like god and stuff?",
      prompt2: "One of my favorite things to ask someone",
      answer2: "What's your favorite color, and why?",
      prompt3: "Something I'd like to know about you",
      answer3: "What's your craziest story?",
      predictionRank: 1,
      predictionValue: 99.37,
      name: "Stephanie",
      age: 21,
      height: `"5' 4"`,
      worksOut: "Rarely",
      city: "Newhall",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: true,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742650/Naire/Park%20Min%20Young/wdifjrew8546546_1_wbnfiw.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/wdifjrew8546546_bbijdl.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/wkoreyik8967_soosdi.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/fuifgwewokqe78546_pbna2m.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/opqewwqirtu574836_c1yds8.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785596/Naire/Park%20Min%20Young/uhhgdfuihkdf388759436_esluux.png",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642785593/Naire/Park%20Min%20Young/wequytrrwe7564352435_vsw8zl.jpg",
      prompt1: "Something I'd like to know about your interests",
      answer1:
        "Does it require hand-eye coordination? cuz I don't have the energy for that lmao",
      prompt2: "One of my favorite deep questions",
      answer2:
        "Which parallel universe versions of yourself would you want to meet and why?",
      prompt3: "Something I'd like to know about you",
      answer3: "What do you love most about yourself? :)",
      predictionRank: 2,
      predictionValue: 85.32,
      name: "Hana",
      age: 24,
      height: `"5' 8"`,
      worksOut: "Rarely",
      city: "West Hollywood",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "Standford University",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742262/Naire/Anna%20Schumate/iuhyurteitr965757_1_pah0kt.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784324/Naire/Anna%20Schumate/iuhyurteitr965757_vgww12.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784323/Naire/Anna%20Schumate/fiwyjretoi956787_xmmbz5.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784323/Naire/Anna%20Schumate/wjkjuioejyi867_zrjlin.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784323/Naire/Anna%20Schumate/dfksghfdjksg9657_oct80d.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784323/Naire/Anna%20Schumate/foijgrtoiyoyu98768_awblee.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784323/Naire/Anna%20Schumate/uieywtiero94365_pv9srz.jpg",
      prompt1: "A very important question for our relationship",
      answer1: "Is a hot dog a sandwich?",
      prompt2: "Something I'd like to know about you",
      answer2: "What is the greatest accomplishment of your life? (:",
      prompt3: "Something I'd like to know about our first date",
      answer3: "Is sushi involved? sushi better be involved",
      predictionRank: 3,
      predictionValue: 82.64,
      name: "Emma",
      age: 26,
      height: `"5' 5"`,
      worksOut: "Actively",
      city: "Santa Clarita",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Often",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "CSUN",
      jobTitle: "Model at Nous Model Management",
      locked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-546456466",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742630/Naire/Bae%20Suzy/fekjthrte868476547_1_chic5y.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784861/Naire/Bae%20Suzy/fekjthrte868476547_n35kuw.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784860/Naire/Bae%20Suzy/uifdgyuey8546865467_nwdfly.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784861/Naire/Bae%20Suzy/fktjrewuitet745646_biyslp.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784861/Naire/Bae%20Suzy/gkfdhnjgfh87657_wi9gx2.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784860/Naire/Bae%20Suzy/ioreiwut5843654896_q3yyat.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642784860/Naire/Bae%20Suzy/hjrehgt83882356342_xjdewq.jpg",
      predictionRank: 4,
      predictionValue: 72.51,
      name: "Nicole",
      age: 22,
      height: `"5' 6"`,
      worksOut: "Rarely",
      city: "Castaic",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-5678888",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742748/Naire/Anna%20Zak/kkljkfjdg675_1_ckn1rx.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783650/Naire/Anna%20Zak/kkljkfjdg675_djwuri.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783651/Naire/Anna%20Zak/467685fghfghjdj_jgkrfg.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783653/Naire/Anna%20Zak/yu987978ygfjghfj_ixqysn.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783651/Naire/Anna%20Zak/hhhhhhfgd67_vb1gpt.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783651/Naire/Anna%20Zak/6578898689fghjfghf_iprh3t.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642783650/Naire/Anna%20Zak/jhgfjhgkk34535_ownsab.jpg",
      predictionRank: 5,
      predictionValue: 65.11,
      name: "Tiffany",
      age: 27,
      height: `"5' 9"`,
      worksOut: "Sometimes",
      city: "Santa Monica",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-56788675656565656565656488",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742798/Naire/Payton%20List/lskjdjjffhd485_1_mdv5fb.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860392/Naire/Payton%20List/lskjdjjffhd485_gigstq.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860391/Naire/Payton%20List/lslasdjuiewoi34845_k2th5p.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860390/Naire/Payton%20List/dsakjfdsj8686_w9lmfx.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860391/Naire/Payton%20List/dlkdksjhure5843_gocwye.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860390/Naire/Payton%20List/ppoowerteout589_xg2yuf.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860392/Naire/Payton%20List/lkslsalkfhuy3458_fipysq.jpg",
      predictionRank: 6,
      predictionValue: 65.11,
      name: "Tiffany",
      age: 27,
      height: `"5' 9"`,
      worksOut: "Sometimes",
      city: "Santa Monica",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-5678hfgjytr888",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742842/Naire/Sydney%20Sweeney/bbbcjhgdfshfeu853_1_xpg5vw.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860618/Naire/Sydney%20Sweeney/bbbcjhgdfshfeu853_xgh3m2.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860619/Naire/Sydney%20Sweeney/mnmnvcxjviu845_u3sooy.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860619/Naire/Sydney%20Sweeney/uuyrutyet856_lh1nue.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860619/Naire/Sydney%20Sweeney/zxvcbvzjsdkjhy345_tir83r.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860619/Naire/Sydney%20Sweeney/hghghg8943758345_s0a1ys.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860620/Naire/Sydney%20Sweeney/kkkjfdsufuierut856_xiy7s6.jpg",
      predictionRank: 7,
      predictionValue: 65.11,
      name: "Tiffany",
      age: 27,
      height: `"5' 9"`,
      worksOut: "Sometimes",
      city: "Santa Monica",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-5678gjhk5467888",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742908/Naire/Lili%20Reinhart/iiioitoiyituryou9567_1_oevxxn.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642861011/Naire/Lili%20Reinhart/iiioitoiyituryou9567_ud9enq.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642861010/Naire/Lili%20Reinhart/pppeoropwrpep95406_xr019c.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642861010/Naire/Lili%20Reinhart/bbbvncnbvjdkj8435_lc5epo.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642861011/Naire/Lili%20Reinhart/asdsadasoiwqowit98546_y9shgo.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642861011/Naire/Lili%20Reinhart/yyuyureyuter845_on9ath.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642861011/Naire/Lili%20Reinhart/ccvcvjdfhg9546_si2jvw.jpg",
      predictionRank: 8,
      predictionValue: 65.11,
      name: "Tiffany",
      age: 27,
      height: `"5' 9"`,
      worksOut: "Sometimes",
      city: "Santa Monica",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-56788898ly8",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643742977/Naire/Hailee%20Steinfeld/iuuiiiuter84353_1_vwmdrq.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860833/Naire/Hailee%20Steinfeld/iuuiiiuter84353_p7wdxq.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860834/Naire/Hailee%20Steinfeld/rrrrutyurtye8456_qchmxq.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860834/Naire/Hailee%20Steinfeld/uuiuiuuire8453_kksvi8.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860835/Naire/Hailee%20Steinfeld/hihihiituyrty967_eictm5.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860835/Naire/Hailee%20Steinfeld/kkkjfgfudigut854_xkahbw.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860837/Naire/Hailee%20Steinfeld/oooitoriet9546_hi11cq.png",
      predictionRank: 9,
      predictionValue: 65.11,
      name: "Tiffany",
      age: 27,
      height: `"5' 9"`,
      worksOut: "Sometimes",
      city: "Santa Monica",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-567888d645eu8",
      previewImage:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1643743018/Naire/Madison%20Lintz/kgjdhsgfd94936_1_mcb78g.jpg",
      image1:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860270/Naire/Madison%20Lintz/kgjdhsgfd94936_zwihwh.jpg",
      image2:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860271/Naire/Madison%20Lintz/kjfhgjke9945_uum6j8.jpg",
      image3:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860271/Naire/Madison%20Lintz/jshdfgsjgdfhg324375_kvajxw.jpg",
      image4:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860270/Naire/Madison%20Lintz/oliskajfsd834535_jkpcyz.jpg",
      image5:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860271/Naire/Madison%20Lintz/uiwehquwie93924_rmspe0.jpg",
      image6:
        "https://res.cloudinary.com/personaluse1234/image/upload/v1642860270/Naire/Madison%20Lintz/udhfrweuio48356_gwfwuz.jpg",
      predictionRank: 10,
      predictionValue: 65.11,
      name: "Tiffany",
      age: 27,
      height: `"5' 9"`,
      worksOut: "Sometimes",
      city: "Santa Monica",
      smokesTobacco: "Never",
      smokesWeed: "Socially",
      drinks: "Socially",
      drugs: "Rarely",
      education: "Undergraduate Degree",
      school: "University of California, Santa Cruz",
      jobTitle: "Product Marketing Manager at SoundCloud",
      locked: false,
    },
  ];

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
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
            justifyContent: "center",
          }}
        >
          <Animated.FlatList
            data={DATA}
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
              paddingTop: 20,
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

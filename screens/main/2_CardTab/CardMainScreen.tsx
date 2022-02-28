import React, {useEffect, useRef, useState} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  View,
  Animated,
  ScrollView,
} from 'react-native';
import {useAppDispatch} from '../../../hooks';
import {EvilIcons, Feather} from '@expo/vector-icons';
import FullProfile from '../../../components/FullProfile/FullProfile';
import * as Progress from 'react-native-progress';
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient} from 'expo-linear-gradient';
import {Modalize} from 'react-native-modalize';
import {SafeAreaView} from 'react-native-safe-area-context';
import Modal from '../../../components/FullProfile/FullProfile_components/Modal/Modal';
import {Portal} from 'react-native-portalize';

const CardMainScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [showMessageButton, setShowMessageButton] = useState(true);
  const [pickedPicture, setPickedPicture] = useState('');
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
      setPickedPicture('');
    }, 500);
    Keyboard.dismiss();
  };

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
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
    setLoading(true);
    fadeInLoading();
    setTimeout(() => {
      fadeOutLoading();
      setTimeout(() => {
        setLoading(false);
        fadeIn();
      }, 1000);
    }, 3000);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} animated={true} />
      {!loading ? (
        <Animated.View style={{opacity: fadeAnim, justifyContent: 'center'}}>
          <ScrollView
          // TODO: hide tabbar on scroll
          // onScroll={onScrollHandler}
          // showsVerticalScrollIndicator={false}
          // scrollEventThrottle={1}
          >
            <SafeAreaView>
              <TouchableCmp
                onPress={() => {
                  navigation.getParent()?.setOptions({
                    tabBarStyle: {display: 'none'},
                  });
                  navigation.navigate('CardPreferencesScreen');
                }}>
                <EvilIcons
                  name="search"
                  size={32}
                  color="black"
                  style={{
                    alignSelf: 'flex-end',
                    paddingBottom: 23,
                    paddingRight: 25,
                  }}
                />
              </TouchableCmp>
              <FullProfile
                name="Sonya"
                predictionValue={98.67}
                age={27}
                height={'5\' 7"'}
                worksOut="Sometimes"
                smokesTobacco="Never"
                smokesWeed="Sometimes"
                drinks="Socially"
                drugs="Never"
                education="Undergraduate Degree"
                city="San Jose"
                school="UC Berkley"
                jobTitle="Media Planner"
                image1="https://res.cloudinary.com/personaluse1234/image/upload/v1642454905/Naire/Sonya/cardpic2_hzqqeq.jpg"
                image2="https://res.cloudinary.com/personaluse1234/image/upload/v1642454905/Naire/Sonya/cardpic4_oswkd9.jpg"
                image3="https://res.cloudinary.com/personaluse1234/image/upload/v1642454903/Naire/Sonya/cardpic9_g0qjfe.jpg"
                image4="https://res.cloudinary.com/personaluse1234/image/upload/v1642454903/Naire/Sonya/cardpic10_cxnyt4.jpg"
                image5="https://res.cloudinary.com/personaluse1234/image/upload/v1642454903/Naire/Sonya/cardpic11_frgkta.jpg"
                image6="https://res.cloudinary.com/personaluse1234/image/upload/v1642454905/Naire/Sonya/cardpic5_gsigto.jpg"
                prompt1="I'm really wondering"
                answer1="What's your favorite place in the entire world?"
                prompt2="Something random I'd like to know"
                answer2="What's your biggest pet peeve?"
                prompt3="Something I'd like to know about our first date"
                answer3="Will it include a beach scene? 👀"
                onOpen={onOpen}
                showMessage={showMessageButton}
                setPicture={setPicture}
                setPrompt={setPrompt}
              />
            </SafeAreaView>
          </ScrollView>
          <TouchableCmp
            onPress={() => {
              navigation.navigate('InterCard');
            }}>
            <View
              style={{
                position: 'absolute',
                zIndex: 9999,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                left: 20,
                bottom: 20,
                height: 75,
                width: 75,
                shadowOffset: {
                  width: -1,
                  height: 1,
                },
                shadowColor: 'black',
                shadowOpacity: 0.1,
                shadowRadius: 2,
                borderRadius: 75 / 2,
              }}>
              <Feather name="fast-forward" size={24} color="black" />
            </View>
          </TouchableCmp>
          <Portal>
            <Modal
              modalizeRef={modalizeRef}
              pickedPicture={pickedPicture}
              pickedPrompt={pickedPrompt}
              pickedPromptHeight={pickedPromptHeight}
              onCloseModal={onCloseModal}
              getPromptHeight={getPromptHeight}
              setShowMessageButton={setShowMessageButton}
            />
          </Portal>
        </Animated.View>
      ) : (
        <MaskedView
          style={{
            height: '100%',
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          maskElement={
            <Animated.View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: fadeLoadingAnim,
              }}>
              <SafeAreaView>
                <Progress.Circle
                  size={150}
                  color={'#434aa8'}
                  borderWidth={1}
                  strokeCap={'round'}
                  thickness={2}
                  indeterminate={true}
                  style={{
                    paddingTop: 10,
                    alignItems: 'center',
                  }}
                />
              </SafeAreaView>
            </Animated.View>
          }>
          <LinearGradient
            colors={['#A700D1', '#434aa8']}
            style={{
              height: 180,
              width: '100%',
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

export default CardMainScreen;

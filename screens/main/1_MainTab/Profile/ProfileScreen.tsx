import React, {useEffect, useRef, useState} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useAppDispatch} from '../../../../hooks';
import {setProgress} from '../../../../store/actions/progressbar/progressbar';
import FullProfile from '../../../../components/FullProfile/FullProfile';
import {Modalize} from 'react-native-modalize';
import Modal from '../../../../components/FullProfile/FullProfile_components/Modal/Modal';

const ProfileScreen = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const [params, setParams] = useState({});
  const [showMessageButton, setShowMessageButton] = useState(true);
  const [pickedPicture, setPickedPicture] = useState('');
  const [pickedPrompt, setPickedPrompt] = useState({});
  const [pickedPromptHeight, setPickedPromptHeight] = useState(0);

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

  useEffect(() => {
    if (route.params) {
      setParams(route.params);
    }
  }, [route.params]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  const setPicture = (imageUrl) => {
    setPickedPicture(imageUrl);
  };

  const setPrompt = (prompt) => {
    setPickedPrompt(prompt);
  };

  const getPromptHeight = (height) => {
    setPickedPromptHeight(height);
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} animated={true} />
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
          image1={params.image1}
          image2={params.image2}
          image3={params.image3}
          image4={params.image4}
          image5={params.image5}
          image6={params.image6}
          prompt1={params.prompt1}
          answer1={params.answer1}
          prompt2={params.prompt2}
          answer2={params.answer2}
          prompt3={params.prompt3}
          answer3={params.answer3}
          onOpen={onOpen}
          showMessage={showMessageButton}
          setPicture={setPicture}
          setPrompt={setPrompt}
        />
      </ScrollView>
      <Modal
        modalizeRef={modalizeRef}
        pickedPicture={pickedPicture}
        pickedPrompt={pickedPrompt}
        pickedPromptHeight={pickedPromptHeight}
        onCloseModal={onCloseModal}
        getPromptHeight={getPromptHeight}
        setShowMessageButton={setShowMessageButton}
      />
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

export default ProfileScreen;

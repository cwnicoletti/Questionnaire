import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, View, ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {setProgress} from '../../../../store/actions/progressbar/progressbar';
import FullProfile from '../../../../components/FullProfile/FullProfile';

const PreviewScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const hideCardScreen = useAppSelector(
    (state) => state.toptabbar.hideCardScreen,
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} animated={true} />
      {!hideCardScreen ? (
        <ScrollView>
          <FullProfile
            name="Christian Nicoletti"
            predictionValue={99.99}
            age={25}
            height={'"6\' 0"'}
            worksOut="Sometimes"
            city="Castaic"
            jobTitle="Software Engineer"
            smokesTobacco="Never"
            smokesWeed="Rarely"
            drinks="Socially"
            drugs="Rarely"
            education="Undergraduate Degree"
            school="University of California, Santa Cruz"
            image1="https://res.cloudinary.com/personaluse1234/image/upload/v1641866787/Naire/my%20profile%20pictures/image2_xajcrq.jpg"
            image2="https://res.cloudinary.com/personaluse1234/image/upload/v1642562428/Naire/my%20profile%20pictures/DSC_3955_1_sfknqc.png"
            image3="https://res.cloudinary.com/personaluse1234/image/upload/v1642563759/Naire/my%20profile%20pictures/image0_16_1_tgu2ic.png"
            image4="https://res.cloudinary.com/personaluse1234/image/upload/v1641866786/Naire/my%20profile%20pictures/image1_5_pgbyec.jpg"
            image5="https://res.cloudinary.com/personaluse1234/image/upload/v1642563737/Naire/my%20profile%20pictures/image1_6_v4kvyb.jpg"
            image6="https://res.cloudinary.com/personaluse1234/image/upload/v1642563729/Naire/my%20profile%20pictures/DSC_6411_1_1_eqvpwm.jpg"
            prompt1="A very important question for our relationship"
            answer1="What're we gonna cook together? 😊"
            prompt2="I'm really wondering"
            answer2="Do bears beat battlestar galactica?"
            prompt3="My favorite question to ask people"
            answer3="What's your idea of happiness?"
            showMessage={false}
          />
        </ScrollView>
      ) : null}
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

export default PreviewScreen;

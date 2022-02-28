import React, {useEffect, useRef} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
  SafeAreaView,
} from 'react-native';
import {useAppDispatch} from '../../../../hooks';
import LottieView from 'lottie-react-native';

const Card1 = ({navigation}) => {
  const dispatch = useAppDispatch();

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    setTimeout(() => {
      navigation.push('Card1');
    }, 1000);
  }, []);

  const lottieRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
    }, 150);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <View style={{height: 400, justifyContent: 'center'}}>
        <LottieView
          ref={lottieRef}
          source={require('../../../../assets/lottie_anims/8807-forward-right-micro-interaction.json')}
          autoPlay={false}
          loop={false}
          colorFilters={[
            {
              keypath: 'Layer 2',
              color: '#000000',
            },
            {
              keypath: 'Layer 1',
              color: '#000000',
            },
            {
              keypath: 'Layer 3',
              color: '#000000',
            },
          ]}
          style={{height: 360}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
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

export default Card1;

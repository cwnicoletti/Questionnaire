import React, {useEffect} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  View,
} from 'react-native';
import {useAppDispatch} from '../../../../hooks';
import {setProgress} from '../../../../store/actions/progressbar/progressbar';

const NotificationsScreen = ({navigation}) => {
  const dispatch = useAppDispatch();

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} animated={true} />
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

export default NotificationsScreen;

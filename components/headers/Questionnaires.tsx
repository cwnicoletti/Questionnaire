import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {setProgress} from '../../store/actions/progressbar/progressbar';
import {useAppDispatch} from '../../hooks';

const Questionnaires = ({navigation}) => {
  const dispatch = useAppDispatch();
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <SafeAreaView
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={{
          left: 30,
          opacity: 0,
        }}>
        <Ionicons name="ios-create" size={28} color="black" />
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '200',
          padding: 5,
        }}>
        Questionnaires
      </Text>
      <TouchableCmp
        onPress={async () => {
          navigation.getParent()?.setOptions({
            tabBarStyle: {display: 'none'},
          });
          setTimeout(() => {
            navigation.navigate('CreateSurvey1');
          }, 10);
          setTimeout(() => {
            dispatch(setProgress(0.1));
          }, 400);
        }}>
        <View
          style={{
            right: 30,
          }}>
          <Ionicons name="ios-create" size={28} color="black" />
        </View>
      </TouchableCmp>
    </SafeAreaView>
  );
};

export default Questionnaires;

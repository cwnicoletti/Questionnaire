import React, {useState} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../../hooks';
import {setProgress} from '../../../../store/actions/progressbar/progressbar';

import Slider from '@react-native-community/slider';

const CreateSurvey6 = (props) => {
  const [sliderValue, setSliderValue] = useState(0);
  const dispatch = useAppDispatch();

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={true}
      style={styles.screen}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} animated={true} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
            marginVertical: 40,
          }}>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0.5));
              props.navigation.goBack();
            }}>
            <Ionicons name="ios-arrow-back" size={30} color="black" />
          </TouchableCmp>
          <TouchableCmp
            onPress={() => {
              props.navigation.pop();
              props.navigation.pop();
              props.navigation.pop();
              props.navigation.pop();
              props.navigation.pop();
              props.navigation.pop();
            }}>
            <Feather name="x-octagon" size={30} color="black" />
          </TouchableCmp>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: '10%',
            }}>
            <Text style={styles.youAreAText}>
              How fun was the relationship?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
              marginHorizontal: '10%',
            }}>
            <Text style={styles.youAreAText}>{sliderValue / 100}%</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={1}
              step={1}
              maximumValue={10000}
              onValueChange={(value) => {
                setSliderValue(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                marginHorizontal: 20,
                flexDirection: 'row',
              }}>
              <Text style={{flex: 1, marginHorizontal: 10}}>0% least ever</Text>
              <Text style={{textAlign: 'right', marginHorizontal: 10}}>
                100% most ever
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{fontSize: 13, marginHorizontal: 10}}>Skip</Text>
          </View>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0.7));
              props.navigation.navigate('CreateSurvey7');
            }}>
            <View
              style={{
                borderColor: '#A1A1A1',
                borderWidth: 1,
                marginRight: 20,
                height: 70,
                width: 70,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                borderRadius: 35,
                backgroundColor: '#ffffff',
                shadowOffset: {
                  width: -2,
                  height: 2,
                },
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}>
              <Feather name="arrow-right" size={28} color={'#616161'} />
            </View>
          </TouchableCmp>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  youAreAText: {
    color: 'black',
    fontSize: 29,
    fontWeight: '500',
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
    alignItems: 'center',
  },
});

export default CreateSurvey6;

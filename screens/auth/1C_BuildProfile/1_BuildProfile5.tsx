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
import {Feather, Ionicons, Entypo} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../hooks';
import {setProgress} from '../../../store/actions/progressbar/progressbar';

import {Picker} from '@react-native-picker/picker';

const BuildProfile5 = (props) => {
  const dispatch = useAppDispatch();
  const [height, setHeight] = useState('5\' 7"');

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
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(0.27));
            props.navigation.goBack();
          }}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{margin: 20}}
          />
        </TouchableCmp>
        <View style={{flex: 1, marginTop: 80}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.youAreAText}>What is your height?</Text>
            <Entypo
              name="ruler"
              size={24}
              color="black"
              style={{marginHorizontal: 5}}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Picker
              style={{
                backgroundColor: 'rgba(0,0,0,0)',
              }}
              selectedValue={height}
              onValueChange={(value) => {
                setHeight(value);
              }}>
              <Picker.Item label={'< 3\' 0"'} value={'< 3\' 0"'} />
              <Picker.Item label={'3\' 1"'} value={'3\' 1"'} />
              <Picker.Item label={'3\' 2"'} value={'3\' 2"'} />
              <Picker.Item label={'3\' 3"'} value={'3\' 3"'} />
              <Picker.Item label={'3\' 4"'} value={'3\' 4"'} />
              <Picker.Item label={'3\' 5"'} value={'3\' 5"'} />
              <Picker.Item label={'3\' 6"'} value={'3\' 6"'} />
              <Picker.Item label={'3\' 7"'} value={'3\' 7"'} />
              <Picker.Item label={'3\' 8"'} value={'3\' 8"'} />
              <Picker.Item label={'3\' 9"'} value={'3\' 9"'} />
              <Picker.Item label={'3\' 10"'} value={'3\' 10"'} />
              <Picker.Item label={'3\' 11"'} value={'3\' 11"'} />
              <Picker.Item label={'4\' 0"'} value={'4\' 0"'} />
              <Picker.Item label={'4\' 1"'} value={'4\' 1"'} />
              <Picker.Item label={'4\' 2"'} value={'4\' 2"'} />
              <Picker.Item label={'4\' 3"'} value={'4\' 3"'} />
              <Picker.Item label={'4\' 4"'} value={'4\' 4"'} />
              <Picker.Item label={'4\' 5"'} value={'4\' 5"'} />
              <Picker.Item label={'4\' 6"'} value={'4\' 6"'} />
              <Picker.Item label={'4\' 7"'} value={'4\' 7"'} />
              <Picker.Item label={'4\' 8"'} value={'4\' 8"'} />
              <Picker.Item label={'4\' 9"'} value={'4\' 9"'} />
              <Picker.Item label={'4\' 10"'} value={'4\' 10"'} />
              <Picker.Item label={'4\' 11"'} value={'4\' 11"'} />
              <Picker.Item label={'5\' 0"'} value={'5\' 0"'} />
              <Picker.Item label={'5\' 1"'} value={'5\' 1"'} />
              <Picker.Item label={'5\' 2"'} value={'5\' 2"'} />
              <Picker.Item label={'5\' 3"'} value={'5\' 3"'} />
              <Picker.Item label={'5\' 4"'} value={'5\' 4"'} />
              <Picker.Item label={'5\' 5"'} value={'5\' 5"'} />
              <Picker.Item label={'5\' 6"'} value={'5\' 6"'} />
              <Picker.Item label={'5\' 7"'} value={'5\' 7"'} />
              <Picker.Item label={'5\' 8"'} value={'5\' 8"'} />
              <Picker.Item label={'5\' 9"'} value={'5\' 9"'} />
              <Picker.Item label={'5\' 10"'} value={'5\' 10"'} />
              <Picker.Item label={'5\' 11"'} value={'5\' 11"'} />
              <Picker.Item label={'6\' 0"'} value={'6\' 0"'} />
              <Picker.Item label={'6\' 1"'} value={'6\' 1"'} />
              <Picker.Item label={'6\' 2"'} value={'6\' 2"'} />
              <Picker.Item label={'6\' 3"'} value={'6\' 3"'} />
              <Picker.Item label={'6\' 4"'} value={'6\' 4"'} />
              <Picker.Item label={'6\' 5"'} value={'6\' 5"'} />
              <Picker.Item label={'6\' 6"'} value={'6\' 6"'} />
              <Picker.Item label={'6\' 7"'} value={'6\' 7"'} />
              <Picker.Item label={'6\' 8"'} value={'6\' 8"'} />
              <Picker.Item label={'6\' 9"'} value={'6\' 9"'} />
              <Picker.Item label={'6\' 10"'} value={'6\' 10"'} />
              <Picker.Item label={'6\' 11"'} value={'6\' 11"'} />
              <Picker.Item label={'7\' 0"'} value={'7\' 0"'} />
              <Picker.Item label={'7\' 1"'} value={'7\' 1"'} />
              <Picker.Item label={'7\' 2"'} value={'7\' 2"'} />
              <Picker.Item label={'7\' 3"'} value={'7\' 3"'} />
              <Picker.Item label={'7\' 4"'} value={'7\' 4"'} />
              <Picker.Item label={'7\' 5"'} value={'7\' 5"'} />
              <Picker.Item label={'7\' 6"'} value={'7\' 6"'} />
              <Picker.Item label={'7\' 7"'} value={'7\' 7"'} />
              <Picker.Item label={'7\' 8"'} value={'7\' 8"'} />
              <Picker.Item label={'7\' 10"'} value={'7\' 10"'} />
              <Picker.Item label={'7\' 11"'} value={'7\' 11"'} />
              <Picker.Item label={'8\' 0"'} value={'8\' 0"'} />
              <Picker.Item label={'8\' 1"'} value={'8\' 1"'} />
              <Picker.Item label={'8\' 2"'} value={'8\' 2"'} />
              <Picker.Item label={'8\' 3"'} value={'8\' 3"'} />
              <Picker.Item label={'8\' 4"'} value={'8\' 4"'} />
              <Picker.Item label={'8\' 5"'} value={'8\' 5"'} />
              <Picker.Item label={'8\' 6"'} value={'8\' 6"'} />
              <Picker.Item label={'8\' 7"'} value={'8\' 7"'} />
              <Picker.Item label={'8\' 8"'} value={'8\' 8"'} />
              <Picker.Item label={'8\' 9"'} value={'8\' 9"'} />
              <Picker.Item label={'8\' 10"'} value={'8\' 10"'} />
              <Picker.Item label={'8\' 11"'} value={'8\' 11"'} />
              <Picker.Item label={'> 9\' 0"'} value={'> 9\' 0"'} />
            </Picker>
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
              dispatch(setProgress(0.42));
              props.navigation.navigate('BuildProfile6');
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
    marginLeft: '10%',
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },

  buttonsContainer: {
    padding: 40,
    paddingBottom: 120,
  },
});

export default BuildProfile5;

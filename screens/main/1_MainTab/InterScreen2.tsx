import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {setCurrentScreen} from '../../../store/actions/toptabbar/toptabbar';
import {useAppDispatch} from '../../../hooks';

const InterScreen2 = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentScreen('MainScreen'));
    setTimeout(() => {
      props.navigation.navigate('BottomTabNavigator');
    }, 400);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} animated={true} />
    </SafeAreaView>
  );
};

export default InterScreen2;

import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const CardPreferencesScreen = ({navigation}) => {
  const [sliderDistance, setSliderDistance] = useState(50);
  const [sliderAge1, setSliderAge1] = useState(18);
  const [sliderAge2, setSliderAge2] = useState(27);

  let getParams: Record<string, unknown> = {};
  if (
    typeof navigation
      .getState()
      .routes.filter((screen) => screen.name === 'CurrentSurvey1')[0] !==
    'undefined'
  ) {
    getParams = navigation
      .getState()
      .routes.filter((screen) => screen.name === 'CurrentSurvey1')[0].params;
  }

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    setSliderDistance(50);
    setSliderAge1(18);
    setSliderAge2(27);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{alignSelf: 'flex-end'}}>
        <TouchableCmp
          onPress={() => {
            navigation.getParent()?.setOptions({
              tabBarStyle: {display: 'flex'},
            });
            setTimeout(() => {
              navigation.pop();
            }, 50);
          }}>
          <Feather
            name="x"
            size={24}
            color="black"
            style={{marginTop: 25, marginRight: 25}}
          />
        </TouchableCmp>
      </View>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: '10%',
            }}>
            <Text style={styles.youAreAText}>Distance</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
              marginHorizontal: '10%',
            }}>
            <Text style={styles.youAreAText}>{sliderDistance} miles</Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              step={1}
              value={50}
              maximumValue={500}
              onValueChange={(value) => {
                setSliderDistance(value);
              }}
              minimumTrackTintColor="#434aa8"
              maximumTrackTintColor="#A1A1A1"
            />
            <View
              style={{
                width: 300,
                flexDirection: 'row',
              }}>
              <Text style={{flex: 1, marginHorizontal: 10}}>{'<1 mile'}</Text>
              <Text style={{textAlign: 'right', marginHorizontal: 10}}>
                500+ miles
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: '10%',
              marginTop: 40,
            }}>
            <Text style={styles.youAreAText}>Age</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
              marginHorizontal: '10%',
            }}>
            <Text style={styles.youAreAText}>
              {sliderAge1}-{sliderAge2 >= 99 ? `${sliderAge2}+` : sliderAge2}{' '}
              years old
            </Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <MultiSlider
              containerStyle={{width: 300, height: 40, alignItems: 'center'}}
              min={18}
              step={1}
              max={99}
              values={[18, 27]}
              isMarkersSeparated={true}
              enabledTwo={true}
              onValuesChange={([value1, value2]) => {
                setSliderAge1(value1);
                setSliderAge2(value2);
              }}
              selectedStyle={{
                backgroundColor: '#434aa8',
              }}
              trackStyle={{
                height: 4,
              }}
              customMarkerLeft={() => (
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 28 / 2,
                    backgroundColor: 'white',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowColor: 'black',
                    shadowOpacity: 0.21,
                    shadowRadius: 6,
                  }}
                />
              )}
              customMarkerRight={() => (
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 28 / 2,
                    backgroundColor: 'white',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowColor: 'black',
                    shadowOpacity: 0.21,
                    shadowRadius: 6,
                  }}
                />
              )}
            />
            <View
              style={{
                width: 300,
                flexDirection: 'row',
              }}>
              <Text style={{flex: 1, marginHorizontal: 10}}>18</Text>
              <Text style={{textAlign: 'right', marginHorizontal: 10}}>
                99+
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  youAreAText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },
});

export default CardPreferencesScreen;

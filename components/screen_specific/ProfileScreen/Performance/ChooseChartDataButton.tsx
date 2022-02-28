import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const ChooseChartDataButton = (props) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === 'android') {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp
      onPress={async () => {
        props.setData(props.data);
        props.setChartLabel(props.label);
        props.setChartValue(props.initialChartValue);
        props.setChartLineColor(props.chartLineColor);
        props.setChartGradient(props.chartGradient);
      }}>
      <View
        style={{
          height: 80,
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: props.chosen ? 'black' : 'rgba(0,0,0,0)',
            paddingHorizontal: 10,
            borderRadius: 5,
            marginHorizontal: 5,
            padding: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 5,
              width: 5,
              borderRadius: 10,
              backgroundColor: props.dotColor,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 12,
              color: props.chosen ? 'white' : 'grey',
            }}>
            {props.label}
          </Text>
        </View>
      </View>
    </TouchableCmp>
  );
};

export default ChooseChartDataButton;

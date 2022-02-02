import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const ChooseChartDataButton = (props) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp
      onPress={async () => {
        props.setData(props.data);
        props.setChartLabel(props.label);
        props.setChartValue(props.initialChartValue);
      }}
    >
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 20,
          height: 120,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingHorizontal: 15,
            borderRadius: 100,
            marginHorizontal: 5,
            padding: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 5,
              width: 5,
              borderRadius: 10,
              backgroundColor: props.dotColor,
              marginRight: 5,
            }}
          />
          <Text>{props.label}</Text>
        </View>
      </View>
    </TouchableCmp>
  );
};

export default ChooseChartDataButton;

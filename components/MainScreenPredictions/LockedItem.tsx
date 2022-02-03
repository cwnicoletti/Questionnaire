import React, { useState } from "react";
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import LottieView from "lottie-react-native";

const LockedItem = (props) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Animated.View
      style={{
        zIndex: 999,
        height: "100%",
        position: "absolute",
        backgroundColor: "white",
        width: 400,
        opacity: props.fadeItemLockedProgressAnim,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableCmp
          onPress={() => {
            props.navigation.navigate("PurchaseScreen");
          }}
        >
          <View
            style={{
              paddingVertical: 40,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 36,
                fontWeight: "100",
                color: "black",
                marginRight: 10,
              }}
            >
              {`#${props.predictionRank}`}
            </Text>
            <View
              style={{
                height: 75,
                width: 75,
                marginRight: 15,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: "black",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LottieView
                ref={props.lottieRef}
                source={require("../../assets/lottie_anims/512-lock.json")}
                autoPlay={false}
                loop={false}
                colorFilters={[
                  {
                    keypath: "Lock",
                    color: "#000000",
                  },
                ]}
                speed={2}
                style={{ height: 150, width: 150 }}
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "200",
                  color: "black",
                }}
              >
                Locked
              </Text>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Animated.View>
  );
};

export default LockedItem;

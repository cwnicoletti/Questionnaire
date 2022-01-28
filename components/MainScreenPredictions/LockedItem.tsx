import React, { useState } from "react";
import {
  Animated,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import LottieView from "lottie-react-native";
import Modal from "react-native-modal";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

const LockedItem = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

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
      {/* <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible((prevState) => !prevState)}
      >
        <SafeAreaView
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 35,
              height: 550,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaskedView
              style={{
                marginTop: 20,
                height: 38,
                width: "100%",
              }}
              maskElement={
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 24,
                    color: "#434aa8",
                    textAlign: "center",
                  }}
                >
                  Unlock Top Prediction
                </Text>
              }
            >
              <LinearGradient
                colors={["#A700D1", "#434aa8"]}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </MaskedView>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 180,
                  width: 180,
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 10,
                  marginRight: 5,
                }}
              >
                <MaskedView
                  style={{
                    marginTop: 10,
                    width: "100%",
                  }}
                  maskElement={
                    <Text
                      style={{
                        fontWeight: "500",
                        textAlign: "center",
                        fontSize: 26,
                      }}
                    >
                      $15/mo
                    </Text>
                  }
                >
                  <LinearGradient
                    colors={["#A700D1", "#434aa8"]}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </MaskedView>
              </View>
            </View>
            <TouchableCmp
              onPress={() => {
                setModalVisible((prevState) => !prevState);
              }}
            >
              <LinearGradient
                colors={["#A700D1", "#434aa8"]}
                style={{
                  height: 50,
                  width: 250,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50 / 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Unlock
                </Text>
              </LinearGradient>
            </TouchableCmp>
            <TouchableCmp
              onPress={() => {
                setModalVisible((prevState) => !prevState);
              }}
            >
              <View
                style={{
                  height: 50,
                  width: 250,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 45,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "300",
                  }}
                >
                  No thank you
                </Text>
              </View>
            </TouchableCmp>
          </View>
        </SafeAreaView>
      </Modal> */}
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

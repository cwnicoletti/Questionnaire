import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from "../../../hooks";
import { setProgress } from "../../../store/actions/progressbar/progressbar";

import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreateUser2 = (props) => {
  const dispatch = useAppDispatch();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [currentDatePicked, setCurrentDatePicked] = useState(new Date());

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}
      style={styles.screen}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"dark-content"} animated={true} />
        <TouchableCmp
          onPress={() => {
            dispatch(setProgress(0.2));
            props.navigation.goBack();
          }}
        >
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="black"
            style={{ margin: 20 }}
          />
        </TouchableCmp>
        <View style={{ flex: 1, marginTop: 80 }}>
          <Text style={styles.whenWereYouBornText}>When were you born?</Text>
          <TouchableCmp
            onPress={() => {
              setShowDatePicker(true);
            }}
          >
            <View style={styles.dateContainer}>
              {!month ? (
                <View
                  style={{
                    marginHorizontal: 15,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    borderBottomWidth: 1,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "grey",
                    }}
                  >
                    MM
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    marginHorizontal: 15,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    borderBottomWidth: 1,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 34,
                      height: 40,
                    }}
                  >
                    {month}
                  </Text>
                </View>
              )}
              <Text style={{ fontSize: 34, height: 40 }}>/</Text>
              {!day ? (
                <View
                  style={{
                    marginHorizontal: 15,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    borderBottomWidth: 1,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "grey",
                    }}
                  >
                    DD
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    marginHorizontal: 15,
                    borderRadius: 5,
                    height: 35,
                    width: 35,
                    borderBottomWidth: 1,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 34,
                      height: 40,
                    }}
                  >
                    {day}
                  </Text>
                </View>
              )}
              <Text style={{ fontSize: 34, height: 40 }}>/</Text>
              {!year ? (
                <View
                  style={{
                    marginHorizontal: 15,
                    borderRadius: 5,
                    height: 35,
                    width: 80,
                    borderBottomWidth: 1,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "grey",
                    }}
                  >
                    YYYY
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    marginHorizontal: 15,
                    borderRadius: 5,
                    height: 35,
                    width: 80,
                    borderBottomWidth: 1,
                    borderColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 34,
                      height: 40,
                    }}
                  >
                    {year}
                  </Text>
                </View>
              )}
            </View>
          </TouchableCmp>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Ionicons name="ios-lock-closed-outline" size={24} color="black" />
            <Text style={{ marginHorizontal: 5 }}>This can't be changed</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <SimpleLineIcons name="globe" size={24} color="black" />
            <Text style={{ marginHorizontal: 10 }}>Your age will be public</Text>
          </View>
          <TouchableCmp
            onPress={() => {
              dispatch(setProgress(0.6));
              props.navigation.navigate("CreateUser3");
            }}
          >
            <View
              style={{
                borderColor: "#A1A1A1",
                borderWidth: 1,
                marginRight: 20,
                height: 70,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                borderRadius: 35,
                backgroundColor: "#ffffff",
                shadowOffset: {
                  width: -2,
                  height: 2,
                },
                shadowColor: "black",
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}
            >
              <Feather name="arrow-right" size={28} color={"#616161"} />
            </View>
          </TouchableCmp>
        </View>
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          backdropStyleIOS={{ backgroundColor: "black" }}
          date={currentDatePicked}
          onConfirm={(date) => {
            setCurrentDatePicked(date);
            setMonth(date.getMonth() + 1);
            setDay(date.getDate());
            setYear(date.getFullYear());
            setShowDatePicker(false);
          }}
          onCancel={() => {
            setShowDatePicker(false);
          }}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  whenWereYouBornText: {
    marginLeft: "10%",
    color: "black",
    fontSize: 29,
    fontWeight: "500",
  },

  dateContainer: {
    flex: 1,
    padding: 40,
    paddingBottom: 80,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default CreateUser2;

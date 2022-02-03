import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { isUsingMain } from "../../../store/actions/signup/signup";
import { useAppDispatch } from "../../../hooks";

const InterScreen = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(isUsingMain(true));
    }, 400);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
    </SafeAreaView>
  );
};

export default InterScreen;

import React, { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Text,
  Image,
  Dimensions,
  View,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  FontAwesome,
  EvilIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { setProgress } from "../../../../store/actions/progressbar/progressbar";
import FullProfile from "../../../../components/FullProfile/FullProfile";

const PreviewScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const hideCardScreen = useAppSelector(
    (state) => state.toptabbar.hideCardScreen
  );
  const width = Dimensions.get("window").width;

  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(setProgress(0));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} animated={true} />
      {!hideCardScreen ? (
        <ScrollView>
          <FullProfile
            name="Christian Nicoletti"
            predictionValue={99.99}
            age={25}
            height={`"6' 0"`}
            worksOut="Sometimes"
            city="Castaic"
            jobTitle="Software Engineer"
            smokesTobacco="Never"
            smokesWeed="Rarely"
            drinks="Socially"
            drugs="Rarely"
            education="Undergraduate Degree"
            school="University of California, Santa Cruz"
            Image1="https://res.cloudinary.com/personaluse1234/image/upload/v1641866787/Naire/my%20profile%20pictures/image2_xajcrq.jpg"
            Image2="https://res.cloudinary.com/personaluse1234/image/upload/v1642562428/Naire/my%20profile%20pictures/DSC_3955_1_sfknqc.png"
            Image3="https://res.cloudinary.com/personaluse1234/image/upload/v1642563759/Naire/my%20profile%20pictures/image0_16_1_tgu2ic.png"
            Image4="https://res.cloudinary.com/personaluse1234/image/upload/v1641866786/Naire/my%20profile%20pictures/image1_5_pgbyec.jpg"
            Image5="https://res.cloudinary.com/personaluse1234/image/upload/v1642563737/Naire/my%20profile%20pictures/image1_6_v4kvyb.jpg"
            Image6="https://res.cloudinary.com/personaluse1234/image/upload/v1642563729/Naire/my%20profile%20pictures/DSC_6411_1_1_eqvpwm.jpg"
            showMessage={false}
          />
        </ScrollView>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  yourCode: {
    marginLeft: "10%",
    color: "black",
    fontSize: 29,
    fontWeight: "500",
  },

  authContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  activityContainer: {
    marginTop: 10,
  },
});

export default PreviewScreen;

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import getBase64FromUrl from "../../../helper/getBase64FromUrl";
import {
  GET_SWITCHES,
  GET_USER_DATA,
  SET_DARKMODE,
  UserState,
} from "./types";

export const getUserData = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("userDocData");
    const transformedData = JSON.parse(userData);

    let followers = [];
    let following = [];
    let cheeredPosts = [];
    let profileExhibits = {};
    let profileLinks = {};
    let userFeed = {};
    let updates = {};
    let notifications = [];

    if (transformedData.followers) {
      followers = transformedData.followers;
    }
    if (transformedData.following) {
      following = transformedData.following;
    }
    if (transformedData.cheeredPosts) {
      cheeredPosts = transformedData.cheeredPosts;
    }
    if (transformedData.profileExhibits) {
      profileExhibits = transformedData.profileExhibits;
    }
    if (transformedData.profileLinks) {
      profileLinks = transformedData.profileLinks;
    }
    if (transformedData.userFeed) {
      userFeed = transformedData.userFeed;
    }
    if (transformedData.updates) {
      updates = transformedData.updates;
    }
    if (transformedData.notifications) {
      notifications = transformedData.notifications;
    }

    await dispatch({
      type: GET_USER_DATA,
      ExhibitUId: transformedData.ExhibitUId,
      email: transformedData.email,
      profilePictureId: transformedData.profilePictureId,
      profilePictureUrl: transformedData.profilePictureUrl,
      profilePictureBase64: transformedData.profilePictureBase64,
      exhibitTempCoverPhotoId: transformedData.exhibitTempCoverPhotoId,
      exhibitTempCoverPhotoUrl: transformedData.exhibitTempCoverPhotoUrl,
      exhibitTempCoverPhotoBase64: transformedData.exhibitTempCoverPhotoBase64,
      tempPhotoPostId: transformedData.tempPhotoPostId,
      tempPhotoPostUrl: transformedData.tempPhotoPostUrl,
      tempPhotoPostBase64: transformedData.tempPhotoPostBase64,
      fullname: transformedData.fullname,
      jobTitle: transformedData.jobTitle,
      username: transformedData.username,
      profileBiography: transformedData.profileBiography,
      numberOfFollowers: transformedData.numberOfFollowers,
      numberOfFollowing: transformedData.numberOfFollowing,
      profileColumns: transformedData.profileColumns,
      darkMode: transformedData.darkMode,
      showCheering: transformedData.showCheering,
      hideFollowing: transformedData.hideFollowing,
      hideFollowers: transformedData.hideFollowers,
      hideExhibits: transformedData.hideExhibits,
      followers,
      following,
      cheeredPosts,
      profileExhibits,
      profileLinks,
      userFeed,
      updates,
      notifications,
    });

    await dispatch({
      type: GET_SWITCHES,
      darkMode: transformedData.darkMode,
      showCheering: transformedData.showCheering,
      hideFollowing: transformedData.hideFollowing,
      hideFollowers: transformedData.hideFollowers,
      hideExhibits: transformedData.hideExhibits,
    });
  };
};

export const setDarkMode = (
  localId: string,
  ExhibitUId: string,
  value: boolean
) => {
  return async (dispatch) => {
    const darkModeData = { localId, ExhibitUId, value, switchName: "darkMode" };

    axios.post(
      `https://us-central1-showcase-79c28.cloudfunctions.net/setSwitchCurrentUserOnly`,
      darkModeData
    );

    await AsyncStorage.getItem("userDocData").then(async (data) => {
      let parsedData: UserState = JSON.parse(data);
      parsedData.darkMode = value;
      await AsyncStorage.setItem("userDocData", JSON.stringify(parsedData));
    });

    dispatch({ type: SET_DARKMODE, darkMode: value });
  };
};
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import getBase64FromUrl from "../../../helper/getBase64FromUrl";
import { getUserData } from "../user/user";
import { AuthenticationResponse, AUTHENTICATE, LOGOUT } from "./types";

export const authenticate = (userId: string, token: string) => {
  return async (dispatch) => {
    await dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};

export const signup = (
  email: string,
  fullname: string,
  username: string,
  password: string
) => {
  return async (dispatch) => {
    const signupForm = { email, fullname, username, password };

    const getSignupResponse: AuthenticationResponse = await axios.post(
      `https://us-central1-showcase-79c28.cloudfunctions.net/signupUser`,
      signupForm
    );

    await saveDataToStorage(
      getSignupResponse.data.localId,
      getSignupResponse.data.idToken
    );
    await saveUserDocumentToStorage(
      getSignupResponse.data.docData.email,
      getSignupResponse.data.docData.profilePictureId,
      getSignupResponse.data.docData.profilePictureUrl,
      getSignupResponse.data.docData.profilePictureBase64,
      getSignupResponse.data.docData.fullname,
      getSignupResponse.data.docData.username,
      getSignupResponse.data.docData.darkMode
    );

    await dispatch(getUserData());
    await dispatch(
      authenticate(
        getSignupResponse.data.localId,
        getSignupResponse.data.idToken
      )
    );
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    const loginForm = { email, password };

    let authenticated = false;
    let getLoginResponse: AuthenticationResponse;

    try {
      getLoginResponse = await axios.post(
        `https://us-central1-showcase-79c28.cloudfunctions.net/loginUser`,
        loginForm
      );
      authenticated = true;
    } catch (err) {
      return [authenticated, undefined];
    }

    const profilePictureBase64 = await getBase64FromUrl(
      getLoginResponse.data.docData.profilePictureUrl
    );

    await saveUserDocumentToStorage(
      getLoginResponse.data.docData.email,
      getLoginResponse.data.docData.profilePictureId,
      getLoginResponse.data.docData.profilePictureUrl,
      profilePictureBase64,
      getLoginResponse.data.docData.fullname,
      getLoginResponse.data.docData.username,
      getLoginResponse.data.docData.darkMode
    );
    await saveDataToStorage(
      getLoginResponse.data.localId,
      getLoginResponse.data.idToken
    );
    await dispatch(getUserData());
    await dispatch(
      await authenticate(
        getLoginResponse.data.localId,
        getLoginResponse.data.idToken
      )
    );
    return [authenticated, getLoginResponse.data.localId];
  };
};

export const logout = () => {
  AsyncStorage.removeItem("userLoginData");
  AsyncStorage.removeItem("userDocData");
  return { type: LOGOUT };
};

const saveDataToStorage = async (localId: string, token: string) => {
  await AsyncStorage.setItem(
    "userLoginData",
    JSON.stringify({ localId, token })
  );
};

const saveUserDocumentToStorage = async (
  ExhibitUId: string,
  email: string,
  profilePictureId: string,
  profilePictureUrl: string,
  profilePictureBase64: string,
  fullname: string,
  username: string
) => {
  await AsyncStorage.setItem(
    "userDocData",
    JSON.stringify({
      ExhibitUId,
      email,
      profilePictureId,
      profilePictureUrl,
      profilePictureBase64,
      fullname,
      username,
    })
  );
};

export const FORCE_SEARCH = "FORCE_SEARCH";
export const RESET_SCROLL = "RESET_SCROLL";
export const SHOWCASE_PROFILE = "SHOWCASE_PROFILE";
export const RETURN_FROM_SHOWCASING = "RETURN_FROM_SHOWCASING";
export const HIDE_PROFILE_FOOTER = "HIDE_PROFILE_FOOTER";
export const ON_SCREEN = "ON_SCREEN";
export const OFF_SCREEN = "OFF_SCREEN";

export const GET_SWITCHES = "GET_SWITCHES";
export const SET_DARKMODE = "SET_DARKMODE";
export const SHOW_CHEERING = "SHOW_CHEERING";
export const HIDE_FOLLOWING = "HIDE_FOLLOWING";
export const HIDE_FOLLOWERS = "HIDE_FOLLOWERS";
export const HIDE_EXHIBITS = "HIDE_EXHIBITS";

export const CHEER_POST = "CHEER_POST";
export const CHEER_UPDATE_POSTS = "CHEER_UPDATE_POSTS";
export const CHEER_OWN_FEED_POST = "CHEER_OWN_FEED_POST";
export const CHEER_OWN_PROFILE_POST = "CHEER_OWN_PROFILE_POST";
export const UNCHEER_POST = "UNCHEER_POST";
export const UNCHEER_UPDATE_POSTS = "UNCHEER_UPDATE_POSTS";
export const UNCHEER_OWN_FEED_POST = "UNCHEER_OWN_FEED_POST";
export const UNCHEER_OWN_PROFILE_POST = "UNCHEER_OWN_PROFILE_POST";

export const GET_USER_DATA = "GET_USER_DATA";
export const GET_USER_FEED = "GET_USER_FEED";
export const GET_UPDATES = "GET_UPDATES";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const REFRESH_PROFILE = "REFRESH_PROFILE";
export const REFRESH_NOTIFICATIONS = "REFRESH_NOTIFICATIONS";
export const UPDATE_USER_PROJECT = "UPDATE_USER_PROJECT";

export const CHANGE_PROFILE_PICTURE = "CHANGE_PROFILE_PICTURE";
export const CHANGE_PROFILE_COLUMNS = "CHANGE_PROFILE_COLUMNS";
export const CHANGE_PROJECT_PICTURE = "CHANGE_PROJECT_PICTURE";
export const CHANGE_PROJECT_COLUMNS = "CHANGE_PROJECT_COLUMNS";

export const REMOVE_USER_PROJECT = "REMOVE_USER_PROJECT";
export const REMOVE_USER_POST = "REMOVE_USER_POST";

export const ADD_TEMP_PROJECT_PICTURE = "ADD_TEMP_PROJECT_PICTURE";
export const ADD_TEMP_POST_PICTURE = "ADD_TEMP_POST_PICTURE";
export const ADD_USER_PROJECT = "ADD_USER_PROJECT";
export const ADD_USER_POST = "ADD_USER_POST";
export const UPDATE_ALL_POSTS = "UPDATE_ALL_POSTS";

export interface UserState {
  ExhibitUId: string;
  email: string;
  profilePictureId: string;
  profilePictureUrl: string;
  profilePictureBase64: string;
  fullname: string;
  username: string;
}
interface ActionGetUserData {
  type: typeof GET_USER_DATA;
  ExhibitUId: string;
  email: string;
  profilePictureId: string;
  profilePictureUrl: string;
  profilePictureBase64: string;
  fullname: string;
  username: string;
}
interface ActionGetSwitches {
  type: typeof GET_SWITCHES;
  darkMode: boolean;
  showCheering: boolean;
  hideFollowing: boolean;
  hideFollowers: boolean;
  hideExhibits: boolean;
}
interface ActionSetDarkMode {
  type: typeof SET_DARKMODE;
  darkMode: boolean;
}

export type Action =
  | ActionGetUserData
  | ActionGetSwitches
  | ActionSetDarkMode

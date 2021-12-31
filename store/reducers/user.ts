import {
  GET_USER_DATA,
  GET_SWITCHES,
  SET_DARKMODE,
  UserState,
  Action,
} from "../actions/user/types";

const intialState: UserState = {
  ExhibitUId: "",
  email: "",
  profilePictureId: "",
  profilePictureUrl: "",
  profilePictureBase64: "",
  fullname: "",
  username: "",
};

export default (state = intialState, action: Action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        ExhibitUId: action.ExhibitUId,
        email: action.email,
        profilePictureId: action.profilePictureId,
        profilePictureUrl: action.profilePictureUrl,
        profilePictureBase64: action.profilePictureBase64,
        fullname: action.fullname,
        username: action.username,
      };
    case GET_SWITCHES:
      return {
        ...state,
        darkMode: action.darkMode,
        showCheering: action.showCheering,
        hideFollowing: action.hideFollowing,
        hideFollowers: action.hideFollowers,
        hideExhibits: action.hideExhibits,
      };
    case SET_DARKMODE:
      return {
        ...state,
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};

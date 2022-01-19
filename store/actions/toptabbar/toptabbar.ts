import { SET_HIDE, SET_CURRENT_SCREEN } from "./types";

export const setHide = (
  cardScreenValue: boolean,
  messagingScreenValue: boolean,
  questionnaireScreenValue: boolean
) => {
  return async (dispatch) => {
    await dispatch({
      type: SET_HIDE,
      hideCardScreen: cardScreenValue,
      hideMessagingScreen: messagingScreenValue,
      hideQuestionnaireScreen: questionnaireScreenValue,
    });
  };
};

export const setCurrentScreen = (currentScreenValue: string) => {
  return async (dispatch) => {
    await dispatch({
      type: SET_CURRENT_SCREEN,
      currentScreen: currentScreenValue,
    });
  };
};

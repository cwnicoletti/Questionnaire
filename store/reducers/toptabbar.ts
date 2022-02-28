import {
  SET_HIDE,
  SET_CURRENT_SCREEN,
  ProgressState,
  Action,
} from '../actions/toptabbar/types';

const intialState: ProgressState = {
  currentScreen: '',
  hideCardScreen: false,
  hideMessagingScreen: false,
  hideQuestionnaireScreen: false,
};

export default (state = intialState, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_SCREEN:
      return {
        ...state,
        currentScreen: action.currentScreen,
      };
    case SET_HIDE:
      return {
        ...state,
        hideCardScreen: action.hideCardScreen,
        hideMessagingScreen: action.hideMessagingScreen,
        hideQuestionnaireScreen: action.hideQuestionnaireScreen,
      };
    default:
      return state;
  }
};

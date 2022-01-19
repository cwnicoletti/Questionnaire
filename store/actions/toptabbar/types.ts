export const SET_HIDE = "SET_HIDE";
export const SET_CURRENT_SCREEN = "SET_CURRENT_SCREEN";

export interface ProgressState {
  currentScreen: string;
  hideCardScreen: boolean;
  hideMessagingScreen: boolean;
  hideQuestionnaireScreen: boolean;
}

interface ActionSetHideScreen {
  type: typeof SET_HIDE;
  hideCardScreen: boolean;
  hideMessagingScreen: boolean;
  hideQuestionnaireScreen: boolean;
}

interface ActionSetCurrentScreen {
  type: typeof SET_CURRENT_SCREEN;
  currentScreen: string;
}

export type Action = ActionSetHideScreen | ActionSetCurrentScreen;

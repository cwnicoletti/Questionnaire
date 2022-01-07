import { SET_PROGRESS } from "./types";

export const setProgress = (value: number) => {
  return async (dispatch) => {
    await dispatch({ type: SET_PROGRESS, progress: value });
  };
};

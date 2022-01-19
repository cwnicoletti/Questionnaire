import {
  SET_PROGRESS,
  ProgressState,
  Action,
} from "../actions/progressbar/types";

const intialState: ProgressState = {
  progress: 0,
};

export default (state = intialState, action: Action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    default:
      return state;
  }
};

import {
  SIGNUP_EMAIL,
  SIGNUP_FULLNAME,
  SIGNUP_USERNAME,
  IS_USING_MAIN,
  SignUpState,
  Action,
} from '../actions/signup/types';

const intialState: SignUpState = {
  email: '',
  fullname: '',
  username: '',
  isUsingMain: false,
};

export default (state = intialState, action: Action) => {
  switch (action.type) {
    case SIGNUP_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SIGNUP_FULLNAME:
      return {
        ...state,
        fullname: action.fullname,
      };
    case SIGNUP_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case IS_USING_MAIN:
      return {
        ...state,
        isUsingMain: action.isUsingMain,
      };
    default:
      return state;
  }
};

export const INTROING = "INTROING";
export const SIGNUP_EMAIL = "SIGNUP_EMAIL";
export const SIGNUP_FULLNAME = "SIGNUP_FULLNAME";
export const SIGNUP_USERNAME = "SIGNUP_USERNAME";
export const IS_USING_MAIN = "IS_USING_MAIN";

export interface SignUpState {
  email: string;
  fullname: string;
  username: string;
  isUsingMain: boolean;
}

interface ActionSetEmail {
  type: typeof SIGNUP_EMAIL;
  email: string;
}

interface ActionSetFullname {
  type: typeof SIGNUP_FULLNAME;
  fullname: string;
}

interface ActionSetUsername {
  type: typeof SIGNUP_USERNAME;
  username: string;
}

interface ActionIsUsingMain {
  type: typeof IS_USING_MAIN;
  isUsingMain: boolean;
}

export type Action =
  | ActionSetEmail
  | ActionSetFullname
  | ActionSetUsername
  | ActionIsUsingMain;

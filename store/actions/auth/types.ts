export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

export interface AuthState {
  userId: string;
  token: string;
}

export interface AuthenticationResponse {
  data: {
    localId: string;
    idToken: string;
    docData: {
      ExhibitUId: string;
      email: string;
      profilePictureId: string;
      profilePictureUrl: string;
      profilePictureBase64: string;
      fullname: string;
      username: string;
      darkMode: boolean;
      notifications: object[];
    };
  };
}

interface ActionAuthenticate {
  type: typeof AUTHENTICATE;
  userId: string;
  token: string;
}
interface ActionLogout {
  type: typeof LOGOUT;
}

export type Action =
  | AuthState
  | AuthenticationResponse
  | ActionAuthenticate
  | ActionLogout;

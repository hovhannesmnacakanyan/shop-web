import { IAuthInitialState } from "@types";

export const initialAuthState = (): IAuthInitialState => {
  return {
    isAuth: false,
    currentUser: null,
  };
};

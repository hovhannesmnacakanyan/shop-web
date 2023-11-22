import { AUTH_URL } from "@constants";
import { ILoginBody, IRegistrationBody } from "@types";
import { errorHandler, removeStorageItem, setStorageItem } from "helpers";
import { HttpService } from "services";
import { AppDispatch } from "store";

import { globalSlice } from "../global";
import { authSlice } from "./authSlice";

const login = (body: ILoginBody, navigate: (url: string) => void) => {
  const { setIsLoading } = globalSlice.actions;
  const { setIsAuth } = authSlice.actions;

  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    try {
      const { data } = await HttpService({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body,
      });

      setStorageItem("ROLE", data.role);
      setStorageItem("accessToken", data.token);
      dispatch(setIsAuth(true));
      navigate(`/${data.role}`);
    } catch (error: any) {
      errorHandler(error, dispatch);
    }

    dispatch(setIsLoading(false));
  };
};

const register = (body: IRegistrationBody, navigate: (url: string) => void) => {
  const { setIsLoading } = globalSlice.actions;

  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    try {
      await HttpService({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body,
      });

      navigate("/");
    } catch (error: any) {
      errorHandler(error, dispatch);
    }

    dispatch(setIsLoading(false));
  };
};

const logout = () => (dispatch: AppDispatch) => {
  const { setIsAuth, setCurrentUser } = authSlice.actions;

  dispatch(setCurrentUser(null));
  dispatch(setIsAuth(false));
  removeStorageItem("accessToken");
  removeStorageItem("ROLE");
  window.location.replace("/");
};

export const authOp = {
  login,
  logout,
  register,
};

import { AUTH_URL } from "@constants";
import { ILoginBody, IRegistrationRequestBody } from "@types";
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
        url: `${AUTH_URL}/Login`,
        method: "POST",
        body,
      });

      setStorageItem("ROLE", data.role);
      setStorageItem("accessToken", data.jwtToken);
      dispatch(setIsAuth(true));
      navigate(`/${data.role}`);
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

const registrationRequest = (body: IRegistrationRequestBody) => {
  const { setIsLoading, setSnackbar } = globalSlice.actions;

  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    try {
      await HttpService({
        url: `${AUTH_URL}/RegisterPartner`,
        method: "POST",
        body,
      });

      dispatch(
        setSnackbar({
          open: true,
          title: "registration.request",
          message: "registration.request.has.been.sent",
          variant: "success",
        })
      );
    } catch (error: any) {
      errorHandler(error, dispatch);
    }

    dispatch(setIsLoading(false));
  };
};

export const authOp = {
  login,
  logout,
  registrationRequest,
};

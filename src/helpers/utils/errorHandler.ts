import { AppDispatch } from "store";
import { authOp } from "store/auth";
import { globalOp, globalSlice } from "store/global";

export const errorHandler = (error: any, dispatch: AppDispatch) => {
  const { status, message } = error;
  const { setIsError } = globalSlice.actions;

  if (status === 404 || status === 422) {
    return dispatch(setIsError(true));
  }

  if (status === 401) {
    dispatch(setIsError(true));
    return dispatch(authOp.logout());
  }

  dispatch(globalOp.handleOpenSnackbar({ open: true, message, variant: "error" }));
  return dispatch(setIsError(true));
};

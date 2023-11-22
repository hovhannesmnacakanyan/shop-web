import { ORDERS_URL } from "@constants";
import { errorHandler } from "helpers";
import { HttpService } from "services";

import { globalSlice } from "../global";
import { AppDispatch } from "../index";
import { ordersSlice } from "./ordersSlice";
import { IOrderBody } from "@types";

const getOrders = (username = "") => {
  const { setIsSuccess, setIsError, setIsLoading } = globalSlice.actions;
  const { setOrders } = ordersSlice.actions;

  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    const params = username ? `?username=${username}` : "";

    try {
      const url = `${ORDERS_URL}${params}`;

      const { data } = await HttpService({
        url,
      });

      dispatch(setIsSuccess(true));
      dispatch(setIsError(false));
      dispatch(setOrders(data));
    } catch (error: any) {
      errorHandler(error, dispatch);
    }

    dispatch(setIsLoading(false));
  };
};

const createOrder = (body: IOrderBody) => {
  const { setIsSuccess, setIsError, setIsLoading } = globalSlice.actions;

  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    try {
      const url = `${ORDERS_URL}`;

      await HttpService({
        url,
        method: "POST",
        body,
      });

      dispatch(setIsSuccess(true));
      dispatch(setIsError(false));
    } catch (error: any) {
      errorHandler(error, dispatch);
    }

    dispatch(setIsLoading(false));
  };
};

export const ordersOp = {
  getOrders,
  createOrder,
};

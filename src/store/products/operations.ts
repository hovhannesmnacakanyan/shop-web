import { PRODUCTS_URL } from "@constants";
import { errorHandler } from "helpers";
import { HttpService } from "services";

import { globalSlice } from "../global";
import { AppDispatch } from "../index";
import { productsSlice } from "./productsSlice";
import { ICreateProductBody } from "@types";

const getProducts = (name = "") => {
  const { setIsSuccess, setIsError, setIsLoading } = globalSlice.actions;
  const { setProducts } = productsSlice.actions;

  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    const params = name ? `?name=${name}` : "";

    try {
      const url = `${PRODUCTS_URL}${params}`;

      const { data } = await HttpService({
        url,
      });

      dispatch(setIsSuccess(true));
      dispatch(setIsError(false));
      dispatch(setProducts(data));
    } catch (error: any) {
      errorHandler(error, dispatch);
    }

    dispatch(setIsLoading(false));
  };
};

const createProduct = (body: ICreateProductBody) => {
  const { setIsSuccess, setIsError, setIsLoading } = globalSlice.actions;

  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    try {
      const url = `${PRODUCTS_URL}`;

      await HttpService({
        url,
        method: "POST",
        body,
      });

      dispatch(setIsSuccess(true));
      dispatch(setIsError(false));
      dispatch(getProducts());
    } catch (error: any) {
      errorHandler(error, dispatch);
    }

    dispatch(setIsLoading(false));
  };
};

export const productsOp = {
  getProducts,
  createProduct,
};

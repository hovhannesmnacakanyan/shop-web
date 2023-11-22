import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsInitialState, IProduct } from "@types";

import { initialProducts } from "./initialState";

export const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts(),
  reducers: {
    setProducts(
      state: IProductsInitialState,
      action: PayloadAction<IProduct[]>
    ) {
      state.productsList = action.payload;
    },
  },
});

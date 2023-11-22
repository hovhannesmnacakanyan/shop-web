import { combineReducers } from "@reduxjs/toolkit";

import { authSlice } from "./auth";
import { globalSlice } from "./global";
import { ordersSlice } from "./orders";
import { productsSlice } from "./products";

export const reducers = () =>
  combineReducers({
    global: globalSlice.reducer,
    auth: authSlice.reducer,
    orders: ordersSlice.reducer,
    products: productsSlice.reducer,
  });

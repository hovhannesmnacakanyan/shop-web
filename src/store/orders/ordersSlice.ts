import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrdersInitialState, IOrder } from "@types";

import { initialOrders } from "./initialState";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initialOrders(),
  reducers: {
    setOrders(state: IOrdersInitialState, action: PayloadAction<IOrder[]>) {
      state.ordersList = action.payload;
    },
  },
});

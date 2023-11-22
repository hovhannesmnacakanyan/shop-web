import { IOrdersInitialState } from "@types";
import { createSelector } from "reselect";
import { RootState } from "store";

const ordersSelector = (state: RootState) => state.orders;

const ordersListSelector = createSelector(
  [ordersSelector],
  (orders: IOrdersInitialState) => orders.ordersList
);

export const ordersSel = {
  ordersSelector,
  ordersListSelector,
};

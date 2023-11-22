import { IProductsInitialState } from "@types";
import { createSelector } from "reselect";
import { RootState } from "store";

const productsSelector = (state: RootState) => state.products;

const productsListSelector = createSelector(
  [productsSelector],
  (products: IProductsInitialState) => products.productsList
);

export const productsSel = {
  productsSelector,
  productsListSelector,
};

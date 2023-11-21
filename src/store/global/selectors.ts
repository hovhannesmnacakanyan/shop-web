import { IGlobalInitialState } from "@types";
import { createSelector } from "reselect";
import { RootState } from "store";

const globalSelector = (state: RootState) => state.global;

const isErrorSelector = createSelector(
  [globalSelector],
  (global: IGlobalInitialState) => global.isError
);

const isSuccessSelector = createSelector(
  [globalSelector],
  (global: IGlobalInitialState) => global.isSuccess
);

const snackbarSelector = createSelector(
  [globalSelector],
  (global: IGlobalInitialState) => global.snackbar
);

const isLoadingSelector = createSelector(
  [globalSelector],
  (global: IGlobalInitialState) => global.isLoading
);

const confirmModalSelector = createSelector(
  [globalSelector],
  (global: IGlobalInitialState) => global.confirmModal
);

export const globalSel = {
  globalSelector,
  snackbarSelector,
  isLoadingSelector,
  isErrorSelector,
  isSuccessSelector,
  confirmModalSelector,
};

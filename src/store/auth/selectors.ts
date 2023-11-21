import { IAuthInitialState } from "@types";
import { createSelector } from "reselect";
import { RootState } from "store";

const authSelector = (state: RootState) => state.auth;

const isAuthSelector = createSelector([authSelector], (auth: IAuthInitialState) => auth.isAuth);

const currentUserSelector = createSelector(
  [authSelector],
  (auth: IAuthInitialState) => auth.currentUser
);

export const authSel = {
  authSelector,
  isAuthSelector,
  currentUserSelector,
};

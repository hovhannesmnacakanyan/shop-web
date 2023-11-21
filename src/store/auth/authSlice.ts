import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthInitialState } from "@types";

import { initialAuthState } from "./initialState";

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState(),
  reducers: {
    setIsAuth(state: IAuthInitialState, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },

    setCurrentUser(
      state: IAuthInitialState,
      action: PayloadAction<any | null>
    ) {
      state.currentUser = action.payload;
    },
  },
});

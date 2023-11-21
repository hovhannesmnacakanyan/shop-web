import { combineReducers } from "@reduxjs/toolkit";

import { authSlice } from "./auth";
import { globalSlice } from "./global";

export const reducers = () =>
  combineReducers({
    global: globalSlice.reducer,
    auth: authSlice.reducer,
  });

import { configureStore, Middleware } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";

import { reducers } from "./reducers";

const middleware = [ReduxThunk] as Array<Middleware>;

const store = configureStore({
  reducer: reducers(),
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | any;
export default store;

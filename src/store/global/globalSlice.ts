import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConfirmModal, IGlobalInitialState, ISnackbar } from "@types";

import { initialGlobalState } from "./initialState";

export const globalSlice = createSlice({
  name: "global",
  initialState: initialGlobalState(),
  reducers: {
    setIsLoading(state: IGlobalInitialState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    setIsError(state: IGlobalInitialState, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },

    setIsSuccess(state: IGlobalInitialState, action: PayloadAction<boolean>) {
      state.isSuccess = action.payload;
    },

    setSnackbar(state: IGlobalInitialState, action: PayloadAction<ISnackbar>) {
      state.snackbar = action.payload;
    },

    setConfirmModal(
      state: IGlobalInitialState,
      action: PayloadAction<IConfirmModal>
    ) {
      state.confirmModal = action.payload;
    },
  },
});

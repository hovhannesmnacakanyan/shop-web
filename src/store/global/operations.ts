import { IConfirmModal, ISnackbar } from "@types";
import { AppDispatch } from "store";

import { globalSlice } from "./globalSlice";

const handleOpenSnackbar = (data: ISnackbar) => (dispatch: AppDispatch) => {
  const { setSnackbar } = globalSlice.actions;

  dispatch(setSnackbar(data));
};

const handleCloseSnackbar = () => (dispatch: AppDispatch) => {
  const { setSnackbar } = globalSlice.actions;

  dispatch(
    setSnackbar({
      open: false,
      message: "",
    })
  );
};

const handleOpenConfirmModal =
  (data: IConfirmModal) => (dispatch: AppDispatch) => {
    const { setConfirmModal } = globalSlice.actions;

    dispatch(setConfirmModal(data));
  };

const handleCloseConfirmModal = () => (dispatch: AppDispatch) => {
  const { setConfirmModal } = globalSlice.actions;

  dispatch(
    setConfirmModal({
      open: false,
      title: "",
      subtitle: "",
      closeButtonText: "",
      confirmButtonText: "",
    })
  );
};

export const globalOp = {
  handleCloseSnackbar,
  handleOpenSnackbar,
  handleOpenConfirmModal,
  handleCloseConfirmModal,
};

import React from "react";
import { useTranslation } from "react-i18next";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks";
import { globalOp, globalSel } from "store/global";
import { Button, Typography } from "ui-kit";

import { Wrapper } from "./styles";

export const ConfirmationModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    open,
    title,
    subtitle,
    closeButtonText = "cancel",
    confirmButtonText,
    onConfirm = () => null,
  } = useAppSelector(globalSel.confirmModalSelector);

  const handleConfirm = () => {
    onConfirm();
    dispatch(globalOp.handleCloseConfirmModal());
  };
  const handleClose = () => dispatch(globalOp.handleCloseConfirmModal());

  return (
    <Wrapper open={open} onClose={handleClose} maxWidth="xs">
      <DialogTitle variant="h6" component="h6">
        {t(title)}
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">{t(subtitle)}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          {t(closeButtonText)}
        </Button>
        <Button variant="contained" onClick={handleConfirm}>
          {t(confirmButtonText)}
        </Button>
      </DialogActions>
    </Wrapper>
  );
};

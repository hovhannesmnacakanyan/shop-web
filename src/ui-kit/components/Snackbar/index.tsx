import * as React from "react";
import { useTranslation } from "react-i18next";
import { Alert, AlertTitle } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks";
import { globalOp, globalSel } from "store/global";

import { Wrapper } from "./styles";

export const Snackbar = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { open, title, variant, fullName, message } = useAppSelector(globalSel.snackbarSelector);

  const handleClose = () => dispatch(globalOp.handleCloseSnackbar());

  return (
    <Wrapper
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={4000}
    >
      <Alert variant="filled" severity={variant} onClose={handleClose} sx={{ width: "100%" }}>
        {title ? <AlertTitle>{t(title)}</AlertTitle> : null}
        {fullName ? `"${fullName}" ${t(message as string)}` : t(message as string)}
      </Alert>
    </Wrapper>
  );
};

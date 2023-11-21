import React from "react";
import { AlertColor } from "@mui/material";

export interface IReactChildren {
  children: React.ReactNode;
}

export interface IGlobalInitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  confirmModal: IConfirmModal;
  snackbar: ISnackbar;
}

export interface IConfirmModal {
  open: boolean;
  title: string;
  subtitle: string;
  closeButtonText?: string;
  confirmButtonText: string;
  onConfirm?: () => void;
}

export interface ISnackbar {
  open?: boolean;
  variant?: AlertColor;
  message?: string;
  title?: string;
  fullName?: string;
}

export interface IParams {
  page?: number;
  limit?: number;
}

import { IGlobalInitialState } from "@types";

export const initialGlobalState = (): IGlobalInitialState => {
  return {
    snackbar: {
      open: false,
      message: "",
    },
    confirmModal: {
      open: false,
      title: "",
      subtitle: "",
      closeButtonText: "",
      confirmButtonText: "",
    },
    isLoading: false,
    isError: false,
    isSuccess: false,
  };
};

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppSelector } from "hooks";
import { Snackbar } from "ui-kit";

import { ConfirmationModal } from "components";

import i18n from "./i18n";
import { MainRouter } from "./router";
import { globalSel } from "./store/global";

const App = () => {
  const { open: isSnackbarOpen } = useAppSelector(globalSel.snackbarSelector);
  const { open: isConfirmModalOpen } = useAppSelector(
    globalSel.confirmModalSelector
  );

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng");
    i18n.changeLanguage(lang || "en");
  }, []);

  return (
    <BrowserRouter>
      <MainRouter />
      {isSnackbarOpen ? <Snackbar /> : null}
      {isConfirmModalOpen ? <ConfirmationModal /> : null}
    </BrowserRouter>
  );
};

export default App;

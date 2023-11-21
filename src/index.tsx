import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { MuiTheme, MyGlobalStyles } from "ui-kit";

import App from "./App";
import store from "./store";

import "./i18n";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={MuiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
    <MyGlobalStyles />
  </ThemeProvider>
);

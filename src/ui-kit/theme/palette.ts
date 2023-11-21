import { alpha } from "@mui/material/styles";

export type IPalette = {
  [key: string]: {
    [key: string]: string;
  };
};

export const palette = {
  primary: {
    main: "#AA5157",
    dark: "#A9393D",
    light: "#A9676E",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#51898E",
    dark: "#5A6E72",
    light: "#5DA1A5",
    contrastText: "#FFFFFF",
  },
  error: {
    main: "#E5324B",
    dark: "#CC1A33",
    light: "#EA586C",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#FBC815",
    dark: "#D3A403",
    light: "#FFD54F",
    contrastText: "#FFFFFF",
  },
  info: {
    main: "#374A5C",
    dark: "#01579B",
    light: "#4A647C",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#679436",
    dark: "#5E8731",
    light: "#7AB040",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#FAFAFA",
    paper: "#FFFFFF",
    table1: "#EEF1F1",
    table2: "#DDE3E4",
  },
  text: {
    primary: alpha("#000000", 0.87),
    secondary: alpha("#000000", 0.6),
    disabled: alpha("#000000", 0.38),
  },
};

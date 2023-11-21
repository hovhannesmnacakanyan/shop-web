import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import typography from "./typography";

export const MuiTheme = createTheme({
  spacing: 4,
  palette,
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: "'Eudoxus Sans', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
    ...typography,
  },
});

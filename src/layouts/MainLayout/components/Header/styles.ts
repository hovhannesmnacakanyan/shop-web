import { styled } from "@mui/material";
import { FLEX_ROW_JUSTIFY_END } from "ui-kit";

export const Wrapper = styled("header")`
  ${FLEX_ROW_JUSTIFY_END};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
`;

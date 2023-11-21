import { styled } from "@mui/material";
import { FLEX_COLUMN_FULL } from "ui-kit";

export const Wrapper = styled("div")`
  ${FLEX_COLUMN_FULL};
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
`;

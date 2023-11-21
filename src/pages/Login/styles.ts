import { styled } from "@mui/material";
import { FLEX_COLUMN_FULL } from "ui-kit";

export const Wrapper = styled("div")`
  width: 100%;
  ${FLEX_COLUMN_FULL};
  gap: ${({ theme }) => theme.spacing(4)};

  .form-section {
    ${FLEX_COLUMN_FULL};
    gap: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

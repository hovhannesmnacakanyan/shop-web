import { alertClasses, Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Snackbar)`
  .${alertClasses.root} {
    max-width: 320px;
    border-radius: 0;
    padding: ${({ theme }) => theme.spacing(3, 4)};
  }

  .${alertClasses.message} {
    font-weight: 400;
  }
`;

import {
  Dialog,
  dialogActionsClasses,
  dialogClasses,
  dialogContentClasses,
  dialogTitleClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Dialog)`
  .${dialogClasses.paper} {
    max-width: 444px;
    border-radius: 0;
    box-shadow: ${({ theme }) => theme.shadows[7]};
  }

  .${dialogTitleClasses.root} {
    padding-bottom: ${({ theme }) => theme.spacing(6)};
  }

  .${dialogContentClasses.root} {
    padding-left: ${({ theme }) => theme.spacing(6)};
    padding-right: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
  }

  .${dialogActionsClasses.root} {
    padding: ${({ theme }) => theme.spacing(0, 4, 4)};

    & > :not(:first-of-type) {
      margin-left: ${({ theme }) => theme.spacing(4)};
    }
  }

  backdrop-filter: blur(8px);
`;

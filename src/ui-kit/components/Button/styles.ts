import { Button, buttonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Button)`
  &.${buttonClasses.root} {
    border-radius: 0;
    text-transform: unset;
  }
`;

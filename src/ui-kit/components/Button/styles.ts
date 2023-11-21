import { Button, buttonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Button)`
  &.${buttonClasses.root} {
    text-transform: unset;
  }
`;

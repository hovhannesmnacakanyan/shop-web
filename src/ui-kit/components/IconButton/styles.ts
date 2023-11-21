import { IconButton, iconButtonClasses } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const Wrapper = styled(IconButton)`
  &.${iconButtonClasses.root} {
    color: ${({ theme }) => alpha(theme.palette.primary.light, 0.5)};
  }
`;

import React from "react";
import { ButtonProps as MuiButtonProps, CircularProgress } from "@mui/material";

import { Wrapper } from "./styles";

const LOADER_SIZE = 24;
const LARGE_LOADER_SIZE = 26;

interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { isLoading, children, ...rest } = props;

  const loaderSize = rest.size === "large" ? LARGE_LOADER_SIZE : LOADER_SIZE;

  return (
    <Wrapper {...rest} disableElevation>
      {isLoading ? <CircularProgress color="inherit" size={loaderSize} /> : children}
    </Wrapper>
  );
};

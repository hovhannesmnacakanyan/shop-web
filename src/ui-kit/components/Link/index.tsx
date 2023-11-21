import React from "react";
import { LinkProps } from "@mui/material";

import { Wrapper } from "./styles";

export const Link = (props: LinkProps) => {
  return <Wrapper {...props} underline="hover" />;
};

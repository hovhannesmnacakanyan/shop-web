import React, { useMemo, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { TextFieldProps } from "formik-mui";

import { Wrapper } from "./styles";

export const Input = (props: TextFieldProps) => {
  const { className, type, ...rest } = props;

  const [hidePassword, setHidePassword] = useState(true);

  const handleClickShowPassword = () => {
    setHidePassword((prevState) => !prevState);
  };

  const EndAdornment = useMemo(() => {
    if (rest.InputProps && rest.InputProps.endAdornment) {
      return rest.InputProps.endAdornment;
    }

    return type === "password" ? (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={(event) => event.preventDefault()}
          onMouseUp={(event) => event.preventDefault()}
          edge="end"
        >
          {hidePassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ) : null;
  }, [rest.InputProps, type, hidePassword]);

  return (
    <Wrapper
      {...rest}
      className={className}
      variant="outlined"
      type={hidePassword && type === "password" ? "password" : "text"}
      InputProps={{
        endAdornment: EndAdornment,
      }}
    />
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "ui-kit";
import { Wrapper } from "./styles";
import { useAppDispatch } from "hooks";
import { authOp } from "store/auth";

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authOp.logout());
  };

  return (
    <Wrapper>
      <Button variant="contained" onClick={handleLogout}>
        {t("logout")}
      </Button>
    </Wrapper>
  );
};

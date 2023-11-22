import React, { Suspense } from "react";
import { IReactChildren } from "@types";

import { Wrapper } from "./styles";
import { Header } from "./components";
import { useLocation } from "react-router-dom";

export const MainLayout = ({ children }: IReactChildren) => {
  const location = useLocation();

  const showLogout =
    location.pathname === "/" || location.pathname === "/registration";

  return (
    <Wrapper>
      {!showLogout ? <Header /> : null}
      <Suspense fallback={<div>Loading ...</div>}>{children}</Suspense>
    </Wrapper>
  );
};

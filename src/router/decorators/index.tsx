import React from "react";
import { Outlet } from "react-router-dom";

import { MainLayout } from "layouts";

export const RoutesDecorator = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

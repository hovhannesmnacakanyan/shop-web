import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES, RoutesDecorator } from "./index";

export const MainRouter = () => {
  return (
    <Routes>
      <Route element={<RoutesDecorator />}>
        {ROUTES.map(({ path, Element }) => {
          return <Route key={path} path={path} element={<Element />} />;
        })}
      </Route>
    </Routes>
  );
};

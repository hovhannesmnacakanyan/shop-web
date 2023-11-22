import React from "react";
import { EnumRole } from "@types";

import { User, Login, Admin, Registration } from "pages";
import { PATHS } from "./paths";

export interface IRoute {
  path: string;
  Element: React.ElementType;
}

const NotFound = () => <div>Not found</div>;

export const LOGIN_USERS_ROUTES = (): IRoute[] => {
  return [
    {
      path: `/${EnumRole.ADMIN}`,
      Element: Admin,
    },
    { path: `/${EnumRole.USER}`, Element: User },
    { path: `/${PATHS.REGISTRATION}`, Element: Registration },
  ];
};

export const ROUTES: IRoute[] = [
  {
    path: "/",
    Element: Login,
  },
  ...LOGIN_USERS_ROUTES(),
  {
    path: "*",
    Element: NotFound,
  },
];

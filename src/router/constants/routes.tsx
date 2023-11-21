import React from "react";
import { EnumRole } from "@types";

import { Users, Login, Admin } from "pages";

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
    { path: `/${EnumRole.USERS}`, Element: Users },
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

import { lazy } from "react";

const Login = lazy(() => import("./Login"));
const Admin = lazy(() => import("./Admin"));
const Users = lazy(() => import("./Users"));

export { Users, Login, Admin };

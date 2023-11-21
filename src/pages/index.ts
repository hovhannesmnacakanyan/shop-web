import { lazy } from "react";

const Login = lazy(() => import("./Login"));
const Admin = lazy(() => import("./Admin"));
const User = lazy(() => import("./User"));
const Registration = lazy(() => import("./Registration"));

export { User, Login, Admin, Registration };

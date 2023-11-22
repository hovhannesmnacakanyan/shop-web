import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "hooks";
import { authOp } from "store/auth";
import { globalSel, globalSlice } from "store/global";
import { Button, Input, Typography } from "ui-kit";

import { Wrapper } from "./styles";
import { PATHS } from "router";
import { getStorageItem } from "helpers";

interface ILoginValues {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const role = getStorageItem("ROLE");
  const accessToken = getStorageItem("accessToken");

  const initialValues: ILoginValues = {
    username: "",
    password: "",
  };

  const [validateOnChange, setValidateOnChange] = useState(false);

  const isLoading = useAppSelector(globalSel.isLoadingSelector);
  const isError = useAppSelector(globalSel.isErrorSelector);

  const handleValidate = ({ username, password }: ILoginValues) => {
    const errors: Partial<ILoginValues> = {};

    if (!username) {
      errors.username = t("required");
    }

    if (!password) {
      errors.password = t("required");
    }

    setValidateOnChange(true);
    return errors;
  };

  const handleSubmit = (values: ILoginValues) => {
    const { username, password } = values;

    dispatch(authOp.login({ password, username }, navigate));
  };

  useEffect(() => {
    dispatch(globalSlice.actions.setIsLoading(false));
    dispatch(globalSlice.actions.setIsError(false));
  }, [dispatch]);

  useEffect(() => {
    if (role && accessToken) {
      navigate(`${role}`);
    }
  }, [accessToken, navigate, role]);

  return (
    <Wrapper>
      <Typography variant="h6">{t("login")}</Typography>
      <Formik
        initialValues={initialValues}
        validateOnChange={validateOnChange}
        validate={handleValidate}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ submitForm, errors, touched }) => {
          return (
            <Form>
              <div className="form-section">
                <Field
                  component={Input}
                  label={t("username")}
                  name="username"
                  error={isError || (!!errors.username && touched.username)}
                  disabled={isLoading}
                  fullWidth
                />
                <Field
                  component={Input}
                  type="password"
                  label={t("password")}
                  name="password"
                  error={isError || (!!errors.password && touched.password)}
                  helperText={isError && t("unauthorized")}
                  disabled={isLoading}
                  fullWidth
                />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    submitForm();
                  }}
                  isLoading={isLoading}
                >
                  {t("login")}
                </Button>
                {t("or")}
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    navigate(`${PATHS.REGISTRATION}`);
                  }}
                  isLoading={isLoading}
                >
                  {t("register")}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default Login;

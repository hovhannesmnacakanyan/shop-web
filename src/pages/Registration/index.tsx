import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validatePassword } from "helpers";
import { useAppDispatch, useAppSelector } from "hooks";
import { authOp } from "store/auth";
import { globalSel, globalSlice } from "store/global";
import { Button, Input, Typography } from "ui-kit";

import { Wrapper } from "./styles";

interface IRegistrationValues {
  username: string;
  password: string;
  confirmPassword: string;
}

const Registration = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const initialValues: IRegistrationValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [validateOnChange, setValidateOnChange] = useState(false);

  const isLoading = useAppSelector(globalSel.isLoadingSelector);

  const handleValidate = ({
    username,
    password,
    confirmPassword,
  }: IRegistrationValues) => {
    const errors: Partial<IRegistrationValues> = {};
    const isValidPassword = validatePassword(password);

    if (!username) {
      errors.username = t("required");
    }

    if (!password) {
      errors.password = t("required");
    }

    if (!confirmPassword) {
      errors.confirmPassword = t("required");
    }

    if (!isValidPassword && password !== "") {
      errors.password = t("password.format");
      return errors;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = t("password.not.match");
      return errors;
    }

    setValidateOnChange(true);
    return errors;
  };

  const handleSubmit = (values: IRegistrationValues) => {
    const { username, password } = values;

    dispatch(authOp.register({ password, username }, navigate));
  };

  useEffect(() => {
    dispatch(globalSlice.actions.setIsLoading(false));
    dispatch(globalSlice.actions.setIsError(false));
  }, [dispatch]);

  return (
    <Wrapper>
      <Typography variant="h6">{t("registration")}</Typography>
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
                  error={!!errors.username && touched.username}
                  disabled={isLoading}
                  fullWidth
                />
                <Field
                  component={Input}
                  type="password"
                  label={t("password")}
                  name="password"
                  error={!!errors.password && touched.password}
                  disabled={isLoading}
                  fullWidth
                />
                <Field
                  component={Input}
                  type="password"
                  label={t("confirm.password")}
                  name="confirmPassword"
                  error={!!errors.confirmPassword && touched.confirmPassword}
                  helperText={
                    touched.confirmPassword &&
                    !!errors.confirmPassword &&
                    t("password.not.match")
                  }
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

export default Registration;

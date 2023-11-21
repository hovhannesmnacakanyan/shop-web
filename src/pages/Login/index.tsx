import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validateEmail } from "helpers";
import { useAppDispatch, useAppSelector } from "hooks";
import { authOp } from "store/auth";
import { globalSel, globalSlice } from "store/global";
import { Button, Input, Typography } from "ui-kit";

import { Wrapper } from "./styles";

interface ILoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  const [validateOnChange, setValidateOnChange] = useState(false);

  const isLoading = useAppSelector(globalSel.isLoadingSelector);
  const isError = useAppSelector(globalSel.isErrorSelector);

  const handleValidate = ({ email, password }: ILoginValues) => {
    const errors: Partial<ILoginValues> = {};
    const isValidEmail = validateEmail(email);

    if (!email) {
      errors.email = t("required");
    }

    if (!password) {
      errors.password = t("required");
    }

    if (!isValidEmail && email !== "") {
      errors.email = t("wrong.email.format");
    }

    setValidateOnChange(true);
    return errors;
  };

  const handleSubmit = (values: ILoginValues) => {
    const { email, password } = values;

    dispatch(authOp.login({ password, username: email }, navigate));
  };

  useEffect(() => {
    dispatch(globalSlice.actions.setIsLoading(false));
    dispatch(globalSlice.actions.setIsError(false));
  }, [dispatch]);

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
                  type="email"
                  label={t("email.address")}
                  name="email"
                  error={isError || (!!errors.email && touched.email)}
                  helperText={
                    touched.email && errors.email && t("wrong.email.format")
                  }
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
              </div>
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
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default Login;

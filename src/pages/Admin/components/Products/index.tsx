import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "hooks";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { globalSel } from "store/global";
import { productsOp, productsSel } from "store/products";
import { Button, Input, Typography } from "ui-kit";

interface IProductValues {
  name: string;
  price: string;
}

export const Products = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSel.productsListSelector);

  const [productName, setProductName] = useState("");

  const handleSearch = () => {
    if (!productName.trim()) {
      setProductName("");
      return;
    }

    dispatch(productsOp.getProducts(productName));
  };

  const initialValues: IProductValues = {
    name: "",
    price: "",
  };

  const [validateOnChange, setValidateOnChange] = useState(false);

  const isLoading = useAppSelector(globalSel.isLoadingSelector);
  const isError = useAppSelector(globalSel.isErrorSelector);

  const handleValidate = ({ name, price }: IProductValues) => {
    const errors: Partial<IProductValues> = {};

    if (!name) {
      errors.name = t("required");
    }

    if (!price) {
      errors.price = t("required");
    }

    if (!+price) {
      errors.price = t("price.must.be.number");
    }

    setValidateOnChange(true);
    return errors;
  };

  const handleSubmit = (values: IProductValues) => {
    const { name, price } = values;

    dispatch(productsOp.createProduct({ name, price: +price }));
  };

  useEffect(() => {
    dispatch(productsOp.getProducts());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4" mb={4} mt={4}>
        {t("products")}
      </Typography>
      <Box display="flex" mb={4} gap={4}>
        <TextField
          label={t("search.by.name")}
          placeholder={t("product.name")}
          onChange={(event) => setProductName(event.target.value)}
          size="small"
          value={productName}
        />
        <Button variant="outlined" onClick={handleSearch} size="small">
          {t("search")}
        </Button>
      </Box>
      <Formik
        initialValues={initialValues}
        validateOnChange={validateOnChange}
        validate={handleValidate}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ submitForm, errors, touched, resetForm }) => {
          return (
            <Form>
              <Box
                display="flex"
                width={850}
                gap={4}
                mb={4}
                alignItems="center"
              >
                <Field
                  component={Input}
                  label={t("product.name")}
                  name="name"
                  error={isError || (!!errors.name && touched.name)}
                  helperText={isError && t("product.already.exist")}
                  disabled={isLoading}
                  fullWidth
                />
                <Field
                  component={Input}
                  type="number"
                  label={t("product.price")}
                  name="price"
                  error={isError || (!!errors.price && touched.price)}
                  disabled={isLoading}
                  fullWidth
                />
                <Button
                  variant="contained"
                  sx={{ minWidth: 150 }}
                  onClick={() => {
                    submitForm();
                    resetForm();
                  }}
                  isLoading={isLoading}
                >
                  {t("create")}
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{t("product.name")}</TableCell>
              <TableCell>{t("product.price")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => {
              return (
                <TableRow
                  key={product._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

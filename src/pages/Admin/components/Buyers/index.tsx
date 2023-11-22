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
import { dateConvert } from "helpers";
import { useAppDispatch, useAppSelector } from "hooks";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ordersOp, ordersSel } from "store/orders";
import { Button, Typography } from "ui-kit";

export const Buyers = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const orders = useAppSelector(ordersSel.ordersListSelector);

  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (!username.trim()) {
      setUsername("");
      return;
    }

    dispatch(ordersOp.getOrders(username));
  };

  useEffect(() => {
    dispatch(ordersOp.getOrders());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4" mb={4}>
        {t("buyers.history")}
      </Typography>
      <Box display="flex" mb={4} gap={4}>
        <TextField
          label={t("search.by.name")}
          placeholder={t("username")}
          onChange={(event) => setUsername(event.target.value)}
          size="small"
          value={username}
        />
        <Button variant="outlined" onClick={handleSearch} size="small">
          {t("search")}
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{t("username")}</TableCell>
              <TableCell>{t("products")}</TableCell>
              <TableCell>{t("total.amount")} $</TableCell>
              <TableCell>{t("date")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => {
              const products: string[] = [];
              order.products.forEach((product) => products.push(product.name));

              return (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{order.user.username}</TableCell>
                  <TableCell>{products.join(", ")}</TableCell>
                  <TableCell>{order.totalPrice}</TableCell>
                  <TableCell>{dateConvert(order.createdAt)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

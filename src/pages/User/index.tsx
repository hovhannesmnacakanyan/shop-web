import React, { useEffect, useState } from "react";
import { Column } from "./components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { IProduct } from "@types";
import styled from "styled-components";
import { Button, Typography } from "ui-kit";
import { Wrapper } from "./styles";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks";
import { productsOp, productsSel } from "store/products";
import { ordersOp } from "store/orders";

export interface IColumn {
  id: string;
  list: IProduct[];
}

const StyledColumns = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const User = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSel.productsListSelector);

  const initialColumns: { [key: string]: IColumn } = {
    products: {
      id: "products",
      list: [],
    },
    cart: {
      id: "cart",
      list: [],
    },
  };

  const [columns, setColumns] = useState(initialColumns);
  const [total, setTotal] = useState(0);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return null;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    if (start === end) {
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      newList.splice(destination.index, 0, start.list[source.index]);

      const newCol = {
        id: start.id,
        list: newList,
      };

      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      const newEndList = end.list;

      newEndList.splice(destination.index, 0, start.list[source.index]);

      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  const handleBuy = () => {
    const products = columns.cart.list.map((product) => {
      return { productId: product._id, quantity: 1 };
    });

    dispatch(ordersOp.createOrder({ products }));
  };

  useEffect(() => {
    setColumns((prev) => ({
      ...prev,
      products: { ...prev.products, list: products },
    }));
  }, [products]);

  useEffect(() => {
    dispatch(productsOp.getProducts());
  }, [dispatch]);

  useEffect(() => {
    const totalPrice = columns.cart.list.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );

    setTotal(totalPrice);
  }, [columns.cart.list, columns.cart.list.length]);

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledColumns>
          {Object.values(columns).map((col) => (
            <Column col={col} key={col.id} />
          ))}
        </StyledColumns>
      </DragDropContext>
      <Box display="flex" alignItems="center" gap={2} ml="auto">
        <Typography variant="h6">
          {t("total")}: {total}$
        </Typography>
        <Button variant="contained" onClick={handleBuy}>
          {t("buy")}
        </Button>
      </Box>
    </Wrapper>
  );
};

export default User;

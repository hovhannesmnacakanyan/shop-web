import React, { useState } from "react";
import { Column } from "./components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { IProduct } from "@types";
import styled from "styled-components";
import { Button, Typography } from "ui-kit";
import { Wrapper } from "./styles";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

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

const initialColumns: { [key: string]: IColumn } = {
  products: {
    id: "products",
    list: [
      { id: 1, name: "Item 1", price: 4 },
      { id: 2, name: "Item 2", price: 4 },
      { id: 3, name: "Item 3", price: 4 },
      { id: 4, name: "Item 4", price: 4 },
      { id: 5, name: "Item 5", price: 4 },
      { id: 6, name: "Item 6", price: 4 },
    ],
  },
  cart: {
    id: "cart",
    list: [],
  },
};

const User = () => {
  const { t } = useTranslation();
  const [columns, setColumns] = useState(initialColumns);

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
        <Typography variant="h6">{t("total")}: 15$</Typography>
        <Button variant="contained">{t("buy")}</Button>
      </Box>
    </Wrapper>
  );
};

export default User;

import React from "react";
import { ProductItem } from "../ProductItem";
import { Droppable } from "react-beautiful-dnd";
import { IColumn } from "pages/User";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Typography } from "ui-kit";

interface IColumnProps {
  col: IColumn;
}

const StyledList = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  margin-top: 16px;
  padding: 16px;
  min-width: 500px;
  min-height: 500px;
  gap: 12px;
`;

const StyledColumn = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Column = ({ col }: IColumnProps) => {
  const { t } = useTranslation();

  return (
    <Droppable droppableId={col.id}>
      {(provided) => (
        <StyledColumn>
          <Typography variant="h5">{t(col.id)}</Typography>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {col.list.map((item, index) => (
              <ProductItem key={item.name} name={item.name} index={index} />
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  );
};

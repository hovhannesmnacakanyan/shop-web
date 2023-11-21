import React from "react";
import { ProductItem } from "../ProductItem";
import { Droppable } from "react-beautiful-dnd";
import { IColumn } from "pages/User";
import styled from "styled-components";

interface IColumnProps {
  col: IColumn;
}

const StyledList = styled("div")`
  background-color: #ddd;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 8px;
`;

const StyledColumn = styled("div")`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  h2: {
    margin: 0;
    padding: 0 16px;
  }
`;

export const Column = ({ col }: IColumnProps) => {
  return (
    <Droppable droppableId={col.id}>
      {(provided) => (
        <StyledColumn>
          <h2>{col.id}</h2>
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

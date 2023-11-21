import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IProductItemProps {
  name: string;
  index: number;
}

const StyledItem = styled("div")`
  background-color: #eee;
  border-radius: 4px;
  padding: 4px 8px;
  transition: background-color 0.8s ease-out;
  margin-top: 8px;

  &:hover {
    background-color: #fff;
    transition: background-color 0.1s ease-in;
  }
`;

export const ProductItem = ({ name, index }: IProductItemProps) => {
  return (
    <Draggable draggableId={name} index={index}>
      {(provided: any) => (
        <StyledItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {name}
        </StyledItem>
      )}
    </Draggable>
  );
};

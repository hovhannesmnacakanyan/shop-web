import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Typography } from "ui-kit";

interface IProductItemProps {
  name: string;
  index: number;
}

const StyledItem = styled("div")`
  background-color: #eee;
  padding: 4px 8px;
  transition: background-color 0.8s ease-out;

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
          <Typography variant="body1">{name}</Typography>
        </StyledItem>
      )}
    </Draggable>
  );
};

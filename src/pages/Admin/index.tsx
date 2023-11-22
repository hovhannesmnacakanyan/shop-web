import React from "react";
import { Buyers, Products } from "./components";
import { Wrapper } from "./styles";

const Admin = () => {
  return (
    <Wrapper>
      <Buyers />
      <Products />
    </Wrapper>
  );
};

export default Admin;

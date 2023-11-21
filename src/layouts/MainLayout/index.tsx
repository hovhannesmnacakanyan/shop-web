import React, { Suspense } from "react";
import { IReactChildren } from "@types";

import { Wrapper } from "./styles";

export const MainLayout = ({ children }: IReactChildren) => {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading ...</div>}>{children}</Suspense>
    </Wrapper>
  );
};

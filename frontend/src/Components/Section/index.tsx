import React from "react";

import { Wrapper } from "./styled";

type Props = {
  component: React.ReactNode;
  half?: Boolean;
  isLight?: Boolean;
};

function Section({ component, half = false, isLight = true }: Props) {
  return (
    <Wrapper half={half} isLight={isLight}>
      {component}
    </Wrapper>
  );
}

export default Section;

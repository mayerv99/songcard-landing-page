import React from "react";

import { Wrapper } from "./styled";

import useSongData from "../Hooks/useSongData";

type Props = {};

function StepsExample({}: Props) {
  const { currentStep } = useSongData();
  return (
    <Wrapper>
      <h1>{currentStep.label}</h1>
      {currentStep.component}
    </Wrapper>
  );
}

export default StepsExample;

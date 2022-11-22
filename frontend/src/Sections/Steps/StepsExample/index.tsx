import React from "react";

import { Wrapper } from "./styled";

type Props = {
  currentStep: CurrentStep;
};

export interface CurrentStep {
  value: String;
  label: String;
  component: React.ReactNode;
}

function StepsExample({ currentStep }: Props) {
  return (
    <Wrapper>
      <h1>{currentStep.label}</h1>
      {currentStep.component}
    </Wrapper>
  );
}

export default StepsExample;

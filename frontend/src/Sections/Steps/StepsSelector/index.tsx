import React from "react";

import useSongData from "../Hooks/useSongData";

import { Wrapper, StepItem } from "./styled";

type Props = {};

function StepsSelector({}: Props) {
  const { steps, setCurrentStep, currentStep } = useSongData();
  return (
    <Wrapper>
      {steps.map((item) => (
        <StepItem
          selected={currentStep.value === item.value}
          onClick={() => setCurrentStep(item)}
        >
          {item.value}
        </StepItem>
      ))}
    </Wrapper>
  );
}

export default StepsSelector;

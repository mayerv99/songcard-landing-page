import React from "react";

type Props = {
  currentStep: CurrentStep;
};

export interface CurrentStep {
  value: Number;
  label: String;
  component: React.ReactNode;
}

function StepsExample({ currentStep }: Props) {
  return <div></div>;
}

export default StepsExample;

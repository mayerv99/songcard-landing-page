import React, { useState, createContext } from "react";

import { CurrentStep } from "../StepsExample/index";

type Props = {
  children: React.ReactNode;
};

export const StepsContext = createContext({}<CurrentStep>);

function StepsProvider({ children }: Props) {
  const [step, setStep] = useState();

  return (
    <StepsContext.Provider value={{ step, setStep }}>
      {children}
    </StepsContext.Provider>
  );
}

export default StepsProvider;

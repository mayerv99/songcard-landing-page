import React, { useState } from "react";
import StepsExample from "./StepsExample";

import _ from "lodash";

import SongProvider from "./Context/SongContext";

// Steps
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

import { StepsCard, Wrapper, StepItem } from "./styled";

import StepsSelector from "./StepsSelector";

type Props = {};

function Steps({}: Props) {
  return (
    <Wrapper>
      <StepsCard>
        <SongProvider>
          <StepsSelector></StepsSelector>

          <StepsExample />
        </SongProvider>
      </StepsCard>
    </Wrapper>
  );
}

export default Steps;

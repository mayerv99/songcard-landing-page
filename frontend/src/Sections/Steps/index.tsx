import React, { useState } from "react";
import StepsExample from "./StepsExample";

import _ from "lodash";

import SongProvider from "./Context/SongContext";
import Alert from "../../Components/Alert";

import { StepsCard, Wrapper } from "./styled";

import StepsSelector from "./StepsSelector";

type Props = {};

function Steps({}: Props) {
  return (
    <Wrapper>
      <StepsCard>
        <SongProvider>
          <Alert />
          <StepsSelector />
          <StepsExample />
        </SongProvider>
      </StepsCard>
    </Wrapper>
  );
}

export default Steps;

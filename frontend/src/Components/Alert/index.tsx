import React from "react";

import { Wrapper } from "./styled";

import useSongData from "../../Sections/Steps/Hooks/useSongData";

type Props = {};

function Alert({}: Props) {
  const { alertMessage, setAlertMessage } = useSongData();
  return alertMessage ? (
    <Wrapper>
      {alertMessage}
      <span onClick={() => setAlertMessage("")}>&#x2715;</span>
    </Wrapper>
  ) : null;
}

export default Alert;

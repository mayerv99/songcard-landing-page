import React from "react";

import useSongData from "../Hooks/useSongData";

import Card from "./Components/Card";

import { Wrapper } from "./styled";

type Props = {};

function Step4({}: Props) {
  const { selectedWords } = useSongData();

  return (
    <Wrapper>
      {selectedWords?.map((item) => (
        <Card word={item.word} />
      ))}
    </Wrapper>
  );
}

export default Step4;

import React, { useState } from "react";

import {
  StepsCard,
  StepsSelector,
  Wrapper,
  StepItem,
  StepExample,
} from "./styled";

type Props = {};

function Steps({}: Props) {
  const [selected, setSelected] = useState("1");
  const loremIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

  const steps = [
    { number: "1", value: loremIpsum },
    { number: "2", value: loremIpsum },
    { number: "3", value: loremIpsum },
    { number: "4", value: loremIpsum },
    { number: "5", value: loremIpsum },
    { number: "6", value: loremIpsum },
  ];

  return (
    <Wrapper>
      <StepsCard>
        <StepsSelector>
          {steps.map((item) => (
            <StepItem
              key={item.number}
              selected={selected === item.number}
              onClick={() => setSelected(item.number)}
            >
              {item.number}
            </StepItem>
          ))}
        </StepsSelector>
      </StepsCard>
    </Wrapper>
  );
}

export default Steps;

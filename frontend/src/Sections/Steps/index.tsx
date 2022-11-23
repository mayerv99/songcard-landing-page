import React, { useState, useRef, useEffect } from "react";
import StepsExample from "./StepsExample";

import _ from "lodash";

import SongProvider from "./Context/SongContext";

// Steps
import Step2 from "./Step2";
import Step3 from "./Step3";

import {
  StepsCard,
  StepsSelector,
  Wrapper,
  StepItem,
  StepWrapper,
} from "./styled";

type Props = {};

interface SelectedWord {
  lineIndex: Number;
  wordIndex: Number;
  word: String;
}

function Steps({}: Props) {
  const InputRef = useRef(null);

  const [lyrics, setLyrics] = useState<String>();
  const [selectedWords, setSelectedWords] = useState<SelectedWord[]>([]);

  useEffect(() => {
    console.log("USEFFECT: ", selectedWords);
  }, [selectedWords]);

  const Step1 = () => {
    return <StepWrapper></StepWrapper>;
  };

  const loremIpsum = "Lorem Ipsum";
  const steps = [
    // { value: "1", label: loremIpsum, component: <Step1 /> },
    { value: "2", label: "Busque a sua música", component: <Step2 /> },
    { value: "3", label: "Escolha as palavras", component: <Step3 /> },
    // { value: "4", label: loremIpsum },
  ];

  const [selected, setSelected] = useState(steps[0]);

  return (
    <Wrapper>
      <StepsCard>
        <StepsSelector>
          {steps.map((item) => (
            <StepItem
              key={item.value}
              selected={selected.value === item.value}
              onClick={() => setSelected(item)}
            >
              {item.value}
            </StepItem>
          ))}
        </StepsSelector>
        <SongProvider>
          <StepsExample currentStep={selected} />
        </SongProvider>
      </StepsCard>
    </Wrapper>
  );
}

export default Steps;

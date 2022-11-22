import React, { useState, useRef, useEffect } from "react";
import StepsExample from "./StepsExample";

import _ from "lodash";

import axios from "axios";

import {
  StepsCard,
  StepsSelector,
  Wrapper,
  StepItem,
  StepWrapper,
  LyricsWrapper,
  Line,
  Word,
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

  const Step2 = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=250910088&apikey=4306ade10d6239b3b17e0aadf07f0ff9";

    const handleSearch = async () => {
      const response: any = await axios.get(url).then((res) => res.data);
      setLyrics(response.message.body.lyrics.lyrics_body);

      setSelected(steps[2]);
    };

    return (
      <StepWrapper>
        <input ref={InputRef} />
        <button onClick={handleSearch}>Buscar</button>
      </StepWrapper>
    );
  };

  const Step3 = () => {
    const lines = lyrics?.split("\n");

    const handleSelectWord = (selectedWord: SelectedWord) => {
      if (checkIfWordExists(selectedWord)) {
        return;
      }
      return addWord(selectedWord);
    };

    const checkIfWordExists = (selectedWord: SelectedWord) => {
      console.log("inicio: ", selectedWords);
      console.log("palavras: ", selectedWord);
      console.log(
        "validou: ",
        selectedWords.some((element) => _.isEqual(element, selectedWord))
      );

      return selectedWords.some((element) => _.isEqual(element, selectedWord));
    };

    const addWord = (selectedWord: SelectedWord) => {
      console.log(selectedWord);
      setSelectedWords((prevState) => [...prevState, selectedWord]);
    };

    const removeWord = () => {};

    return (
      <StepWrapper>
        <LyricsWrapper>
          {lines?.map((item, lineIndex) => {
            const words = item.split(" ");

            return (
              <Line>
                {words.map((word, wordIndex) => (
                  <Word
                    selected={checkIfWordExists({ lineIndex, wordIndex, word })}
                    onClick={() =>
                      handleSelectWord({
                        lineIndex,
                        wordIndex,
                        word,
                      })
                    }
                  >
                    {word}
                  </Word>
                ))}
                <br />
              </Line>
            );
          })}
        </LyricsWrapper>
      </StepWrapper>
    );
  };

  const loremIpsum = "Lorem Ipsum";

  const steps = [
    { value: "1", label: loremIpsum, component: <Step1 /> },
    { value: "2", label: loremIpsum, component: <Step2 /> },
    { value: "3", label: loremIpsum, component: <Step3 /> },
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
        <StepsExample currentStep={selected} />
      </StepsCard>
    </Wrapper>
  );
}

export default Steps;

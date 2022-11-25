import React, { useContext } from "react";

import _ from "lodash";

import { StepWrapper, LyricsWrapper, Line, Word } from "./styled";

import { SongContext, SongData } from "../Context/SongContext";

interface SelectedWord {
  lineIndex: Number;
  wordIndex: Number;
  word: String;
}

function Step3() {
  const { lyrics, selectedWords, setSelectedWords } = useContext(
    SongContext
  ) as SongData;

  const lines = lyrics?.split("\n");

  const handleSelectWord = (selectedWord: SelectedWord) => {
    if (checkIfWordExists(selectedWord)) {
      return removeWord(selectedWord);
    }
    return addWord(selectedWord);
  };

  const checkIfWordExists = (selectedWord: SelectedWord) => {
    return selectedWords.some((element) => _.isEqual(element, selectedWord));
  };

  const addWord = (selectedWord: SelectedWord) => {
    return setSelectedWords((prevState: any) => [...prevState, selectedWord]);
  };

  const removeWord = (selectedWord: SelectedWord) => {
    return setSelectedWords(
      selectedWords.filter((element) => !_.isEqual(element, selectedWord))
    );
  };

  const chekcIfIsFirstWord = () => {};

  return (
    <StepWrapper>
      <LyricsWrapper>
        {lines?.map((item, lineIndex) => {
          const words = item.split(" ");

          return (
            <Line key={lineIndex}>
              {words.map((word, wordIndex) => (
                <Word
                  key={wordIndex}
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
}

export default Step3;

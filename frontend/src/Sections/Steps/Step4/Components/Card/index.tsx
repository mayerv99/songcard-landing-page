import axios from "axios";
import React, { useEffect, useState } from "react";

import { Wrapper, CardBody, PlayButton, SkeletonCard } from "./styled";

import play from "../../../../../assets/Icons/play.svg";

type Props = {
  word: String;
};

function Card({ word }: Props) {
  const [translatedText, setTranslatedText] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (word) {
      translateText();
    }
  }, []);

  const detectLanguage = async () => {
    const language = await axios
      .post("https://libretranslate.de/detect", { q: word })
      .then((res) => res.data[0].language);
    return language;
  };

  const translateText = async () => {
    const translatedWord = await axios
      .post("https://libretranslate.de/translate", {
        q: word,
        source: await detectLanguage(),
        target: "pt",
      })
      .then((res) => setTranslatedText(res.data.translatedText));

    setIsLoading(false);

    return translatedWord;
  };

  const playAudio = () => {
    const message = new SpeechSynthesisUtterance();
    message.text = word.toString();
    message.lang = "en";
    window.speechSynthesis.speak(message);
  };

  return (
    <Wrapper isLoading={isLoading}>
      {isLoading ? (
        <SkeletonCard>
          <div />
        </SkeletonCard>
      ) : (
        <>
          <header>
            <h3>{word} </h3>
            <PlayButton onClick={playAudio}>
              <img src={play} />
            </PlayButton>
          </header>
          <CardBody>
            <p>{translatedText}</p>
          </CardBody>
        </>
      )}
    </Wrapper>
  );
}

export default Card;

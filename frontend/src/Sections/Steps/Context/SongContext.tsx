import React, { useState, createContext, useEffect } from "react";

import { CurrentStep } from "../StepsExample/index";

import Step2 from "../Step2";
import Step3 from "../Step3";

type Props = {
  children: React.ReactNode;
};

interface SelectedWord {
  lineIndex: Number;
  wordIndex: Number;
  word: String;
}

export interface SongData {
  lyrics: String;
  setLyrics: Function;
  selectedWords: Array<SelectedWord>;
  setSelectedWords: Function;
  currentStep: CurrentStep;
  setCurrentStep: Function;
  steps: Array<CurrentStep>;
}

export const SongContext = createContext<SongData | null>(null);

export default function SongProvider({ children }: Props) {
  const steps: CurrentStep[] = [
    // { value: "1", label: loremIpsum, component: <Step1 /> },
    { value: "2", label: "Busque a sua música", component: <Step2 /> },
    { value: "3", label: "Escolha as palavras", component: <Step3 /> },
    // { value: "4", label: loremIpsum },
  ];

  const [lyrics, setLyrics] = useState<String>("");
  const [selectedWords, setSelectedWords] = useState<SelectedWord[]>([]);
  const [currentStep, setCurrentStep] = useState<CurrentStep>(steps[0]);

  useEffect(() => {
    console.log("lyrics: ", lyrics);
  }, [lyrics]);

  return (
    <SongContext.Provider
      value={{
        lyrics,
        setLyrics,
        selectedWords,
        setSelectedWords,
        currentStep,
        setCurrentStep,
        steps,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

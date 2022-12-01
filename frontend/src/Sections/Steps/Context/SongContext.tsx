import React, { useState, createContext, useEffect } from "react";

import { Song } from "../Step2/@types";

import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";

type Props = {
  children: React.ReactNode;
};

interface SelectedWord {
  lineIndex: Number;
  wordIndex: Number;
  word: String;
}

interface CurrentStep {
  value: String;
  label?: String;
  component: React.ReactNode;
  unlocked: Boolean;
}

export interface SongData {
  lyrics: String;
  setLyrics: Function;
  selectedWords: Array<SelectedWord>;
  setSelectedWords: Function;
  currentStep: CurrentStep;
  setCurrentStep: Function;
  steps: Array<CurrentStep>;
  songList: Song[];
  setSongList: Function;
  searchedArtirst: String;
  setSearchedArtirst: Function;
  showError: Function;
  alertMessage: String | null;
  setAlertMessage: Function;
}

export const SongContext = createContext<SongData | null>(null);

export default function SongProvider({ children }: Props) {
  const [lyrics, setLyrics] = useState<String>("");
  const [selectedWords, setSelectedWords] = useState<SelectedWord[]>([]);
  const [alertMessage, setAlertMessage] = useState<String | null>("");

  const checkIfHasSong = () => {
    return lyrics ? true : false;
  };

  const checkIfHasWords = () => {
    return selectedWords?.length > 0 ? true : false;
  };

  const showError = (message: String) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(null));
  };

  const steps: CurrentStep[] = [
    { value: "1", component: <Step2 />, unlocked: true },
    {
      value: "2",
      label: "Escolha as palavras",
      component: <Step3 />,
      unlocked: checkIfHasSong(),
    },
    {
      value: "3",
      label: "Sua coleção",
      component: <Step4 />,
      unlocked: checkIfHasWords(),
    },
  ];

  const [currentStep, setCurrentStep] = useState<CurrentStep>(steps[0]);
  const [songList, setSongList] = useState<Song[]>([]);
  const [searchedArtirst, setSearchedArtirst] = useState<String>("");

  const resetValues = () => {
    setSelectedWords([]);
  };

  useEffect(() => {
    resetValues();
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
        songList,
        setSongList,
        searchedArtirst,
        setSearchedArtirst,
        showError,
        alertMessage,
        setAlertMessage,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

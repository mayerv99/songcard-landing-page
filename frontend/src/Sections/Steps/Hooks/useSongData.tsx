import React, { useContext } from "react";
import { SongContext, SongData } from "../Context/SongContext";

function useSongData() {
  const {
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
  } = useContext(SongContext) as SongData;
  return {
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
  };
}

export default useSongData;

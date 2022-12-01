import { useRef, useContext, KeyboardEvent, useEffect } from "react";

import axios from "axios";

import { StepWrapper, InputWrapper, SongListWrapper } from "./styled";

import { SongContext, SongData } from "../Context/SongContext";

import searchIcon from "../../../assets/Icons/search.svg";

import Card from "./Components/Card";

import { Song } from "./@types";

function Step2() {
  const {
    setLyrics,
    currentStep,
    setCurrentStep,
    steps,
    songList,
    setSongList,
    searchedArtirst,
    setSearchedArtirst,
    setAlertMessage,
  } = useContext(SongContext) as SongData;

  const InputRef = useRef<any>(null);

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    const artistUrl = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${InputRef.current.value}&page_size=18&page=1&s_track_rating=desc& f_has_lyrics&apikey=4306ade10d6239b3b17e0aadf07f0ff9`;
    if (e.key === "Enter") {
      const response: any = await axios
        .get(artistUrl)
        .then((res) => res.data.message.body.track_list)
        .catch((err) => setAlertMessage("Não foi possível fazer a requisição"));
      setSongList(response);
    }
  };

  const handleSelectSong = async (songId: Number) => {
    const songUrl = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${songId}&apikey=4306ade10d6239b3b17e0aadf07f0ff9`;

    const response = await axios
      .get(songUrl)
      .then((res) => res.data.message.body.lyrics.lyrics_body);
    if (response === "") {
      return setAlertMessage(
        "Não foi possível recuperar a letra desta música, por favor tente escolher outra."
      );
    }
    setLyrics(response);
    setSearchedArtirst(InputRef.current.value);
    setCurrentStep(steps[1]);
  };

  useEffect(() => {
    if (currentStep.value === "1" && searchedArtirst) {
      InputRef.current.value = searchedArtirst;
    }
  }, [currentStep]);

  return (
    <StepWrapper>
      <InputWrapper>
        <img src={searchIcon} />
        <input
          onKeyDown={(e) => handleSearch(e)}
          ref={InputRef}
          placeholder="Busque aqui o/a autor(a) que deseja"
        />
      </InputWrapper>
      <SongListWrapper>
        {songList?.map((song) => (
          <Card
            song={song}
            key={song.track.track_id}
            selectSong={handleSelectSong}
          />
        ))}
      </SongListWrapper>
    </StepWrapper>
  );
}
export default Step2;

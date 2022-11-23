import React, { useRef, useContext } from "react";

import axios from "axios";

import { StepWrapper } from "./styled";

import { SongContext, SongData } from "../Context/SongContext";

function Step2() {
  const { lyrics, setLyrics, setCurrentStep, steps } = useContext(
    SongContext
  ) as SongData;
  const InputRef = useRef(null);

  const url =
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=250910088&apikey=4306ade10d6239b3b17e0aadf07f0ff9";

  const handleSearch = async () => {
    const response: any = await axios.get(url).then((res) => res.data);
    setLyrics(response.message.body.lyrics.lyrics_body);
    setCurrentStep(steps[1]);
  };

  return (
    <StepWrapper>
      <input ref={InputRef} />
      <button onClick={handleSearch}>Buscar</button>
    </StepWrapper>
  );
}
export default Step2;

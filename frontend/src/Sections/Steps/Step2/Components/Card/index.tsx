import React, { useState } from "react";

import { Song } from "../../@types";

import { Wrapper, CardBody, CardFooter } from "./styled";

type Props = { song: Song; selectSong: Function };

function Card({ song, selectSong }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Wrapper
      isLoading={isLoading}
      onClick={() => selectSong(song.track.track_id)}
    >
      <header>
        <h1>
          {song.track.track_name.substring(0, 15)}
          {song.track.track_name.length > 15 && "..."}
        </h1>
      </header>
      <CardBody></CardBody>
      <CardFooter>
        by <strong>{song.track.artist_name}</strong>
      </CardFooter>
    </Wrapper>
  );
}

export default Card;

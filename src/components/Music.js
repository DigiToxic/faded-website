import React, { useRef, useState } from "react";
import styled from "styled-components";
import Song from "./music/scientist.mp3";

function Music() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Start playing the audio when the component mounts
  React.useEffect(() => {
    setIsPlaying(false);
  }, []);

  function handlePlayPauseClick() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <Container>
      {/* Add the audio element to the page */}
      <audio ref={audioRef} src={Song} loop />

      {/* Add a play/pause button that the user can click to control the audio */}
      <button onClick={handlePlayPauseClick}>
        {isPlaying ? (
          <img src="/images/play.png" alt="" />
        ) : (
          <img src="/images/pause.png" alt="" />
        )}
      </button>
    </Container>
  );
}

export default Music;

const Container = styled.div`
  color: white;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
  }
`;

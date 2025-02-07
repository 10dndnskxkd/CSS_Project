"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay blocked: User interaction required", error);
        });
      }
    };

    setTimeout(playAudio, 1000);
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/save-my-world.mp3" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  );
}

// Damian & Theresa

"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => {
          console.log("Autoplay blocked: User interaction required", error);
        });
    }
  };

  useEffect(() => {
    // Attempt to play after a short delay (optional)
    const timeout = setTimeout(() => {
      handlePlay();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      

      <audio ref={audioRef} loop muted={!isPlaying}>
        <source src="/save-my-world.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
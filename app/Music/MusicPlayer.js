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
      {/* Add a button for user interaction */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 1001, // Ensure it's above other elements
          }}
        >
          Play Music
        </button>
      )}

      <audio ref={audioRef} loop muted={!isPlaying}>
        <source src="/save-my-world.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
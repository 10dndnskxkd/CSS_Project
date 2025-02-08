// Damian & Theresa

"use client";

import { useRef, useState } from "react";
import "./Music.css"; // ✅ Ensure styles are applied

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.log("Autoplay blocked:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} loop>
        <source src="/save-my-world.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>

      {/* ✅ Button with new styles */}
      <button className="btn-1" onClick={togglePlay}>
        {isPlaying ? "Stop :(" : "Play ;)"}
      </button>
    </div>
  );
}

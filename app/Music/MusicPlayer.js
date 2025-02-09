// Damian & Theresa

"use client"; // Indicate that this code is client-side only, likely for Next.js

import { useRef, useState } from "react"; // Import React hooks: useRef for referencing the audio element and useState for tracking playback state
import "./Music.css"; // ✅ Import the CSS file for styling the music player

export default function MusicPlayer() {
  // Create a reference to the <audio> element using useRef
  const audioRef = useRef(null);

  // Declare a state variable 'isPlaying' to keep track of the audio's play/pause state
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle between play and pause states
  const togglePlay = () => {
    if (audioRef.current) {
      // If the audio is currently playing, pause it, otherwise play it
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Attempt to play audio, catching any autoplay blocking errors
        audioRef.current.play().catch(error => console.log("Autoplay blocked:", error));
      }
      
      // Update the 'isPlaying' state to reflect the new play/pause state
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-player">
      {/* Audio player element with looping enabled */}
      <audio ref={audioRef} loop>
        {/* Audio source with mp3 format */}
        <source src="/save-my-world.mp3" type="audio/mpeg" />
        {/* Fallback message for unsupported browsers */}
        Your browser does not support the audio tag.
      </audio>

      {/* ✅ Play/Pause button with conditional text based on play state */}
      <button className="btn-1" onClick={togglePlay}>
        {/* Display "Stop :(" when audio is playing, else show "Play ;)" */}
        {isPlaying ? "Stop :(" : "Play ;)"}
      </button>
    </div>
  );
}


// Theresa

"use client"; // Enables client-side rendering for Next.js

import React, { useState, useEffect, useRef } from "react";
import "./stylesHome/home.css";  // Import CSS file for home page styling
import "./globals.css";  // Import global CSS file for shared styles
import { motion, useScroll, useTransform } from "framer-motion"; // Import animation hooks from Framer Motion
import Link from "next/link"; // Import Next.js Link for navigation
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons
import WeatherBackground from "./Components/page"; // Import WeatherBackground component for dynamic weather-based backgrounds
import Footer from "./Components/footer";  // Import Footer component

// Real-Time Clock Component
function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Stores current time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString()); // Updates time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.p 
      className="real-time-clock"
      initial={{ opacity: 0, y: -10 }} // Initial animation state (fades in from above)
      animate={{ opacity: 1, y: 0 }}  // Final animation state (fully visible)
      transition={{ duration: 2, delay: 1 }} // Smooth transition effect
    >
      {currentTime}
    </motion.p>
  );
}

// Improved Music Player Component
function MusicPlayer() {
  const audioRef = useRef(null); // Reference to audio element
  const [isPlaying, setIsPlaying] = useState(false); // State to track playback status

  useEffect(() => {
    const hasPlayed = localStorage.getItem("musicPlayed"); // Check if music has been played before

    if (!hasPlayed) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            localStorage.setItem("musicPlayed", "true"); // Store playback status
          }).catch(error => {
            console.log("Autoplay blocked: User interaction required", error);
          });
        }
      }, 1000); // Delayed autoplay by 1 second
    }

    // Pause music when switching tabs
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange); // Add event listener

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange); // Cleanup event listener on unmount
    };
  }, [isPlaying]);
}

export default function Home() {
  // Scroll-based animations using Framer Motion
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Scale effect for images
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Fading effect for text
  const [isMounted, setIsMounted] = useState(false); // State to check if component is mounted

  useEffect(() => {
    setIsMounted(true); // Set state to true when component mounts
  }, []);

  return (
    <WeatherBackground>
      <div className="center-container">
        {/* Mascot Animation */}
        <motion.img
          src="/friends.png"
          alt="NEA Mascot"
          className="mascot"
          initial={{ opacity: 0, scale: 0.8 }} // Fades in and scales up
          animate={{ opacity: 1, scale: 1 }}  
          transition={{ duration: 2, delay: 1 }} // Smooth transition effect
        />

        {/* Real-Time Clock */}
        {isMounted && <RealTimeClock />} {/* Conditionally render RealTimeClock component */}

        {/* Heading Animation - Fade In */}
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: -30 }} // Fades in and moves down
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, ease: "easeOut", delay: 1 }} // Smooth transition
        >
          Safeguard.Nurture.Cherish
        </motion.h1>

        {/* Subtitle Animation - Fade In with Delay */}
        <motion.p
          className="subtext"
          initial={{ opacity: 0, y: 20 }} // Fades in and moves up
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }} // Smooth transition
        >
          To ensure a clean and sustainable environment for Singapore, together
          with our partners and the community.
        </motion.p>

        {/* Social Media Icons Animation - Fade In */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: 20 }} // Fades in and moves up
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }} // Delayed appearance
        >
          <Link href="https://www.facebook.com/NEASingapore/" target="_blank">
            <FaFacebook size={40} />
          </Link>
          <Link href="https://www.youtube.com/channel/UC-tjEFkd0tT2VpD5vbjyAKA" target="_blank">
            <FaYoutube size={40} />
          </Link>
          <Link href="https://www.x.com/NEAsg" target="_blank">
            <FaTwitter size={40} />
          </Link>
          <Link href="https://www.instagram.com/nea_sg/" target="_blank">
            <FaInstagram size={40} />
          </Link>
        </motion.div>

        {/* Music Player */}
        <MusicPlayer />
      </div>
      {/* Footer */}
      <Footer />
    </WeatherBackground>
  );
}

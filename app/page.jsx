// Theresa

"use client"; 

import React, { useState, useEffect, useRef } from "react";
import "./stylesHome/home.css";  // ✅ Import CSS file
import "./globals.css";  // ✅ Import global CSS file
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import WeatherBackground from "./Components/page"; 
import Footer from "./Components/footer";  // ✅ Import Footer component


// ✅ Real-Time Clock Component
function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p 
      className="real-time-clock"
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 2, delay: 1 }} 
    >
      {currentTime}
    </motion.p>
  );
}

// ✅ Improved Music Player Component
function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("musicPlayed");

    if (!hasPlayed) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            localStorage.setItem("musicPlayed", "true");
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

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  

  
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <WeatherBackground>
      <div className="center-container">
        {/* ✅ Mascot Animation */}
        <motion.img
          src="/friends.png"
          alt="NEA Mascot"
          className="mascot"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* ✅ Real-Time Clock */}
        {isMounted && <RealTimeClock />} {/* Conditionally render RealTimeClock component */}

        {/* ✅ Heading Animation - Fade In */}
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          Safeguard.Nurture.Cherish
        </motion.h1>

        {/* ✅ Subtitle Animation - Fade In with Delay */}
        <motion.p
          className="subtext"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
        >
          To ensure a clean and sustainable environment for Singapore, together
          with our partners and the community.
        </motion.p>

        {/* ✅ Social Media Icons Animation - Fade In */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
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

        {/* ✅ Music Player */}
        
        <MusicPlayer />
      </div>
      {/* ✅ Footer */}
      <Footer />
    </WeatherBackground>
  );
}
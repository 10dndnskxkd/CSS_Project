// Theresa

"use client"; 

import React, { useState, useEffect } from "react";
import "./stylesHome/home.css";  // ✅ Import CSS file
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import WeatherBackground from "./Components/page"; 

// Real-Time Clock Component
function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000); //updates every second

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p 
      className="real-time-clock"
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1 }} 
    >
      {currentTime}
    </motion.p>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <WeatherBackground>
      <div className="center-container">
        {/* ✅ Mascot Animation */}
        <motion.img
          src="/friends.png"
          alt="NEA Mascot"
          className="mascot"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* ✅ Real-Time Clock */}
        <RealTimeClock />

        {/* ✅ Heading Animation - Fade In */}
        <motion.h1 
          className="main-heading"
          initial={{ opacity: 0, y: -30 }}  // Start slightly above with opacity 0
          animate={{ opacity: 1, y: 0 }}   // Animate into view
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          Safeguard.Nurture.Cherish
        </motion.h1>

        {/* ✅ Subtitle Animation - Fade In with Delay */}
        <motion.p 
          className="subtext"
          initial={{ opacity: 0, y: 20 }}  // Start below
          animate={{ opacity: 1, y: 0 }}  // Fade in
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Delay animation
        >
          To ensure a clean and sustainable environment for Singapore, together
          with our partners and the community.
        </motion.p>

        {/* ✅ Social Media Icons Animation - Fade In */}
        <motion.div 
          className="social-icons"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, delay: 0.8 }} // Fade in later
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
      </div>
    </WeatherBackground>
  );
}

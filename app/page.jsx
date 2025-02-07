// Theresa

"use client";  // ✅ Make it a Client Component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import WeatherBackground from "./Components/page"; // ✅ Ensure correct import path
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {

//     const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000); // Update time every second

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

  return (
    
    <WeatherBackground>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden and move up
        animate={{ opacity: 1, y: -20 }} // Fade in and rise up
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", 
          marginTop: "-70px",
        }}
      >
        {/* ✅ Mascot Animation */}
        <motion.img
          src="/friends.png"
          alt="NEA Mascot"
          style={{ width: "650px", height: "auto", marginBottom: "20px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* ✅ Heading Animation */}
        <motion.h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "60px",
            fontWeight: "700",
            color: "white",
            textAlign: "center",
            marginBottom: "10px",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Safeguard.Nurture.Cherish
        </motion.h1>

        {/* ✅ Paragraph Animation */}
        <motion.p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "18px",
            fontWeight: "300",
            color: "white",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          To ensure a clean and sustainable environment for Singapore, together
          with our partners and the community.
        </motion.p>

        {/* ✅ Social Media Icons Animation */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link href="https://www.facebook.com/NEASingapore/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} color="white" />
          </Link>
          <Link href="https://www.youtube.com/channel/UC-tjEFkd0tT2VpD5vbjyAKA" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={40} color="white" />
          </Link>
          <Link href="https://www.x.com/NEAsg" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} color="white" />
          </Link>
          <Link href="https://www.instagram.com/nea_sg/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} color="white" />
          </Link>
        </motion.div>
      </motion.div>
    </WeatherBackground>
  );
}

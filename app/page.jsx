"use client";  // ✅ Add this at the top to make it a Client Component

import React from "react";
import Link from "next/link";
// import dynamic from "next/dynamic"; // ✅ Dynamic import for Lottie
import WeatherBackground from "./Components/page"; // ✅ Ensure correct import path
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "./ui/Navbar";

// // ✅ Dynamically import Lottie without SSR
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import animationData from "../public/Animation_raining.json"; // Ensure correct path

export default function Home() {
  return (
    <WeatherBackground>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100vh", // Ensure 100% viewport height
          width: "100vw",
          overflow: "hidden", // Prevent scrolling
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Ensure relative positioning for child elements
        }}
      >
        {/* ✅ Lottie Animation Positioned at the Top Left
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "100px",
            height: "100px",
          }}
        >
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div> */}

        {/* ✅ Mascot Image */}
        <img
          src="/friends.png"
          alt="NEA mascot"
          style={{ width: "650px", height: "auto", marginBottom: "20px" }}
        />

        {/* ✅ Updated Heading & Paragraph */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "60px",
            fontWeight: "700",
            color: "white",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Safeguard.Nurture.Cherish
        </h1>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "18px",
            fontWeight: "300",
            color: "white",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          To ensure a clean and sustainable environment for Singapore, together
          with our partners and the community.
        </p>

        {/* ✅ Social Media Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px", // Add spacing
          }}
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

        </div>
      </div>
    </WeatherBackground>
  );
}

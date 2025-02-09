// Xander, Damian, Theresa

import { Inter } from "next/font/google";
import Link from "next/link"; // Import Link component from Next.js
import "./globals.css";
import MusicPlayer from "./Music/MusicPlayer";  // Import MusicPlayer component for background music
import Navbar from "./ui/Navbar"; // Import Navbar component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSS Assmt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          overflow: "hidden", // Prevents scrolling on the page
          height: "100vh", // Ensures full viewport height
          margin: 0,
          padding: 0,
        }}
      >
        {/* Music Player Component */}
        <MusicPlayer />

        {/* Transparent Navbar with Blur Effect */}
        <div
          style={{
            position: "fixed", // Keeps navbar fixed at the top
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 1)", // Sets background color with slight transparency
            backdropFilter: "blur(5px)", // Adds a subtle glass effect
            zIndex: 1000, // Ensures navbar stays on top
            padding: "10px 0",
            boxShadow: "none", // Removes shadow for a cleaner look
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <div
            style={{
              display: "flex", // Uses flexbox for alignment
              alignItems: "center", // Vertically centers elements
              justifyContent: "space-between", // Spreads items across navbar
              width: "100%",
              padding: "10px 20px",
            }}
          >
            {/* NEA Logo with Link to Home */}
            <Link href="/">
              <img
                src="/nea.png"
                alt="NEA logo"
                style={{ width: "150px", height: "auto", cursor: "pointer" }}
              />
            </Link>
            {/* Navbar Component */}
            <Navbar />
          </div>
        </div>

        {/* Main Content Area (Starts Below Navbar) */}
        <div
          style={{
            paddingTop: "90px", // Offsets content to avoid overlapping navbar
            width: "100vw", // Ensures full width
            height: "100vh", // Ensures full viewport height
            boxSizing: "border-box", // Includes padding and border in total height/width
          }}
        >
          {children} {/* Renders page content */}
        </div>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import Link from "next/link"; // Import Link component from Next.js
import "./globals.css";
import MusicPlayer from "./Music/MusicPlayer";  // ✅ Import MusicPlayer component
import Navbar from "./ui/Navbar"; // ✅ Keep Navbar import

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
          overflow: "hidden", // ✅ Prevent scrolling
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        {/* ✅ Music Player for Background Music */}
        <MusicPlayer />

        {/* ✅ Transparent Navbar with Subtle Blur Effect */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 1)", // ✅ Slight Transparency
            backdropFilter: "blur(5px)", // ✅ Subtle Glass effect
            zIndex: 1000,
            padding: "10px 0",
            boxShadow: "none", // ✅ Remove shadow
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px 20px",
            }}
          >
            <Link href="/">
              <img
                src="/nea.png"
                alt="NEA logo"
                style={{ width: "150px", height: "auto", cursor: "pointer" }}
              />
            </Link>
            <Navbar />
          </div>
        </div>

        {/* ✅ Ensuring Content Starts Below Navbar */}
        <div
          style={{
            paddingTop: "90px", // ✅ Adjust spacing for navbar
            width: "100vw",
            height: "100vh",
            boxSizing: "border-box",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
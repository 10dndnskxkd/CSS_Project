import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar"; // ✅ Keep your existing Navbar import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSS Assmt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* ✅ Add this to wrap the whole page */}
      <body className={inter.className}> {/* ✅ Required <body> tag */}
        {/* ✅ Fixed Navbar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            padding: "0",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            background: "white",
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
            <img
              src="/nea_logo.png" // ✅ Use a small logo instead of the mascot
              alt="NEA logo"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <Navbar /> {/* ✅ Navbar only here */}
        </div>

        {/* ✅ Content Section - Ensures navbar doesn’t overlap */}
        <div
          style={{
            paddingTop: "100px", // ✅ Adjust to match navbar height
            width: "100vw",
            height: "100vh",
            boxSizing: "border-box",
          }}
        >
          {children} {/* ✅ Page content goes here */}
        </div>
      </body>
    </html>
  );
}

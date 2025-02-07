// // Theresa

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home'); // Automatically redirects to /home
  return null; // Ensures nothing is rendered before redirecting
}


// "use client"; // ✅ Make it a Client Component

// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion"; // ✅ Import Framer Motion
// import Link from "next/link";
// import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
// import WeatherBackground from "./Components/page"; // ✅ Ensure correct import path

// // Real-Time Clock Component
// function RealTimeClock() {
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleString());
//     }, 1000); // Update time every second

//     return () => clearInterval(interval); // Cleanup interval
//   }, []);

//   return (
//     <motion.p
//       style={{
//         fontFamily: "'Poppins', sans-serif",
//         fontSize: "20px",
//         fontWeight: "500",
//         color: "lightgray",
//         textAlign: "center",
//         marginBottom: "10px",
//       }}
//       initial={{ opacity: 1, y: 30 }} // Ensure opacity stays at 1 initially
//       animate={{ opacity: 1, y: 0 }}  // Keep it visible
//       transition={{ duration: 1 }}
//     >
//       {currentTime}
//     </motion.p>
//   );
// }

// export default function Home() {
//   const { scrollYProgress } = useScroll(); // ✅ Track Scroll Progress

//   // ✅ Parallax Effect
//   const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
//   const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   return (
//     <WeatherBackground>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: -20 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//           minHeight: "100vh", // ✅ Set to min-height so scrolling works
//           width: "100vw",
//           overflow: "hidden",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           position: "relative",
//           marginTop: "-70px",
//         }}
//       >
//         {/* ✅ Mascot Animation */}
//         <motion.img
//           src="/friends.png"
//           alt="NEA Mascot"
//           style={{
//             width: "650px",
//             height: "auto",
//             marginBottom: "20px",
//             scale: imageScale, // ✅ Parallax Effect
//           }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         />

//         {/* ✅ Real-Time Clock - Isolated */}
//         <RealTimeClock />

//         {/* ✅ Heading Animation */}
//         <motion.h1
//           style={{
//             fontFamily: "'Playfair Display', serif",
//             fontSize: "60px",
//             fontWeight: "700",
//             color: "white",
//             textAlign: "center",
//             marginBottom: "10px",
//             opacity: textOpacity, // ✅ Fades out on scroll
//           }}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Safeguard.Nurture.Cherish
//         </motion.h1>

//         {/* ✅ Paragraph Animation */}
//         <motion.p
//           style={{
//             fontFamily: "'Poppins', sans-serif",
//             fontSize: "18px",
//             fontWeight: "300",
//             color: "white",
//             textAlign: "center",
//             maxWidth: "700px",
//             margin: "0 auto",
//             opacity: textOpacity, // ✅ Fades out on scroll
//           }}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           To ensure a clean and sustainable environment for Singapore, together
//           with our partners and the community.
//         </motion.p>

//         {/* ✅ Social Media Icons Animation */}
//         <motion.div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "20px",
//             marginTop: "20px",
//           }}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//         >
//           <Link href="https://www.facebook.com/NEASingapore/" target="_blank" rel="noopener noreferrer">
//             <FaFacebook size={40} color="white" />
//           </Link>
//           <Link href="https://www.youtube.com/channel/UC-tjEFkd0tT2VpD5vbjyAKA" target="_blank" rel="noopener noreferrer">
//             <FaYoutube size={40} color="white" />
//           </Link>
//           <Link href="https://www.x.com/NEAsg" target="_blank" rel="noopener noreferrer">
//             <FaTwitter size={40} color="white" />
//           </Link>
//           <Link href="https://www.instagram.com/nea_sg/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={40} color="white" />
//           </Link>
//         </motion.div>
//       </motion.div>

//       {/* ✅ Scrollable Section with Content */}
//       <motion.div
//         style={{
//           minHeight: "150vh", // ✅ Allow scrolling
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "#121212",
//           color: "white",
//           padding: "50px",
//           textAlign: "center",
//         }}
//       >
//         <h2>Scroll Down to See Effects</h2>
//         <p>As you scroll, animations will take effect on various elements.</p>
//       </motion.div>
//     </WeatherBackground>
//   );
// }
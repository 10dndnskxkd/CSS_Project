'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import "./styles.css";
import WeatherBackground from '../Components/page';
import KeyAreas from "./KeyAreas"; // Import the KeyAreas component

export default function AboutPage() {
  const { scrollYProgress } = useScroll(); // Track scrolling
  const fadeIn = useTransform(scrollYProgress, [0, 1], [1, 0]); // Fade-out effect

  return (
    <WeatherBackground>
      <motion.div
      className="page-container"
      style={{ minHeight: "200vh", overflowY: "auto" }} // Ensure scrolling
    >
      {/* Mission Section at the Top */}
      <section className="mission-top">
        <motion.h1 style={{ opacity: fadeIn }}>Our Mission</motion.h1>
        <motion.p style={{ opacity: fadeIn }}>
          The National Environment Agency (NEA) is the leading public organisation responsible for ensuring a clean and sustainable environment for Singapore. We aim to improve and sustain a clean environment, promote sustainability and resource efficiency, maintain high public health standards, provide timely and reliable meteorological information, and encourage a vibrant hawker culture.
        </motion.p>
      </section>

      {/* Header Section */}
      <header className="header">
        <motion.h1 style={{ opacity: fadeIn }}>
          National Environment Agency (NEA)
        </motion.h1>
        <motion.p style={{ opacity: fadeIn }}>
          Pioneering Environmental Sustainability in Singapore
        </motion.p>
      </header>

      {/* Main Content */}
      <motion.div className="content">
        {/* Mission Section */}
        <section className="mission-section">
          <motion.h2 style={{ opacity: fadeIn }}>Our Mission</motion.h2>
          <motion.p style={{ opacity: fadeIn }}>
            The National Environment Agency (NEA) is the leading public organisation responsible for ensuring a clean and sustainable environment for Singapore. We aim to improve and sustain a clean environment, promote sustainability and resource efficiency, maintain high public health standards, provide timely and reliable meteorological information, and encourage a vibrant hawker culture.
          </motion.p>
        </section>

        {/* Key Areas Section */}
        <div className="key-areas" id="key-areas">
          <KeyAreas /> {/* Use the KeyAreas component here */}
        </div>

        {/* Additional Information Section */}
        <section className="additional-info">
          <motion.h2 style={{ opacity: fadeIn }}>Our Comprehensive Approach</motion.h2>
          <motion.p style={{ opacity: fadeIn }}>
            NEA works closely with its partners and the community to develop environmental and public health initiatives and programmes.
          </motion.p>
        </section>

        {/* Video Section */}
        <div>
          <h2>Find out more here!</h2>
          <video width="500" height="400" controls>
            <source src="https://youtu.be/Noi3zog1quA" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 National Environment Agency, Singapore</p>
        </footer>
      </motion.div>
    </motion.div>
    </WeatherBackground>
    
  );
}
//Kieira

'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import "../globals.css"; // Corrected import path for the global stylesheet
import "./styles.css"; // Import the local stylesheet
import WeatherBackground from '../Components/page';
import KeyAreas from "./KeyAreas"; // Import the KeyAreas component
import Footer from "../Components/footer"; // Corrected import path for the Footer component

export default function AboutPage() {
  const { scrollYProgress } = useScroll(); // Track scrolling
  const fadeIn = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <WeatherBackground>
        <header className="header">
          <motion.h1 style={{ opacity: fadeIn }}>
            National Environment Agency (NEA)
          </motion.h1>
          <motion.p style={{ opacity: fadeIn }}>
            Pioneering Environmental Sustainability in Singapore
          </motion.p>
        </header>

      <motion.div className="page-container">
        {/* Mission Section at the Top */}
        <section className="mission-top">
          <motion.h1 style={{ opacity: fadeIn }}>Our Mission</motion.h1>
          <motion.p style={{ opacity: fadeIn }}>
            The National Environment Agency (NEA) is the leading public organization responsible for ensuring a clean and sustainable environment for Singapore. We aim to improve and sustain a clean environment, promote sustainability and resource efficiency, maintain high public health standards, provide timely and reliable meteorological information, and encourage a vibrant hawker culture.
          </motion.p>
        </section>

        {/* Header Section */}

        {/* Mission Section */}
        {/* <section className="mission-section">
          <motion.h2 style={{ opacity: fadeIn }}>Our Mission</motion.h2>
          <motion.p style={{ opacity: fadeIn }}>
            The National Environment Agency (NEA) is the leading public organisation responsible for ensuring a clean and sustainable environment for Singapore. We aim to improve and sustain a clean environment, promote sustainability and resource efficiency, maintain high public health standards, provide timely and reliable meteorological information, and encourage a vibrant hawker culture.
          </motion.p>
        </section> */}

        {/* Main Content */}
        <motion.div className="content">
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
          <div className="center-video">
            <div>
              <h1>Find out more here!</h1>
              <iframe
                title="YouTube video player"
                src="https://www.youtube.com/embed/Noi3zog1quA"
                className="video-iframe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Footer /> 
    </WeatherBackground>
  );
}
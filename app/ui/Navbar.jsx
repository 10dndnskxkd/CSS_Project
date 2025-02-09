// Xander and Theresa and Damian

"use client"; // Enables client-side rendering for Next.js

import Link from "next/link";
import { usePathname } from "next/navigation"; // Get the current route pathname
import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname(); // Get the current path to highlight active links
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navLinks}>
          {/* Navigation Links */}
          <Link href="/" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/" ? styles.active : ""}`}>
              Home
            </a>
          </Link>
          <Link href="/tempmap" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/tempmap" ? styles.active : ""}`}>
              Real-Time Temperature Map
            </a>
          </Link>
          <Link href="/forecast" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/forecast" ? styles.active : ""}`}>
              4-Day Weather Forecast
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/about" ? styles.active : ""}`}>
              About Us
            </a>
          </Link>
          
          {/* External link for E-Service (opens in a new tab) */}
          <a
            href="https://www.eportal.nea.gov.sg"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.navitem} ${pathname === "/e-service" ? styles.active : ""}`}
          >
            E-Service
          </a>

          {/* Contact NEA Dropdown Menu */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)} // Show dropdown on hover
            onMouseLeave={() => setDropdownOpen(false)} // Hide dropdown when mouse leaves
          >
            <span className={styles.dropdownToggle}>Find us at ▼</span>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {/* Social Media Links */}
                <li>
                  <a href="https://www.facebook.com/NEASingapore/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC-tjEFkd0tT2VpD5vbjyAKA" target="_blank" rel="noopener noreferrer">
                    <FaYoutube /> YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.x.com/NEAsg" target="_blank" rel="noopener noreferrer">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nea_sg/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> Instagram
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

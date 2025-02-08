// theresa

"use client"; // 👈 Add this to make it a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 Use usePathname instead of useRouter
import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname(); // 👈 Get the current path
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navLinks}>
          <Link href="/" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/" ? styles.active : ""}`}>Home</a>
          </Link>
          <Link href="/tempmap" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/tempmap" ? styles.active : ""}`}>Real-Time Temperature Map</a>
          </Link>
          <Link href="/forecast" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/forecast" ? styles.active : ""}`}>4-Day Weather Forecast</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/about" ? styles.active : ""}`}>About Us</a>
          </Link>
          <Link href="/e-service" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/e-service" ? styles.active : ""}`}>E-Service</a>
          </Link>

          {/* ✅ Contact NEA Dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={styles.dropdownToggle}>Find us at ▼</span>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
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

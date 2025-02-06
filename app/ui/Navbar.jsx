// theresa

"use client"; // 👈 Add this to make it a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 Use usePathname instead of useRouter
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname(); // 👈 Get the current path

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
          <Link href="/references" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/references" ? styles.active : ""}`}>References</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={`${styles.navitem} ${pathname === "/contact" ? styles.active : ""}`}>Contact NEA</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

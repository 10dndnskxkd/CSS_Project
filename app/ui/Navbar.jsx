import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navitem} href="/">Home</Link>
            <Link className={styles.navitem} href="/tempmap">Real-Time Temperature Map</Link>
            <Link className={styles.navitem} href="/forecast">4-Day Weather Forecast</Link>
            <Link className={styles.navitem} href="/about">About Us</Link>
            <Link className={styles.navitem} href="/references">References</Link>
        </nav>
    );
}
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
    <div className={styles.logoContainer}>
        <img src="/nea.png" alt="NEA Singapore Logo" />
    </div>
    <div>
        <Link className={styles.navitem} href="/">Home</Link>
        <Link className={styles.navitem} href="/tempmaps">Real-Time Temperature Map</Link>
        <Link className={styles.navitem} href="/forecast">4-Day Weather Forecast</Link>
        <Link className={styles.navitem} href="/about">About Us</Link>
        <Link className={styles.navitem} href="/references">References</Link>
    </div>
    <button className={styles.navButton}>Contact NEA</button>
</nav>

    );
}

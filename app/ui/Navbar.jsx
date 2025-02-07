import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
    <div className={styles.logoContainer}>
        
    </div>
    <div>
        <Link className={styles.navitem} href="/home">Home</Link>
        <Link className={styles.navitem} href="/tempmap">Real-Time Temperature Map</Link>
        <Link className={styles.navitem} href="/forecast">4-Day Weather Forecast</Link>
        <Link className={styles.navitem} href="/about">About Us</Link>
        <Link className={styles.navitem} href="/references">References</Link>
        <button className={`${styles.navitem} ${styles.navButton}`}>Contact NEA</button>
    </div>
    
</nav>

    );
}

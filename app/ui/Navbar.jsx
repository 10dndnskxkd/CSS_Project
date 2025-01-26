import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navitem} href="/">Home</Link>
            <Link className={styles.navitem} href="/tempmap">Temp Map</Link>
            <Link className={styles.navitem} href="/test">Test</Link>
            <Link className={styles.navitem} href="/references">References</Link>
        </nav>
    );
}
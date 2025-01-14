import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navitem} href="/">Home</Link>
            <Link className={styles.navitem} href="/tempmap">Temp Map</Link>
            <Link className={styles.navitem} href="/PAGE1">page1</Link>
            <Link className={styles.navitem} href="/PAGE2">page2</Link>
            <Link className={styles.navitem} href="/PAGE3">page3</Link>
            <Link className={styles.navitem} href="/PAGE4">page4</Link>
        </nav>
    );
}
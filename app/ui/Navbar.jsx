import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navitem} href="/">Home</Link>
            <Link className={styles.navitem} href="/TEMPMAP">Temp Map</Link>
            <Link className={styles.navitem} href="/DASHBOARD">Dashboard</Link>
            <Link className={styles.navitem} href="/WHOWEARE">Who We Are</Link>
            <Link className={styles.navitem} href="/OURSERVICES">Our Services</Link>
            <Link className={styles.navitem} href="/ESERVICES">E-Services</Link>
        </nav>
    );
}
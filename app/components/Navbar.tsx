// Navbar.tsx
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoGreen}>NICO</span>{" "}
          <span className={styles.logoBlue}>SALATA</span>
        </div>

        <ul className={styles.links}>
          <li><Link href="#come-lavoro">Come lavoro</Link></li>
          <li><Link href="#servizi">Servizi</Link></li>
          <li><Link href="#chi-aiuto">Chi aiuto</Link></li>
          <li><Link href="#fiducia">Fiducia</Link></li>
        </ul>

        <Link href="#contatti" className={styles.cta}>Parliamone</Link>
      </nav>
      <div className={styles["navbar-border"]}></div>
    </>
  );
}
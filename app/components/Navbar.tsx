"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoGreen}>NICO</span>{" "}
          <span className={styles.logoBlue}>SALATA</span>
        </div>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          <li><Link href="#come-lavoro" onClick={() => setOpen(false)}>Come lavoro</Link></li>
          <li><Link href="#servizi" onClick={() => setOpen(false)}>Servizi</Link></li>
          <li><Link href="#chi-aiuto" onClick={() => setOpen(false)}>Chi aiuto</Link></li>
          <li><Link href="#testimonials" onClick={() => setOpen(false)}>Fiducia</Link></li>
          <li className={styles.ctaMobile}>
            <Link href="#contatti" className={styles.cta} onClick={() => setOpen(false)}>
              Parliamone
            </Link>
          </li>
        </ul>

        <Link href="#contatti" className={`${styles.cta} ${styles.ctaDesktop}`}>
          Parliamone
        </Link>

        <button
          className={styles.burger}
          aria-label="Apri il menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={styles["navbar-border"]}></div>
    </>
  );
}
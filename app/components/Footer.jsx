import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />

      <div className={styles.row}>
        <div className={styles.contacts}>
          <h4 className={styles.contactsTitle}>Contatti</h4>
          <p className={styles.contactLine}>salatanico7@gmail.com</p>
          <p className={styles.contactLine}>+ 39 338 843 2743</p>
        </div>

        <p className={styles.tagline}>Consulenza energetica, spiegata semplice.</p>

        <p className={styles.copyright}>© 2026 · P.IVA IT05460850281</p>
      </div>
    </footer>
  );
}
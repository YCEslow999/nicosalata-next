import styles from "./Contact.module.css"
export default function Contact() {
    return (
        <section className={styles.section}>
            <div className={styles.banner}>
                <div className={styles.left}>
                    <span className={styles.eyebrow}>Richiedi una prima valutazione</span>
                    <h2 className={styles.title}>
                        Iniziamo dalla<br />
                        tua bolletta.
                    </h2>
                </div>


                <div className={styles.right}>
                    <p className={styles.text}>
                        Una foto su WhatsApp va benissimo. Ti rispondo con una prima
                        lettura gratuita e senza impegno.
                    </p>

                    <a
                        href="https://wa.me/393388432743"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cta}
                    >
                        Apri WhatsApp
                    </a>
                    <a href="mailto:salatanico7@gmail.com" className={styles.link}>
                        Oppure scrivi a salatanico7@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}
import styles from "./Why.module.css";
import { Zap, Radio, Users } from "lucide-react";


export default function Why () {
    return (
        <section className = {styles.section}>
            <div className = {styles.textCol}>
                <span className={styles.eyebrow}>Perché scegliermi</span>
                <h2 className={styles.title}>
                    Non ti vendo energia
                    <br />
                    <span className={styles.titleBlue}>Ti aiuto a <br />
                    capirla</span>    
                </h2>
            </div>


            <div className={styles.grid}>
                <div className={`${styles.card} ${styles.bigCard}`}>
                    <div className={styles.stat}>35%</div>
                    <h3 className={styles.cardTitle}>di risparmio medio trovato</h3>
                    <p className={styles.cardText}>
                        Non prometto magie. Controllo numeri, 
                        condizioni e consumi. Poi ti mostro le 
                        opportunità vere, nero su bianco.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconCircle}>
                        <Zap size={20} color="#fff"></Zap>
                    </div>
                    <h3 className={styles.cardTitle}>Veloce, sul serio</h3>
                    <p className={styles.cardText}>
                        Mi mandi la bolletta. Entro 24 ore hai una prima risposta
                        comprensibile.
                    </p>
                </div>

                <div className = {`${styles.card} ${styles.darkCard}`}>
                    <div className={`${styles.iconCircle} ${styles.iconCircleLight}`}>
                        <Radio size={20} color="#1e3a8a" />
                    </div>
                        <h3 className={styles.cardTitle}>Comunicazione chiara</h3>
                        <p className={styles.cardText}>
                            Ogni voce viene spiegata con precisione, evitando tecnicismi non
                            necessari.
                        </p>
                </div>


                <div className = {styles.card}>
                    <div className={styles.iconCircle}>
                        <Users size={20} color = "#fff" />
                    </div>
                    <h3 className={styles.cardTitle}>Dalla tua parte</h3>
                    <p className={styles.cardText}>
                        Nessuna provvigione nascosta. Il mio interesse è farti scegliere bene.
                    </p>
                </div>
            </div>
        </section>
    );
}
import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.textCol}>
            <span className={styles.eyebrow}>Consulente energetico</span>


            <h1 className={styles.title}>
                Risparmiare <br />
                sull'energia <br />
                <span className={styles.titleBlue}>con chiarezza</span>
            </h1>


            <p className={styles.subtitle}>
                Analizzo consumi, contratti e offerte per individuare soluzioni
                concrete, trasparenti e adatte alle tue esigenze
            </p>


            <div className = {styles.buttonWrapper}>
                <button className={styles.cta}>Mandami una bolletta</button>
            </div>
    
        </div>
        <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
                    <Image
                        src = "/hero-image.jpeg"
                        alt = "consulente energetico"
                        width = {800}
                        height = {800}
                        className = {styles.image}
                    ></Image>
            </div>
        </div>
    </section>
  );
}
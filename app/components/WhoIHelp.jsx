import styles from "./WhoIHelp.module.css";


const targets = [
    {
        title: "Famiglie",
        text: "Per smettere di scegliere offerte a caso"
    },
    {
        title: "PMI & negozi",
        text: "Per tenere i costi sotto controllo davvero"
    },
    {
        title: "Condomini",
        text: "Per fare chiarezza tra consumi, forniture e assemblee."
    }
];
export default function WhoIHelp() {
    return (
        <>
            <section className={styles.section}>
                <span className={styles.eyebrow}>Chi aiuto</span>
                <h2 className={styles.title}>
                    Se paghi una bolletta
                    <br />
                    Possiamo parlarne.
                </h2>

                <div className={styles.grid}>
                    {targets.map((item) => (
                        <div className={styles.card} key={item.title}>
                            <div className={styles.corner}></div>
                            <div className={styles.cardTitle}>{item.title}</div>
                            <p className={styles.cardText}>{item.text}</p>                            
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
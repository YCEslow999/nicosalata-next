import styles from "./Help.module.css";


const steps = [
    {
        number: "1",
        title: "Analisi bollette",
        text: "Leggo quello che non torna e ti dico, in modo semplice, dove stai spendendo troppo.",
    },

    {
        number: "2",
        title: "Confronto offerte",
        text: "Metto le proposte una accanto all'altra. Niente asterischi, niente sorprese.",
  
    },

    {
        number: "3",
        title: "Contratti più leggeri",
        text: "Ottimizzo costi, potenza e condizioni in base a come consumi davvero.",
 
    },

    {
        number: "4",
        title: "Ci sono anche dopo",
        text: "Dubbi, volture, rinnovi: non sparisco appena hai firmato.",
  
    },
];


export default function Help () {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className={styles.eyebrow}>Come posso aiutarti</span>
                        <h2 className={styles.title}>
                            Quattro modi per
                            <br />
                            <span className={styles.titleBlue}>allegerire i costi.</span>
                        </h2>
                    </div>

                    <p className={styles.headerRight}>
                        Casa, azienda o condominio: partiamo sempre dai tuoi numeri, 
                        non da un pacchetto già pronto.
                    </p>
                </div>


                <div className={styles.list}>
                    {steps.map((step) =>(
                        <div className={styles.row} key={step.number}>
                            <span className={styles.number}>{step.number}</span>
                            <h3 className={styles.rowTitle}>{step.title}</h3>
                            <p className={styles.rowText}>{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}


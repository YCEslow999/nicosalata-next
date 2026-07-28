"use client";

import styles from "./Carousel.module.css";
import { useState } from "react";

const testimonials = [
    {
        quote: "Per la prima volta qualcuno mi ha spiegato una bolletta senza farmi sentire stupido. E abbiamo tagliato i costi del 28%.",
        name: "Marco Bianchi",
        role: "Titolare di una piccola impresa",
        initials: "MB"
    },

    {
        quote: "Gestire le utenze di più condomìni era complicato. Ora ho dati chiari, meno contestazioni e risparmi concreti da presentare in assemblea.",
        name: "Antonio Rossi",
        role: "Amministratore di condomìni",
        initials: "AR"
    },

    {
        quote: "Da quando ci hanno aiutati, capiamo finalmente ogni voce della bolletta. Ora spendiamo meno e gestiamo serenamente il bilancio familiare mensile.",
        name: "Sara Luce",
        role: "Mamma a tempo pieno",
        initials: "SL"
    }
];

export default function Carousel() {

    const [active, setActive] = useState(0);

    return (
        <section className = {styles.section}>
            <div className = {styles.card}>
                <div className = {styles.stars}>★★★★★</div>
                <p className = {styles.quote}>&ldquo;{testimonials[active].quote}&rdquo;</p>

                <div className={styles.author}>
                    <span className={styles.avatar}>{testimonials[active].initials}</span>
                    <div className={styles.authorInfo}>
                        <span className={styles.authorName}>{testimonials[active].name}</span>
                        <span className={styles.authorRole}>{testimonials[active].role}</span>
                    </div>
                </div>
            

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button 
                            key={index}
                            className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
                            onClick={() => setActive(index)}
                        />
                    ))}
                </div>
            </div>
        </section>        
    );
}
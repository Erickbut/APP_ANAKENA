// src/components/Section.jsx
import React from 'react';
import styles from '../styles/Section.module.css'; // Asegúrate de importar el CSS correctamente

const Section = ({ title, children }) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{children}</p>
        </div>
    );
};

export default Section;

// src/components/Section.jsx
import React from 'react';
import styles from '../styles/Section.module.css'; // Asegúrate de importar el CSS correctamente

const Section = ({ title, children }) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.text}>{children}</div>
        </div>
    );
};

export default Section;

// src/components/Section.jsx
import React from 'react';
import styles from '../styles/Section.module.css';

const Section = ({ title, icon, children }) => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                {icon && <img src={icon} alt={`${title} icon`} className={styles.icon} />}
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.content}>{children}</div>
        </section>
    );
};

export default Section;

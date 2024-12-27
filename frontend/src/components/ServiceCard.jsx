// src/components/ServiceCard.jsx
import React from 'react';
import styles from '../styles/ServiceCard.module.css';

const ServiceCard = ({ image, title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
                <div className={styles.overlay}>
                    <h3 className={styles.title}>{title}</h3>
                </div>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default ServiceCard;

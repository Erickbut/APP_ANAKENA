import React from 'react';
import styles from '../styles/Footer.module.css';  // O la ruta correspondiente de tu CSS

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/bordeloaryh/profilecard/?igsh=bjBudzFzcHVrN3hm" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i> {/* Icono de Instagram */}
                </a>
                <a href="https://www.facebook.com/profile.php?id=100080006257999&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i> {/* Icono de Facebook */}
                </a>
            </div>
            <div className={styles.copyRights}>
                <p>&copy; 2024 Hotel Anakena Borde Loa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;

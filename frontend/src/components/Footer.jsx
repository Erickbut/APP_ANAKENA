import React from 'react';
import styles from '../styles/Footer.module.css'; // O la ruta correspondiente de tu CSS

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <a
                    href="https://www.instagram.com/bordeloaryh/profilecard/?igsh=bjBudzFzcHVrN3hm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <i className="fa-brands fa-instagram"></i> {/* Icono de Instagram */}
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100080006257999&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <i className="fab fa-facebook-f"></i> {/* Icono de Facebook */}
                </a>
                <a
                    href="https://wa.me/56942781336"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                >
                    <i className="fab fa-whatsapp"></i> {/* Icono de WhatsApp */}
                </a>
                <a
                    href="mailto:reservas@anakenabordeloa.cl"
                    aria-label="Email"
                >
                    <i className="fa fa-envelope"></i> {/* Icono de Email */}
                </a>
            </div>
            <div className={styles.copyRights}>
                <p>&copy; 2024 Hotel y Restaurante Anakena Borde Loa. Todos los derechos reservados.</p>
                {/* Enlace a la política de privacidad */}
                <p>
                    <a href="/privacy-policy" className={styles.privacyLink}>
                        Política de privacidad
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

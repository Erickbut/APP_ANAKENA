import React from 'react';
import styles from '../styles/Location.module.css';

const Location = () => {
    return (
        <section id="location" className={styles.locationContainer}>
            <h2 className={styles.title}>Ubicación</h2>
            <p className={styles.address}>Dirección: Avenida La Paz 247, Calama, Chile</p>
            <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.032214865986!2d-68.90735742404193!3d-22.465423679568225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ac09d205a92b55%3A0x55f90be33e5e02d4!2sHotel%20Noi%20Borde%20Loa!5e0!3m2!1ses-419!2scl!4v1735416257301!5m2!1ses-419!2scl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default Location;

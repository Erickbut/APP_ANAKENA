import React from 'react';
import styles from '../styles/Rates.module.css';

const Rates = () => {
    const rates = [
        { days: "Lunes a Miércoles", single: "$68.000 + IVA", double: "$75.000 + IVA" },
        { days: "Jueves y Viernes", single: "$60.500 + IVA", double: "$65.000 + IVA" },
        { days: "Sábados y Domingos", single: "$40.500 + IVA", double: "$55.000 + IVA" },
    ];

    const handleReservation = (roomType, price) => {
        const message = `Hola, me interesa reservar una habitación ${roomType} por ${price}. ¿Está disponible?`;
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/56942781336?text=${encodedMessage}`;
    };

    return (
        <div className={styles.ratesContainer}>
            <h2 className={styles.title}>Tarifas</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Días</th>
                        <th>Habitación Single</th>
                        <th>Habitación Doble</th>
                    </tr>
                </thead>
                <tbody>
                    {rates.map((rate, index) => (
                        <tr key={index}>
                            <td>{rate.days}</td>
                            <td>
                                {rate.single}
                                <a
                                    href={handleReservation("Single", rate.single)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappLink}
                                    title={`Reservar habitación Single`}
                                >
                                    <img
                                        src="/images/whatsapp.png"
                                        alt="Reservar en WhatsApp"
                                        className={styles.whatsappIcon}
                                    />
                                </a>
                            </td>
                            <td>
                                {rate.double}
                                <a
                                    href={handleReservation("Doble", rate.double)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappLink}
                                    title={`Reservar habitación Doble`}
                                >
                                    <img
                                        src="/images/whatsapp.png"
                                        alt="Reservar en WhatsApp"
                                        className={styles.whatsappIcon}
                                    />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Rates;

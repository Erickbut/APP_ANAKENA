import React from 'react';
import styles from '../styles/RoomCard.module.css';

const RoomCard = ({ title, images, description, amenities }) => {
    const iconMap = {
        "Wi-Fi gratuito": "fa-wifi",
        "TV con DirecTV": "fa-tv",
        "Calentadores": "fa-fire-alt",
        "Baño incluido": "fa-bath",
        "Servicio a la habitación": "fa-concierge-bell",
        "Desayuno buffet": "fa-utensils"
    };

    return (
        <div className={styles.card}>
            <div className={styles.slider}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`${title} ${index + 1}`} className={styles.image} />
                ))}
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.amenities}>
                    {amenities.map((amenity, index) => (
                        <li key={index} className={styles.amenity}>
                            <i className={`fa-solid ${iconMap[amenity] || 'fa-circle'}`}></i> {amenity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RoomCard;

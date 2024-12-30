// src/components/Services.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import styles from '../styles/Services.module.css';

const Services = () => {
    const services = [
        {
            title: "Eventos Sociales",
            image: "/images/birthday.jpg",
            description: "Celebra bodas, cumpleaños y más en nuestros salones decorados con estilo.",
        },
        {
            title: "Reuniones Empresariales",
            image: "/images/socialevent.jpeg",
            description: "Habitaciones decoradas para reuniones, coffee break, servicio de catering empresarial.",
        },
        {
            title: "Cenas con Música en vivo",
            image: "/images/musicavivo.jpg",
            description: "Disfruta una cena familiar con música en vivo y piano todos los viernes.",
        },
        {
            title: "Atención personalizada",
            image: "/images/musicavivo.jpg",
            description: "Vive experiencias inolvidables con una atención única en el restobar.",
        },
        // Agrega más servicios si es necesario
    ];

    return (
        <div className={styles.container}>
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    );
};

export default Services;

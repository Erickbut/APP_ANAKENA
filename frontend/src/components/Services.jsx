// src/components/Services.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import styles from '../styles/Services.module.css';

const Services = () => {
    const services = [
        {
            title: "Eventos Sociales",
            image: "/images/birthday.jpg",
            description: "Organizamos cumpleaños, bodas y celebraciones en nuestras instalaciones.",
        },
        {
            title: "Reuniones Empresariales",
            image: "/images/socialevent.jpeg",
            description: "Amplios salones ambientados para buffets, coffee breaks, reuniones, servicios de catering empresarial y más.",
        },
        {
            title: "Cenas con Música en vivo",
            image: "/images/musicavivo.jpg",
            description: "Disfruta una cena familiar con música de piano en vivo, canto y karaoke todos los viernes.",
        },
        {
            title: "Atención personalizada",
            image: "/images/atencionpers.jpg",
            description: "Vive experiencias únicas con una atención personalizada en el restobar.",
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

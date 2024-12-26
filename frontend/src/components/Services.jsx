// src/components/Services.jsx
import React from 'react';

const Services = () => {
    const services = [
        "Wi-Fi gratuito",
        "Restaurante 24 horas",
        "Gimnasio",
        "Piscina",
        // Agrega más servicios
    ];

    return (
        <section id="services">
            <h2>Servicios</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </section>
    );
};

export default Services;

// src/components/Rates.jsx
import React from 'react';

const Rates = () => {
    const rates = [
        { type: "Standard", price: "$80" },
        { type: "Suite", price: "$150" },
        // Agrega más tipos de tarifas
    ];

    return (
        <section id="rates">
            <h2>Tarifas</h2>
            <div>
                {rates.map((rate, index) => (
                    <div key={index}>
                        <h3>{rate.type}</h3>
                        <p>Precio: {rate.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Rates;

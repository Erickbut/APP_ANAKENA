// src/components/Location.jsx
import React from 'react';

const Location = () => {
    return (
        <section id="location">
            <h2>Ubicación</h2>
            <p>Dirección: Calle Ficticia 123, Calama, Chile</p>
            <iframe
                width="100%"
                height="450"
                src="https://www.google.com/maps/embed/v1/place?q=Hotel+Borde+Loa,+Calama,+Chile&key=YOUR_API_KEY"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
            ></iframe>
        </section>
    );
};

export default Location;

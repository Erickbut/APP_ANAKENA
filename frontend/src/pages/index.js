// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import Section from '../components/Section';
import Rooms from '../components/Rooms';
import Services from '../components/Services';
import Rates from '../components/Rates';
import Location from '../components/Location';
import Contact from '../components/Contact';

function HomePage() {
    return (
        <div>
            <Navbar />
            <ImageSlider />
            <div className='hotel_vision'>
                <Section title="Misión">
                    <p>La misión del Hotel Borde Loa es ofrecer comodidad y servicio de calidad...</p>
                </Section>
                <Section title="Visión">
                    <p>Ser el hotel preferido en la región de Calama...</p>
                </Section>
                <Section title="Historia">
                    <p>Fundado en 1995, el Hotel Borde Loa se ha consolidado como un lugar...</p>
                </Section>
            </div>

            <div id="rooms">
                <h2>Habitaciones</h2>
                <Rooms />
            </div>
            <div id="services">
                <h2>Nuestros Servicios</h2>
                <Services />
            </div>
            <Rates />
            <Location />
            <Contact />

        </div>
    );
}

export default HomePage;

// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import Section from '../components/Section';

function HomePage() {
    return (
        <div style={{ paddingTop: '4rem' }}> {/* Agrega padding-top para evitar que el Navbar tape el contenido */}
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
        </div>
    );
}

export default HomePage;

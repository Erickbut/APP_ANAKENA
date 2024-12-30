// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import Section from '../components/Section';
import Rooms from '../components/Rooms';
import Services from '../components/Services';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div>
            <Navbar />
            <ImageSlider />
            <div className='hotel_vision'>
                <Section title="Misión">
                    <p>Ofrecer una experiencia hotelera única y auténtica a nuestros huéspedes, reflejando la belleza y tranquilidad del Desierto de Atacama. Combinamos el confort moderno con la calidez de nuestro entorno, brindando un refugio acogedor para viajeros que buscan explorar la región.</p>
                </Section>
                <Section title="Visión">
                    <p>Ser reconocidos como el hotel de referencia en Calama, destacando por nuestra excelencia en el servicio, la calidad de nuestras instalaciones y nuestro compromiso con la sostenibilidad. Queremos ser el punto de partida ideal para descubrir los encantos del Desierto de Atacama.</p>
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

            <Location />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;

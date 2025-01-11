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
                    <p>Ofrecer una experiencia hotelera única y auténtica a nuestros huéspedes, reflejando la belleza y tranquilidad del Desierto de Calama. Combinamos el confort moderno con la calidez de nuestro entorno, brindando un refugio acogedor para viajeros que buscan explorar la región.</p>
                </Section>
                <Section title="Visión">
                    <p>Ser reconocidos como el hotel de referencia en Calama, destacando por nuestra excelencia en el servicio, la calidad de nuestras instalaciones y nuestro compromiso con la sostenibilidad. Queremos ser el punto de partida ideal para descubrir los encantos de la comuna Calameña.</p>
                </Section>
                <Section title="Anakena Borde Loa: Un Oasis en el desierto">
                    <p>
                        Anakena Borde Loa es mucho más que un simple hotel; es una experiencia inmersiva en el corazón del desierto más árido del mundo. Su diseño arquitectónico, inspirado en los colores y texturas de la zona, crea una armonía perfecta entre el hombre y la naturaleza.
                        El Hotel Anakena Borde Loa se destaca por su arquitectura que se integra de manera natural al paisaje desértico. El uso de materiales locales como adobe, madera y piedra aporta una sensación de calidez y autenticidad.
                        Ademas cuenta con un restaurante que ofrece una deliciosa propuesta culinaria basada en productos locales, rescatando las tradiciones gastronómicas Calameñas.

                    </p>
                </Section>
            </div>

            <div id="rooms">
                <h2 className="titleh">Habitaciones</h2>
                <Rooms />
            </div>
            <div id="services">
                <h2 className="titleh">Nuestros Servicios</h2>
                <Services />
            </div>

            <Location />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;

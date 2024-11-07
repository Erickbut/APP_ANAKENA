// src/pages/services.js
import Navbar from '../components/Navbar';

function ServicesPage() {
    const services = [
        "Wi-Fi gratuito",
        "Restaurante 24 horas",
        "Gimnasio",
        "Piscina",
        // Agrega más servicios
    ];

    return (
        <div>
            <Navbar />
            <h1>Servicios</h1>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    );
}

export default ServicesPage;

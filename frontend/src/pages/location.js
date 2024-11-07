// src/pages/location.js
import Navbar from '../components/Navbar';

function LocationPage() {
    return (
        <div>
            <Navbar />
            <h1>Ubicación</h1>
            <p>Dirección: Calle Ficticia 123, Calama, Chile</p>
            <iframe
                width="600"
                height="450"
                src="https://www.google.com/maps/embed/v1/place?q=Hotel+Borde+Loa,+Calama,+Chile&key=YOUR_API_KEY"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

export default LocationPage;

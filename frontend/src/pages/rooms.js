// src/pages/rooms.js
import Navbar from '../components/Navbar';

function RoomsPage() {
    const rooms = [
        { name: "Habitación Standard", price: "$80", description: "Una habitación sencilla y cómoda." },
        { name: "Habitación Suite", price: "$150", description: "Con vista panorámica y mayor espacio." },
        // Agrega más habitaciones
    ];

    return (
        <div>
            <Navbar />
            <h1>Habitaciones</h1>
            <div>
                {rooms.map((room, index) => (
                    <div key={index}>
                        <h3>{room.name}</h3>
                        <p>{room.description}</p>
                        <p>Precio: {room.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RoomsPage;

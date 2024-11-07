// src/pages/rates.js
import Navbar from '../components/Navbar';

function RatesPage() {
    const rates = [
        { type: "Standard", price: "$80" },
        { type: "Suite", price: "$150" },
        // Agrega más tipos de tarifas
    ];

    return (
        <div>
            <Navbar />
            <h1>Tarifas</h1>
            <div>
                {rates.map((rate, index) => (
                    <div key={index}>
                        <h3>{rate.type}</h3>
                        <p>Precio: {rate.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RatesPage;

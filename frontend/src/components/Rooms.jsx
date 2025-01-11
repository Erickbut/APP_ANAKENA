// src/components/Rooms.jsx
import React from 'react';
import RoomCard from './RoomCard';
import styles from '../styles/Rooms.module.css';

const Rooms = () => {
    const rooms = [
        {
            title: "Habitación simple o matrimonial",
            images: ["/images/single1.jpg", "/images/single2.jpg", "/images/single3.jpg", "/images/single4.jpg", "/images/single5.jpg", "/images/bathroom1.jpg"],
            description: "Ideal para una persona o pareja.",
            amenities: [
                "Wi-Fi gratuito",
                "TV con DirecTV",
                "Calentadores",
                "Baño incluido",
                "Servicio a la habitación",
                "Desayuno buffet"
            ]
        },
        {
            title: "Habitación doble",
            images: ["/images/twin1.jpg", "/images/twin2.jpg", "/images/bathtwin.jpg", "/images/bathtwin2.jpg"],
            description: "Ideal para dos personas o dos adultos y un menor que buscan comodidad.",
            amenities: [
                "Wi-Fi gratuito",
                "TV con DirecTV",
                "Calentadores",
                "Baño incluido",
                "Servicio a la habitación",
                "Desayuno buffet"
            ]
        }
    ];

    return (
        <div className={styles.container}>
            {rooms.map((room, index) => (
                <RoomCard
                    key={index}
                    title={room.title}
                    images={room.images}
                    description={room.description}
                    amenities={room.amenities}
                />
            ))}
        </div>
    );
};

export default Rooms;

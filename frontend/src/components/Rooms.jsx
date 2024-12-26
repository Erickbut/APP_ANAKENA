// src/components/Rooms.jsx
import React from 'react';
import RoomCard from './RoomCard';
import styles from '../styles/Rooms.module.css';

const Rooms = () => {
    const rooms = [
        {
            title: "Single Room",
            images: ["/images/single1.jpg", "/images/single2.jpg", "/images/single3.jpg"],
            description: "Una habitación perfecta para viajeros individuales.",
            amenities: [
                "Wi-Fi gratuito",
                "TV con DirecTV",
                "Calentadores",
                "Baño incluido",
                "Desayuno buffet"
            ]
        },
        {
            title: "Double Room",
            images: ["/images/double1.jpg", "/images/double2.jpg", "/images/double3.jpg"],
            description: "Ideal para parejas o dos personas que buscan comodidad.",
            amenities: [
                "Wi-Fi gratuito",
                "TV con DirecTV",
                "Calentadores",
                "Baño incluido",
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

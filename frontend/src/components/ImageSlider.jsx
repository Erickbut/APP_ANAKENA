// src/components/ImageSlider.jsx

import React, { useState, useEffect } from 'react';
import styles from '../styles/ImageSlider.module.css';

const images = [
    '/images/portada.png',
    '/images/rest.jpg',
    '/images/caption.jpg',
    '/images/entrada_cool.jpg',
    '/images/atrasquincho.jpg',
    '/images/pasillorecepcion.jpg',
    // Agrega las rutas de tus imágenes aquí
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-deslizamiento con useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 4000); // Cambia de imagen cada 4 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [currentIndex]);

    return (
        <div className={styles.slider}>
            {/* Flecha izquierda */}
            <button className={styles.leftArrow} onClick={goToPrevious}>
                ‹
            </button>

            {/* Contenedor de la imagen */}
            <div className={styles.imageContainer}>
                <img
                    src={images[currentIndex]}
                    alt={`Imagen ${currentIndex + 1}`}
                    className={styles.image}
                />
            </div>

            {/* Flecha derecha */}
            <button className={styles.rightArrow} onClick={goToNext}>
                ›
            </button>

            {/* Indicadores (círculos) */}
            <div className={styles.indicators}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.active : ''
                            }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;

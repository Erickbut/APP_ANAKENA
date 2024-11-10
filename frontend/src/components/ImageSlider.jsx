// src/components/ImageSlider.jsx
import React, { useState } from 'react';
import styles from '../styles/ImageSlider.module.css';

const images = [
    '/images/portada.png',
    '/images/rest.jpg',
    '/images/caption.jpg',
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

    return (
        <div className={styles.slider}>
            <button className={styles.leftArrow} onClick={goToPrevious}>‹</button>
            <div className={styles.imageContainer}>
                <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className={styles.image} />
            </div>
            <button className={styles.rightArrow} onClick={goToNext}>›</button>
        </div>
    );
};

export default ImageSlider

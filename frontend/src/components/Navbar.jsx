import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = 0;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scroll hacia abajo: Oculta el navbar
                setIsVisible(false);
            } else {
                // Scroll hacia arriba: Muestra el navbar
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''} ${isVisible ? styles.visible : styles.hidden
            }`}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/images/logoanakena.png" alt="Logo de Borde Loa" width={100} height={100} />
                </Link>
                <h1 className={styles.absolute}>|</h1>
                <h1 className={styles.phrase}>
                    IQUIQUE <br />
                    ANTOFAGASTA <br />
                    CALAMA
                </h1>
            </div>

            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                <li><Link href="/" onClick={toggleMenu}>Inicio</Link></li>
                <li><a href="#rooms" onClick={toggleMenu}>Habitaciones</a></li>
                <li><a href="#services" onClick={toggleMenu}>Servicios</a></li>
                <li><a href="#rates" onClick={toggleMenu}>Tarifas</a></li>
                <li><a href="#location" onClick={toggleMenu}>Ubicación</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
            </ul>
            <button
                className={styles.bookButton}
                onClick={() => window.open("https://wa.link/i2set3", "_blank")}
            >
                Reservar
            </button>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;

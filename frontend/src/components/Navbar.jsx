import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scroll hacia abajo
                setIsVisible(false);
            } else {
                // Scroll hacia arriba
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`${styles.navbar} ${isMenuOpen ? styles.active : ''} ${
                isVisible ? styles.visible : styles.hidden
            }`}
        >
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/images/logoanakena.png"
                        alt="Logo de Borde Loa"
                        width={100}
                        height={100}
                    />
                </Link>
                <h1 className={styles.absolute}>|</h1>
                <h1 className={styles.phrase}>
                    IQUIQUE <br />
                    ANTOFAGASTA <br />
                    CALAMA
                </h1>
            </div>

            <ul
                className={`${styles.navLinks} ${
                    isMenuOpen ? styles.showMenu : ''
                }`}
            >
                <li>
                    <Link href="/" onClick={toggleMenu}>
                        <h3>Inicio</h3>
                    </Link>
                </li>
                <li>
                    <Link href="/rates" onClick={toggleMenu}>
                        <h3>Tarifas</h3>
                    </Link>
                </li>
                <li>
                    <a href="/#rooms" onClick={toggleMenu}>
                        <h3>Habitaciones</h3>
                    </a>
                </li>
                <li>
                    <a href="/#services" onClick={toggleMenu}>
                        <h3>Servicios</h3>
                    </a>
                </li>
                <li>
                    <a href="/#location" onClick={toggleMenu}>
                        <h3>Ubicación</h3>
                    </a>
                </li>
                <li>
                    <a href="/#contact" onClick={toggleMenu}>
                        <h3>Contacto</h3>
                    </a>
                </li>
            </ul>
            <button
                className={styles.bookButton}
                onClick={() => window.open('https://wa.link/i2set3', '_blank')}
            >
                <div className={styles.reserve}>Reservar</div>
            </button>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;

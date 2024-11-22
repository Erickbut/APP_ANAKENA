import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/images/LOGOBORDELOA.jpg" alt="Logo de Borde Loa" width={100} height={100} />
                </Link>
            </div>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                <li><Link href="/" onClick={toggleMenu}>Inicio</Link></li>
                <li><Link href="/rooms" onClick={toggleMenu}>Habitaciones</Link></li>
                <li><Link href="/services" onClick={toggleMenu}>Servicios</Link></li>
                <li><Link href="/rates" onClick={toggleMenu}>Tarifas</Link></li>
                <li><Link href="/location" onClick={toggleMenu}>Ubicación</Link></li>
                <li><Link href="/contact" onClick={toggleMenu}>Contacto</Link></li>
            </ul>
            <button className={styles.bookButton}>Reservar</button>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;

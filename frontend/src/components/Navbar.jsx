import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">Borde Loa</Link>
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/rooms">Habitaciones</Link></li>
                <li><Link href="/services">Servicios</Link></li>
                <li><Link href="/rates">Tarifas</Link></li>
                <li><Link href="/location">Ubicación</Link></li>
                <li><Link href="/contact">Contacto</Link></li>
            </ul>
            <button className={styles.bookButton}>Reservar</button>
        </nav>
    );
};

export default Navbar;

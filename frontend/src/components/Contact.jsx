import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.message) {
            // Creamos el enlace mailto con los valores del formulario
            const mailtoLink = `mailto:reservas@anakenabordeloa.cl?subject=Mensaje%20de%20Contacto&body=Nombre:%20${encodeURIComponent(form.name)}%0AEmail:%20${encodeURIComponent(form.email)}%0AMensaje:%20${encodeURIComponent(form.message)}`;
            window.location.href = mailtoLink; // Redirige a la aplicación de correo
            setIsSubmitted(true); // Cambiar estado a enviado
            setForm({ name: '', email: '', message: '' }); // Reinicia el formulario
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };

    return (
        <section id="contact" className={styles.contactContainer}>
            <h2 className={styles.title}>Contacto</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Tu correo"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí"
                        required
                    ></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Enviar</button>
            </form>
            {isSubmitted && <p className={styles.thankYouMessage}>Gracias por escribirnos. Nos pondremos en contacto contigo pronto.</p>}
        </section>
    );
};

export default Contact;

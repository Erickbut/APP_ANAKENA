// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías hacer una solicitud a un backend para procesar el formulario
        console.log('Formulario enviado:', form);
        alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
        setForm({ name: '', email: '', message: '' }); // Reinicia el formulario
    };

    return (
        <section id="contact">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div>
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
                <div>
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
                <div>
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
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;

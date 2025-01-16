import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/privacy-policy.module.css';

const PrivacyPolicy = () => {
    return (
        <div>
            <Head>
                <title>Política de Privacidad - Anakena Borde Loa</title>
            </Head>
            <Navbar />
            <div className="policy-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1>Política de Privacidad</h1>
                <p>Tu privacidad es importante para nosotros. Aquí puedes encontrar detalles sobre cómo manejamos los datos personales.</p>
                <p>
    <strong>1. Introducción</strong><br/>
    En Anakena Borde Loa (en adelante, “nosotros” o “el hotel”), nos comprometemos a proteger y respetar tu privacidad. Esta política de privacidad explica cómo recogemos, usamos, compartimos y protegemos tus datos personales cuando visitas nuestro sitio web o utilizas nuestros servicios en línea, como el sistema de reservas y contacto.
</p>

<p>
    <strong>2. Datos Recogidos</strong><br/>
    Recopilamos los siguientes datos personales:
</p>

<ul>
    <li><strong>Nombre y correo electrónico:</strong> Estos datos se recogen cuando un usuario llena el formulario de contacto o realiza una reserva a través del correo electrónico.</li>
    <li><strong>Número de teléfono:</strong> Este dato se recoge si un usuario realiza una reserva a través de WhatsApp o si decide contactarnos para más información.</li>
</ul>

<p>
    <strong>3. Uso de los Datos</strong><br/>
    Usamos tus datos personales para los siguientes fines:
</p>

<ul>
    <li>Para procesar las reservas y enviarte confirmaciones o información relacionada con tu estancia.</li>
    <li>Para responder a consultas o solicitudes realizadas a través de nuestro formulario de contacto.</li>
    <li>Para mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web.</li>
</ul>

<p>
    <strong>4. Cookies</strong><br/>
    Usamos cookies para mejorar la experiencia de navegación y analizar el tráfico de nuestro sitio web. Al aceptar esta política, consientes el uso de cookies en nuestra página. Puedes encontrar más información sobre cómo utilizamos cookies en nuestra <a href="/privacy-policy">Política de Cookies</a>.
</p>

<p>
    <strong>5. Seguridad de los Datos</strong><br/>
    Implementamos medidas de seguridad para proteger tus datos personales de accesos no autorizados, modificaciones o divulgación indebida. Sin embargo, ten en cuenta que ninguna transmisión de datos a través de Internet es completamente segura.
</p>

<p>
    <strong>6. Terceros</strong><br/>
    No compartimos tus datos personales con terceros, excepto cuando sea necesario para la provisión de nuestros servicios (por ejemplo, con el proveedor de WhatsApp para las reservas). También podemos compartir tus datos cuando sea requerido por la ley.
</p>

<p>
    <strong>7. Derechos del Usuario</strong><br/>
    Tienes derecho a:
</p>

<ul>
    <li>Acceder, corregir o eliminar tus datos personales.</li>
    <li>Oponerte al tratamiento de tus datos personales, bajo ciertas condiciones.</li>
    <li>Solicitar la portabilidad de tus datos, en caso de que desees transferirlos a otro proveedor.</li>
</ul>

<p>
    Para ejercer estos derechos, puedes enviarnos un correo a <a href="mailto:administracion@anakenabordeloa.cl">administracion@anakenabordeloa.cl</a>.
</p>

<p>
    <strong>8. Enlaces a Otros Sitios Web</strong><br/>
    Nuestro sitio web puede contener enlaces a otros sitios web que no están bajo nuestro control. No nos hacemos responsables de la privacidad ni de las prácticas de estos sitios web. Te recomendamos leer sus políticas de privacidad antes de proporcionar cualquier tipo de información.
</p>

<p>
    <strong>9. Cambios a la Política de Privacidad</strong><br/>
    Nos reservamos el derecho de modificar esta política en cualquier momento. Cualquier cambio será publicado en esta página y, si es necesario, se te notificará.
</p>

<p>
    <strong>10. Contacto</strong><br/>
    Si tienes alguna pregunta o inquietud acerca de esta política de privacidad o del uso de tus datos, por favor, contáctanos a través de <a href="mailto:administracion@anakenabordeloa.cl">administracion@anakenabordeloa.cl</a> o por WhatsApp al +56 9 4278 1336.
</p>

            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;

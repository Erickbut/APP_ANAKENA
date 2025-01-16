import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Head from 'next/head';
import '../styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }) {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya aceptó las cookies previamente
        const cookiesStatus = localStorage.getItem("cookiesAccepted");
        if (cookiesStatus === "true") {
            setCookiesAccepted(true);
        }
    }, []);

    // Maneja la aceptación de las cookies
    const handleAcceptCookies = () => {
        setCookiesAccepted(true);
        localStorage.setItem("cookiesAccepted", "true");
    };

    // Maneja el rechazo de las cookies
    const handleDeclineCookies = () => {
        setCookiesAccepted(false);
        localStorage.setItem("cookiesAccepted", "false");
        console.log("Cookies rechazadas"); // Esto es para probar, puedes eliminarlo si no lo necesitas
    };

    return (
        <>
            <Head>
                <title>ANAKENA HOTELES, CHILE</title>
                <link rel="icon" href="/images/flavico.jpg" />
            </Head>
            <Component {...pageProps} />

            {/* Banner de cookies */}
            <CookieConsent
                location="bottom"
                buttonText="Aceptar"
                declineButtonText="Rechazar"
                enableDeclineButton
                cookieName="anakenaCookies"
                style={{ background: "#2B373B", color: "#fff" }}
                buttonStyle={{ backgroundColor: "#b1480b", color: "#fff", fontSize: "14px", border: "none", padding: "0.5rem 1rem", borderRadius: "5px" }}
                declineButtonStyle={{ backgroundColor: "#aaa", color: "#fff", fontSize: "14px", border: "none", padding: "0.5rem 1rem", borderRadius: "5px" }}
                onAccept={handleAcceptCookies}
                onDecline={handleDeclineCookies}  // Aquí se usa el método handleDeclineCookies
            >
                Usamos cookies para mejorar tu experiencia y analizar nuestro tráfico.{" "}
                <a href="/privacy-policy" style={{ color: "#b1480b", textDecoration: "underline" }}>
                    Más información
                </a>.
            </CookieConsent>
        </>
    );
}

export default MyApp;

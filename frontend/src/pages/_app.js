import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Hotel Anakena Borde Loa - Calama, Chile</title>
                <link rel="icon" href="/images/flavico.jpg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

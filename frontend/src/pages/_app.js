import Head from 'next/head';
import '../styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>ANAKENA HOTELES, CHILE</title>
                <link rel="icon" href="/images/flavico.jpg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Aquí puedes agregar otras etiquetas necesarias, pero no meta viewport */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

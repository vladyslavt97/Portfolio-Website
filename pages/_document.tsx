import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Add the link to the font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Sans&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-white h-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

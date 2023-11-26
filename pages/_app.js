import Head from 'next/head';

import '../styles/global.css';

export default function App({ Component, pageProps })
{
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
                <title>NFTime Back Office</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

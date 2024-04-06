import Head from 'next/head';

import '../styles/global.css';
import '../styles/design-system.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/*<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>*/}
        <title>CERTI Back Office</title>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='70x70'
          href='/favicon/ms-icon-70x70.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='144x144'
          href='/favicon/ms-icon-144x144.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='150x150'
          href='/favicon/ms-icon-150x150.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='310x310'
          href='/favicon/ms-icon-310x310.png'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

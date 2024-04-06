import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            as='style'
            crossOrigin='true'
            href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css'
          />
        </Head>
        <body data-theme='light'>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

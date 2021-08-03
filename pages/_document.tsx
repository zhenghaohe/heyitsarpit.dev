/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/images/icon-48x48.png" />
          <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
          <link rel="manifest" href="/manifest.json" />
          {/* <Script src="/scripts/setColorTheme.js" strategy="beforeInteractive" /> */}
          <Script async src="https://cdn.splitbee.io/sb.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

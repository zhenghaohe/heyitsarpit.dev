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
          <Script async src="https://cdn.splitbee.io/sb.js" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `var e,a;e=document.body.classList,(a=localStorage.getItem("theme"))?e.add(a.replace(/"/g,"")):window.matchMedia("(prefers-color-scheme: dark)").matches?e.add("dark"):e.add("light");`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

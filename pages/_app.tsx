if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import '../public/styles/font.css';
import '../public/styles/global.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout';
import { SEO } from '../components/SEO';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

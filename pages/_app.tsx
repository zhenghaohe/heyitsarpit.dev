import '../public/styles/font.css';
import '../public/styles/normalize.css';
import '../public/styles/global.css';

import { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import Layout from '../components/Layout';
import { ScrollProvider } from '../components/ScrollProvider';
import SEO from '../next-seo.config';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <ScrollProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollProvider>
    </>
  );
};

export default MyApp;

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

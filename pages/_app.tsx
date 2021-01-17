import '../public/styles/global.css';
import '../public/styles/normalize.css';
import '../public/styles/font.css';

import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { ScrollProvider } from '../components/ScrollProvider';
import SEO from '../next-seo.config';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
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

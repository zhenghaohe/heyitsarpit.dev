import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import SEO from '../next-seo.config';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

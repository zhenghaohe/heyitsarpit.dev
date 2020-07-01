import { AppProps } from 'next/app';

import Layout from '../components/Layout';
import Meta from '../components/Meta';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Meta />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default MyApp;

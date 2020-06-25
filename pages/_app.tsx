import { AppProps } from 'next/app';

import Meta from '../components/Meta';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Meta />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;

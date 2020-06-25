import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import Meta from '../components/Meta';
import store from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Meta />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default MyApp;

import Head from 'next/head';

const Meta: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>NextJS Template</title>
            <meta name="theme-color" content="rgb(30,30,30)" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="/styles/normalize.css" />
            <link rel="stylesheet" type="text/css" href="/styles/global.css" />
            <link
                href="https://fonts.googleapis.com/css?family=Inter|Fira+Mono&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};

export default Meta;

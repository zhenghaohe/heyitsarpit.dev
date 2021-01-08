import Head from 'next/head';

const Meta: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/icon-48x48.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Fira+Code:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Meta;

import Head from 'next/head';

const Meta: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="rgb(30,30,30)" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/icon-48x48.png" />
      <link rel="stylesheet" type="text/css" href="/styles/normalize.css" />
      <link rel="stylesheet" type="text/css" href="/styles/global.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Emilys+Candy&family=Fira+Code:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Meta;

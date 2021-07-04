/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { formateDateFull, validDate } from '../../utils/formatDate';
import * as Blog from './Styles/blog';

type Props = { meta: PostMeta };

const Layout: React.FC<Props> = ({ meta, children }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Head>
        <link rel="stylesheet" href="/styles/prism.css" />
      </Head>
      <article>
        <div>
          <h1 className="font-bold text-3xl">{meta.title}</h1>
          <p>
            <time dateTime={validDate(meta.date)}>{formateDateFull(meta.date)}</time>
          </p>
          <p className="italic py-4">{meta.description}</p>
        </div>
        {children}
      </article>
    </>
  );
};

export default Layout;

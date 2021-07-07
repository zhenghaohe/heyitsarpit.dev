/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { formateDateFull, validDate } from '../../utils/formatDate';

type Props = { meta: PostMeta };

export const PostPage: React.FC<Props> = ({ meta, children }) => {
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={`https://heyitsarpit.dev/posts/${meta.slug}`}
        openGraph={{ url: `https://heyitsarpit.dev/posts/${meta.slug}` }}
      />
      <Head>
        <link rel="stylesheet" href="/styles/prism.css" />
      </Head>
      <article className="max-w-[75ch] mx-auto py-16 px-4">
        <div>
          <h1 className="font-bold text-3xl text-black dark:text-white">{meta.title}</h1>
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

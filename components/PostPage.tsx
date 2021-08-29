/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import { formateDateFull, validDate } from '@/utils/formatDate';

type Props = { meta: PostMeta };

export const PostPage: React.FC<Props> = ({ meta, children }) => {
  return (
    <>
      <NextSeo
        title={`${meta.title} - Arpit`}
        description={meta.description}
        canonical={`https://heyitsarpit.dev/posts/${meta.slug}`}
        openGraph={{ url: `https://heyitsarpit.dev/posts/${meta.slug}` }}
      />
      <Head>
        <link rel="stylesheet" href="/styles/prism.css" />
      </Head>
      <article className="max-w-[75ch] mx-auto py-12 px-4">
        <div>
          <h1 className="mb-1 text-3xl font-black text-gray-800 capitalize md:text-4xl dark:text-white">
            {meta.title}
          </h1>
          <div className="flex items-center pt-4 pb-8 text-sm">
            <div className="w-5 h-5 mr-1">
              <Image
                src="/images/me.jpg"
                alt="Arpit"
                width="100"
                height="100"
                className="rounded-full"
              />
            </div>
            <p>
              <span>Arpit /&nbsp;</span>
              <time dateTime={validDate(meta.date)}>{formateDateFull(meta.date)}</time>
            </p>
          </div>
          <p className="italic">{meta.description}</p>
        </div>
        {children}
      </article>
    </>
  );
};

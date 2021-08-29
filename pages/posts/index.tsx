import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { formateDatePreview, validDate } from '@/utils/formatDate';
import { getAllPostsMeta } from '@/utils/loadMDX';

export const getStaticProps = async () => {
  const posts = await getAllPostsMeta();
  return { props: { posts } };
};

const PostPreview: React.FC<PostMeta> = ({ slug, title, date }) => {
  return (
    <li className="my-4">
      <Link href={`posts/${slug}`}>
        <a className="flex items-center p-1 capitalize transition duration-300 rounded-md outline-none focus:ring-1 focus:bg-pink-50 dark:focus:bg-pink-300/10 hover:ring-1 ring-pink-400/40 group hover:bg-pink-50 dark:hover:bg-pink-300/10">
          <p className="transition duration-300 text-sm mr-8 min-w-[50px] text-secondary group-hover:text-pink-400">
            <time dateTime={validDate(date)}>{formateDatePreview(date)}</time>
          </p>
          <h3 className="font-medium transition duration-300 group-hover:link">{title}</h3>
        </a>
      </Link>
    </li>
  );
};

const PostPreviewList: React.FC<{ posts: PostMeta[] }> = ({ posts }) => {
  const postsByYear: Record<string, PostMeta[]> = {};

  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear();
    const knownPosts = postsByYear[year] || [];
    postsByYear[year] = [...knownPosts, post];
  });

  return (
    <>
      {Object.entries(postsByYear).map(([year, posts]) => (
        <div key={year} className="w-full">
          <h2 className="pl-1 text-lg font-bold">{year}</h2>
          <ul>
            {posts.map((post) => (
              <PostPreview key={post.slug} {...post} />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Posts"
        canonical="https://heyitsarpit.dev/posts"
        openGraph={{ url: 'https://heyitsarpit.dev/posts' }}
      />
      <div className="w-full sm:max-w-[75ch] m-auto px-5 py-16 flex flex-col justify-center items-center">
        <PostPreviewList posts={posts} />
      </div>
    </>
  );
};

export default Posts;

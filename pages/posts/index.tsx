import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { formateDatePreview, validDate } from '../../utils/formatDate';
import { getAllPostsMeta } from '../../utils/loadMDX';

export const getStaticProps = async () => {
  const posts = await getAllPostsMeta();
  return { props: { posts } };
};

const PostPreview: React.FC<PostMeta> = ({ slug, title, date }) => {
  return (
    <li className="my-4">
      <Link href={`posts/${slug}`}>
        <a className="hover:ring-1 ring-pink-400/40 transition duration-300 group flex items-center hover:bg-pink-50 p-1 rounded-md dark:hover:bg-pink-300/10">
          <p className="transition duration-300 text-sm mr-8 min-w-[50px] text-secondary group-hover:text-pink-400">
            <time dateTime={validDate(date)}>{formateDatePreview(date)}</time>
          </p>
          <h3 className="transition duration-300 font-medium group-hover:text-accent">{title}</h3>
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
        <div key={year}>
          <h2 className="pl-1 font-bold text-lg">{year}</h2>
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
    <div className="w-full md:w-4/5 lg:w-1/2  2xl:w-1/3 m-auto px-5 flex flex-col justify-center items-center">
      <PostPreviewList posts={posts} />
    </div>
  );
};

export default Posts;

import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMemo } from 'react';

import PostPageLayout from '../../components/PostPage';
import { getAllPostsMeta, getPost } from '../../utils/loadMDX';

export const getStaticPaths = async () => {
  const posts = await getAllPostsMeta();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false // 404
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;
  const post = await getPost(slug);

  return { props: post };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Post: React.FC<Props> = ({ meta, code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <PostPageLayout meta={meta}>
      <Component />
    </PostPageLayout>
  );
};

export default Post;

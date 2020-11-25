/* eslint-disable jsx-a11y/accessible-emoji */
import styled from '@emotion/styled';
import fuzzysort from 'fuzzysort';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, memo, useEffect, useMemo, useRef, useState } from 'react';

import AppWrapper from '../components/Common/AppWrapper';
// import TagList from '../components/Tags';
import formatDate from '../utils/formatDate';
import { useDebounce } from '../utils/useDebounce';
import { frontMatter as blogPosts } from './posts/**/*.mdx';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async () => {
  const blogs = blogPosts
    .filter(({ published }) => published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return { props: { blogs } };
};

const Wrapper = styled(AppWrapper)``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0rem;
`;

const ListItem = styled.li`
  padding: 1rem 0;
`;

const Title = styled.h2`
  text-transform: capitalize;

  margin-bottom: 0.3rem;
  a {
    text-decoration: none;
    color: var(--color-heading-primary);
  }
`;

const DateAndReadTime = styled.div`
  color: var(--color-heading-primary);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: capitalize;
`;

const Separator = styled.span`
  padding: 0 0.2rem;
`;

const Description = styled.div`
  padding: 0.3rem 0;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
`;

const ReadMore = styled(Title)`
  color: #12afff;
  font-size: 0.8rem;

  &:hover {
    color: #25b5ff;
  }
`;

const Emoji = styled.span`
  padding-right: 0.3rem;
`;

const formatPath = (p: string) => p.replace(/\.mdx$/, '');

const BlogCard: React.FC<FrontMatter> = ({
  __resourcePath,
  title,
  date,
  description,
  readingTime,
  tags
}) => {
  return (
    <ListItem>
      <Title>
        <Link href={formatPath(__resourcePath)} passHref>
          <a>{title}</a>
        </Link>
      </Title>

      <DateAndReadTime>
        {formatDate(date)}
        <Separator>•</Separator>
        {readingTime.text}
      </DateAndReadTime>
      <Description>{description}</Description>
    </ListItem>
  );
};

type SearchProps = {
  query: string;
  setQuery: (val: string) => void;
  setSearching: (val: boolean) => void;
};

const Search: React.FC<SearchProps> = ({ query, setQuery, setSearching }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    value.trim() ? setSearching(true) : setSearching(false);
    setQuery(value);
  };

  return <input type="text" onChange={onChange} value={query} />;
};

const Blogs: React.FC<{ blogs: FrontMatter[] }> = memo(({ blogs }) => {
  return (
    <List>
      {blogs.map((blog) => (
        <BlogCard key={blog.__resourcePath} {...blog} />
      ))}
    </List>
  );
});
Blogs.displayName = 'Blogs';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const findBlogs = (queries: string[], blogs: FrontMatter[]): FrontMatter[] => {
  const foundBlogs = new Set<FrontMatter>();

  queries.forEach((query) => {
    const results = fuzzysort.go(query, blogs, {
      keys: ['title', 'tags'],
      threshold: -10000,
      allowTypo: true
    });

    results.forEach((result) => {
      if (result.length) {
        foundBlogs.add(result.obj);
      }
    });
  });

  return Array.from(foundBlogs);
};

const Delimiter = '|';

const BlogsPage: React.FC<Props> = ({ blogs }) => {
  const router = useRouter();

  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState('');
  const count = useRef(0);
  const debouncedQuery = useDebounce(query.trim(), 250);

  useEffect(() => {
    const q = router.query.q as string;

    return q ? setQuery(q.split(Delimiter).join(' ')) : setQuery('');
  }, [router.query.q]);

  useEffect(() => {
    if (count.current <= 0) {
      count.current += 1;
      return;
    }
    const q = debouncedQuery.split(' ').join(Delimiter);

    if (/\s|^$/.test(q)) {
      setSearching(false);
      router.push(`/posts`, undefined, { shallow: true });
    } else if (q) {
      setSearching(true);
      router.push(`/posts?q=${q}`, undefined, { shallow: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  const foundBlogs = useMemo(() => {
    return findBlogs(debouncedQuery.split(' '), blogs);
  }, [debouncedQuery, blogs]);

  return (
    <Wrapper>
      <Search setSearching={setSearching} query={query} setQuery={setQuery} />
      <Blogs blogs={searching ? foundBlogs : blogs} />
    </Wrapper>
  );
};

export default BlogsPage;

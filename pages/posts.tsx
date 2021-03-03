/* eslint-disable jsx-a11y/accessible-emoji */
import { styled } from '@linaria/react';
import fuzzysort from 'fuzzysort';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, memo, useEffect, useMemo, useRef, useState } from 'react';

import AppWrapper from '../components/Common/AppWrapper';
import TagList from '../components/Tags';
import formatDate from '../utils/formatDate';
import { useDebounce } from '../utils/useDebounce';
import { frontMatter as blogPosts } from './posts/**/*.mdx';

export const getStaticProps = async () => {
  const blogs = blogPosts
    .filter(({ published }) => published)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map((blog) => {
      blog.cover_image += '?crop=entropy&cs=srgb&fit=crop&fm=jpg&h=1000&w=1800';
      return blog;
    });

  return { props: { blogs } };
};

const Wrapper = styled(AppWrapper)`
  margin-top: 4rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0rem;
`;

const ListItem = styled.li`
  padding: 1rem 0 2rem 0;
  border-bottom: var(--color-muted) 1px solid;
  position: relative;

  transition: 500ms;
  transition-property: background, color;

  &::after {
    transition: 500ms;
    transition-property: background, color;

    display: block;
    content: '';
    width: 7px;
    height: 7px;
    border: var(--color-muted) 1px solid;
    position: absolute;
    bottom: -5px;
    left: 50%;
    margin-left: -5px;
    background: var(--color-background);
    border-radius: 100%;
    box-shadow: var(--color-background) 0 0 0 5px;
  }
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 1.3rem;

  &:hover {
    opacity: 1;
  }
  margin-bottom: 0.3rem;
  a {
    text-decoration: none;
    color: var(--color-heading-primary);
  }
`;

const DateAndReadTime = styled.div`
  color: var(--color-heading-primary);
  font-size: 0.85rem;
  text-transform: capitalize;
  margin-top: 1.25rem;

  opacity: 0.6;

  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  padding: 0.3rem 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.8;
`;

const formatPath = (p: string) => p.replace(/\.mdx$/, '');

const BlogCard: React.FC<FrontMatter> = ({ __resourcePath, title, date, description, tags }) => {
  return (
    <ListItem>
      <Title>
        <Link href={formatPath(__resourcePath)}>
          <a>{title}</a>
        </Link>
      </Title>

      <Description>{description}</Description>
      <DateAndReadTime>
        <div>
          <TagList tags={tags} />
        </div>
        <div>{formatDate(date)}</div>
      </DateAndReadTime>
    </ListItem>
  );
};

type SearchProps = {
  query: string;
  setQuery: (val: string) => void;
  setSearching: (val: boolean) => void;
};

const SearchForm = styled.form`
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #e4e4e4;
  background: transparent;
  border-radius: 4px;
  color: var(--color-text-secondary);

  padding: 10px;
  &::placeholder {
    font-size: 1rem;
  }
`;

const Search: React.FC<SearchProps> = ({ query, setQuery, setSearching }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    value.trim() ? setSearching(true) : setSearching(false);
    setQuery(value);
  };

  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
      <SearchInput type="text" onChange={onChange} value={query} placeholder="Search Posts" />
    </SearchForm>
  );
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

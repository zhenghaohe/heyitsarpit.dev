import { styled } from '@linaria/react';
import fuzzysort from 'fuzzysort';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';

import AppWrapper from '../../components/Common/AppWrapper';
import TagList from '../../components/Tags';
import formatDate from '../../utils/formatDate';
import { getAllPostsMeta } from '../../utils/loadMDX';
import { useDebounce } from '../../utils/useDebounce';

export const getStaticProps = async () => {
  const posts = await getAllPostsMeta();
  return { props: { posts } };
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
  --border-color: var(--color-muted);
  --title-opacity: 1;

  &:hover,
  &:active {
    --title-opacity: 0.8;
  }
  padding: 1rem 0 2rem 0;
  border-bottom: var(--border-color) 1px solid;
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
    border: 1px solid;
    border-color: var(--border-color);

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

  opacity: var(--title-opacity);
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
  opacity: 0.7;
  line-height: 1.8;
`;

const PostPreview: React.FC<PostMeta> = ({ slug, title, date, description, tags }) => {
  return (
    <ListItem>
      <Title>
        <Link href={`posts/${slug}`}>
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
  border: 2px solid;
  border-color: var(--color-muted);
  background: transparent;
  border-radius: 4px;
  color: var(--color-text-secondary);

  &:hover {
    border-color: var(--color-text);
  }
  &:active,
  &:focus {
    outline: none;
    border-color: var(--color-link-posts);
  }

  padding: 10px;
  &::placeholder {
    font-size: 1rem;
  }
`;

const Search: React.FC<SearchProps> = ({ query, setQuery, setSearching }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.code == 'Slash') {
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    value.trim() ? setSearching(true) : setSearching(false);
    setQuery(value);
  };

  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
      <SearchInput
        type="text"
        ref={inputRef}
        onChange={onChange}
        value={query}
        placeholder={`Search Posts (press "/" to focus)`}
      />
    </SearchForm>
  );
};

const PostPreviewList: React.FC<{ posts: PostMeta[] }> = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </List>
  );
};

const findPosts = (queries: string[], posts: PostMeta[]): PostMeta[] => {
  const foundPosts = new Set<PostMeta>();

  queries.forEach((query) => {
    const results = fuzzysort.go(query, posts, {
      keys: ['title', 'tags'],
      threshold: -10000,
      allowTypo: true
    });

    results.forEach((result) => {
      if (result.length) {
        foundPosts.add(result.obj);
      }
    });
  });

  return Array.from(foundPosts);
};

const Delimiter = '|';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Posts: React.FC<Props> = ({ posts }) => {
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
  }, [debouncedQuery]);

  const foundPosts = useMemo(() => {
    return findPosts(debouncedQuery.split(' '), posts);
  }, [debouncedQuery, posts]);

  return (
    <Wrapper>
      <Search setSearching={setSearching} query={query} setQuery={setQuery} />
      <PostPreviewList posts={searching ? foundPosts : posts} />
    </Wrapper>
  );
};

export default Posts;

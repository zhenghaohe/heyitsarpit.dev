/* eslint-disable jsx-a11y/accessible-emoji */
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AppWrapper from '../components/Common/AppWrapper';
import TagList from '../components/Tags';
import formatDate from '../utils/formatDate';
import { frontMatter as blogPosts } from './posts/**/*.mdx';

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

const sortedBlogs = blogPosts
  .filter(({ published }) => published)
  .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

const Blogs: React.FC = () => {
  const { query } = useRouter();

  const blogs = query.tag
    ? sortedBlogs.filter(({ tags }) => tags.includes(query.tag as string))
    : sortedBlogs;

  return (
    <Wrapper>
      <h1>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </h1>
      <List>
        {blogs.map(({ __resourcePath, title, date, description, readingTime, tags }) => (
          <ListItem key={__resourcePath}>
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
            {/* <ReadMore href={formatPath(__resourcePath)}>Read More</ReadMore> */}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Blogs;

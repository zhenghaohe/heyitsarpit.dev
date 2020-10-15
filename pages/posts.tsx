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
  font-size: 1.1rem;
  font-weight: 900;
  text-transform: capitalize;
  font-family: 'Emilys Candy', cursive;

  text-decoration: none;
  margin-bottom: 0.5rem;
  display: block;
  color: var(--color-text);
`;

const DateAndReadTime = styled.div`
  color: #666;
  font-weight: 400;
  font-size: 0.75rem;
  text-transform: capitalize;
`;

const Separator = styled.span`
  padding: 0 0.2rem;
`;

const Description = styled.div`
  padding: 0.7rem 0;
  color: #666;
  font-size: 0.8rem;
  font-style: italic;
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
              <Emoji role="img" aria-label="date">
                🗓️
              </Emoji>
              {formatDate(date)}
              <Separator>•</Separator>
              <Emoji role="img" aria-label="time to read">
                ⌛
              </Emoji>
              {readingTime.text}
              <Separator>•</Separator>
              <Emoji role="img" aria-label="labels">
                🏷️
              </Emoji>

              <TagList tags={tags} />
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

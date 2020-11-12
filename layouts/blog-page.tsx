import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import Social from '../components/Intro/Social';
import formatDate from '../utils/formatDate';
import { Article, DateAndReadTime, Description, Separator, Title } from './Styles/blog';

const GoBackLink = styled.a`
  padding: 0.5rem;
  border-radius: 6px;
  color: var(--color-text);
  vertical-align: middle;

  transition: 0.4s;
  &:hover {
    background: var(--highlight-box);
  }
`;

const GoBack: React.FC = () => {
  return (
    <Link href="/posts" passHref>
      <GoBackLink>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ verticalAlign: 'middle' }}
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z"
            fill="var(--color-text)"></path>
        </svg>
        <span>Go Back</span>
      </GoBackLink>
    </Link>
  );
};

type Props = { frontMatter: FrontMatter };

const SocialWrapper = styled.div`
  margin-top: 2rem 0;
  ul,
  ol {
    list-style: none;
    margin: 0 auto;
    width: 12rem;
  }
`;

const Layout: React.FC<Props> = ({ frontMatter, children }) => {
  return (
    <>
      <NextSeo title={frontMatter.title} description={frontMatter.description} />
      <Article>
        <GoBack />
        <Title>{frontMatter.title}</Title>
        <DateAndReadTime>
          {formatDate(frontMatter.date)}
          <Separator>•</Separator>
          {frontMatter.readingTime.text}
        </DateAndReadTime>
        <Description>{frontMatter.description}</Description>
        {children}
        <SocialWrapper>
          <Social />
        </SocialWrapper>
      </Article>
    </>
  );
};

export default Layout;

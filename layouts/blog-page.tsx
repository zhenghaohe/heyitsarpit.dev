import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import formatDate from '../utils/formatDate';
import { Article, DateAndReadTime, Description, Separator, Title } from './Styles/blog';

const GoBackLink = styled.a`
  padding-top: 3rem;
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
            fill="var(--color-link)"></path>
        </svg>
        <span>Go Back</span>
      </GoBackLink>
    </Link>
  );
};

type Props = { frontMatter: FrontMatter };

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
      </Article>
    </>
  );
};

export default Layout;

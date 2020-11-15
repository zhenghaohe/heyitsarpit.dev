import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

import Social from '../components/Intro/Social';
import formatDate from '../utils/formatDate';
import { Article, DateAndReadTime, Description, Separator, Title } from './Styles/blog';

const GoBackWrapper = styled.div``;

const GoBackLink = styled.a`
  padding: 0.5rem;
  border-radius: 6px;
  color: var(--color-text);
  vertical-align: middle;
  text-decoration: none;
  text-transform: uppercase;

  .back-arrow {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  transition: all 0.4s;
  &:hover {
    background: var(--highlight-box);
    color: var(--color-link-posts);
  }
`;

const GoBack: React.FC = () => {
  return (
    <GoBackWrapper>
      <Link href="/posts" passHref>
        <GoBackLink>
          {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{ verticalAlign: 'middle' }}
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z"
              fill="var(--color-svg)"></path>
          </svg> */}
          <span>
            <span className="back-arrow">&#x22D6;</span>
            <span>Go Back</span>
          </span>
        </GoBackLink>
      </Link>
    </GoBackWrapper>
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

const Hero = styled.div`
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.09), 0 3px 14px 2px rgba(0, 0, 0, 0.09),
    0 5px 5px -3px rgba(0, 0, 0, 0.12);

  border-bottom: 1px solid #353434;

  position: relative;

  & .next_image {
    pointer-events: none;
    object-fit: cover;
  }

  & .hero_inner {
    padding: 4rem 1rem;
    max-width: 75ch;
    margin: 0 auto;
    z-index: 1;
    position: relative;
  }
`;

const Layout: React.FC<Props> = ({ frontMatter, children }) => {
  return (
    <>
      <NextSeo title={frontMatter.title} description={frontMatter.description} />
      <Hero>
        <Image src={frontMatter.cover_image} layout="fill" alt="cover" className="next_image" />
        <div className="hero_inner">
          <GoBack />
          <Title>{frontMatter.title}</Title>
          <DateAndReadTime>
            {formatDate(frontMatter.date)}
            <Separator>•</Separator>
            {frontMatter.readingTime.text}
          </DateAndReadTime>
          <Description>{frontMatter.description}</Description>
        </div>
      </Hero>
      <Article>
        {children}
        <SocialWrapper>
          <Social />
        </SocialWrapper>
      </Article>
    </>
  );
};

export default Layout;

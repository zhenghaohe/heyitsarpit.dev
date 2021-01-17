import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import Social from '../components/Intro/Social';
import formatDate from '../utils/formatDate';
import {
  Article,
  DateAndReadTime,
  Description,
  GoBackLink,
  GoBackWrapper,
  Hero,
  Separator,
  SocialWrapper,
  Title
} from './Styles/blog';

const GoBack: React.FC = () => {
  return (
    <GoBackWrapper>
      <Link href="/posts" passHref>
        <GoBackLink aria-label="Go Back To All Posts" title="Go Back To All Posts">
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

const Layout: React.FC<Props> = ({ frontMatter, children }) => {
  useEffect(() => {
    const codeBlocks$ = document.querySelectorAll("pre[class*='language-']");

    codeBlocks$.forEach((block$) => {
      const copyButton$ = document.createElement('button');
      copyButton$.innerHTML =
        '<svg class="w-6 h-6" fill="none" stroke="var(--syntax-cyan)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>';

      copyButton$.classList.add('code_copy');
      copyButton$.title = 'Copy';

      copyButton$.onclick = (e) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const code$ = e.target?.previousElementSibling;
        navigator.clipboard.writeText(code$.innerText);
      };

      block$.appendChild(copyButton$);
    });
  }, []);

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

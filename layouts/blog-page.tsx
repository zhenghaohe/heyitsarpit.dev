import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import formatDate from '../utils/formatDate';
import * as Blog from './Styles/blog';

const GoBack: React.FC = () => {
  return (
    <Blog.GoBackWrapper>
      <Link href="/posts" passHref shallow>
        <Blog.GoBackLink aria-label="Go Back To All Posts" title="Go Back To All Posts">
          <span>
            <span className="back-arrow">&#x22D6;</span>
            <span>Go Back</span>
          </span>
        </Blog.GoBackLink>
      </Link>
    </Blog.GoBackWrapper>
  );
};

const CopySVG =
  '<svg class="w-6 h-6" fill="none" stroke="var(--syntax-operator)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>';

type Props = { frontMatter: FrontMatter };

const Layout: React.FC<Props> = ({ frontMatter, children }) => {
  useEffect(() => {
    const codeBlocks$ = document.querySelectorAll("pre[class*='language-']");

    codeBlocks$.forEach((block$) => {
      const copyButton$ = document.createElement('button');
      copyButton$.innerHTML = CopySVG;

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
      <Blog.Hero>
        <Image src={frontMatter.cover_image} layout="fill" alt="cover" className="next_image" />
        <Blog.HeroInner>
          <GoBack />
          <Blog.Title>{frontMatter.title}</Blog.Title>
          <Blog.DateAndReadTime>
            {formatDate(frontMatter.date)}
            <Blog.Separator>•</Blog.Separator>
            {frontMatter.readingTime.text}
          </Blog.DateAndReadTime>
          <Blog.Description>{frontMatter.description}</Blog.Description>
        </Blog.HeroInner>
        <Blog.CoverCredits>
          <a href={frontMatter.cover_artist_url} target="_blank" rel="noopener noreferrer">
            Photo By — {frontMatter.cover_artist}
          </a>
        </Blog.CoverCredits>
      </Blog.Hero>
      <Blog.Article>{children}</Blog.Article>
    </>
  );
};

export default Layout;

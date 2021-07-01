import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import formatDate from '../../utils/formatDate';
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

type Props = { meta: PostMeta };

const Layout: React.FC<Props> = ({ meta, children }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Blog.Hero>
        <Image src={meta.cover_image} layout="fill" alt="cover" className="next_image" />
        <Blog.HeroInner>
          <GoBack />
          <Blog.Title>{meta.title}</Blog.Title>
          <Blog.DateAndReadTime>{formatDate(meta.date)}</Blog.DateAndReadTime>
          <Blog.Description>{meta.description}</Blog.Description>
        </Blog.HeroInner>
        <Blog.CoverCredits>
          <a href={meta.cover_artist_url} target="_blank" rel="noopener noreferrer">
            Photo By — {meta.cover_artist}
          </a>
        </Blog.CoverCredits>
      </Blog.Hero>
      <Blog.Article>{children}</Blog.Article>
    </>
  );
};

export default Layout;

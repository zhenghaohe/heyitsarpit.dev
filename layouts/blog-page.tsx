import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

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
        <GoBackLink>
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

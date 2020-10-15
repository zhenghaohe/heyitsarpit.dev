import { NextSeo } from 'next-seo';

import formatDate from '../utils/formatDate';
import { Article, DateAndReadTime, Description, Separator, Title } from './Styles/blog';

type Props = { frontMatter: FrontMatter };

const Layout: React.FC<Props> = ({ frontMatter, children }) => {
  return (
    <>
      <NextSeo title={frontMatter.title} description={frontMatter.description} />
      <Article>
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

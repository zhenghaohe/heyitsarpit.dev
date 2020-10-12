import { NextSeo } from 'next-seo';

import TagList from '../components/Tags';
import formatDate from '../utils/formatDate';
import { Article, DateAndReadTime, Description, Separator, Title } from './Styles/blog';

export default function Layout(frontMatter: FrontMatter) {
    return function Content({ children: content }: { children: JSX.Element }): JSX.Element {
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
                    {/* <img src={frontMatter.cover_image} alt="cover" /> */}
                    <Description>{frontMatter.description}</Description>
                    {content}
                    {/* <TagList tags={frontMatter.tags} /> */}
                </Article>
            </>
        );
    };
}

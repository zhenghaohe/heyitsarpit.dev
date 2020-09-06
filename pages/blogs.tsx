import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

import formatDate from '../utils/formatDate';
import { frontMatter as blogPosts } from './blogs/**/*.mdx';

const formatPath = (p: string) => p.replace(/\.mdx$/, '');

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0rem;
`;

const ListItem = styled.li``;

const Title = styled.a`
    font-size: 1.3rem;
    font-weight: 900;
    text-transform: capitalize;
    text-decoration: none;

    display: block;
    color: var(--color-text);
`;

const DateAndReadTime = styled.div`
    color: #666;
    font-weight: 700;
    font-size: 0.8rem;
    margin-top: 0.4rem;
    font-family: 'Merriweather', serif;
    text-transform: capitalize;
`;

const Separator = styled.span`
    padding: 0 0.2rem;
`;

const Description = styled.div`
    padding: 0.7rem 0;
    color: #666;
    font-size: 0.9rem;
    font-family: 'Merriweather', serif;
    font-style: italic;
`;

const ReadMore = styled(Title)`
    color: #12afff;
    font-size: 0.8rem;

    &:hover {
        color: #25b5ff;
    }
`;

const Tags = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0rem;
`;

const Tag = styled.li`
    padding-right: 0.7rem;
`;

const TagList: React.FC<{ tags: string }> = memo(({ tags }) => {
    const parseTags = (t: string): string[] => t.replace(/ /g, '').split(',');
    const { pathname } = useRouter();

    return (
        <Tags>
            {parseTags(tags).map((tag) => (
                <Tag key={tag}>
                    <Link href={{ pathname, query: { tag } }}>
                        <a>{tag}</a>
                    </Link>
                </Tag>
            ))}
        </Tags>
    );
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const sortedBlogs = blogPosts
    .filter(({ published }) => published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

const Blogs: React.FC = () => {
    const { query, pathname } = useRouter();

    const blogs = query.tag
        ? sortedBlogs.filter(({ tags }) => tags.includes(query.tag as string))
        : sortedBlogs;

    return (
        <>
            <h1>
                <Link href={{ pathname }}>
                    <a>Blogs</a>
                </Link>
            </h1>
            <List>
                {blogs.map(({ __resourcePath, title, date, description, readingTime, tags }) => (
                    <ListItem key={__resourcePath}>
                        <h2>
                            <Link href={formatPath(__resourcePath)} passHref>
                                <Title>{title}</Title>
                            </Link>
                        </h2>

                        <DateAndReadTime>
                            {formatDate(date)}
                            <Separator>•</Separator>
                            {readingTime.text}
                        </DateAndReadTime>
                        <TagList tags={tags} />
                        <Description>{description}</Description>
                        <ReadMore href={formatPath(__resourcePath)}>Read More</ReadMore>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default Blogs;

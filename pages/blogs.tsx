import styled from '@emotion/styled';
import Link from 'next/link';

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

const ListItem = styled.li`
    padding: 20px;
    border-radius: 8px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 4px 0px;
    }
`;

const Title = styled.a`
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: capitalize;
    text-decoration: none;

    display: block;
    color: var(--color-text);
`;

const DateAndReadTime = styled.div`
    color: #525252;
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const sortedBlogs = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

const Blogs: React.FC = () => {
    console.log(sortedBlogs);

    return (
        <>
            <h1>Blogs</h1>
            <List>
                {sortedBlogs.map(({ __resourcePath, title, date, description, readingTime }) => (
                    <ListItem key={__resourcePath}>
                        <Link href={formatPath(__resourcePath)} passHref>
                            <Title>{title}</Title>
                        </Link>
                        <DateAndReadTime>
                            {formatDate(date)}
                            <Separator>•</Separator>
                            {readingTime.text}
                        </DateAndReadTime>
                        <Description>{description}</Description>
                        <ReadMore href={formatPath(__resourcePath)}>Read More</ReadMore>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default Blogs;

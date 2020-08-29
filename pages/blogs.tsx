import styled from '@emotion/styled';
import Link from 'next/link';

import { frontMatter as blogPosts } from './blogs/**/*.mdx';
import formatDate from '../utils/formatDate';

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
    /* transition: all 0.2s ease 0.1s; */
    /* box-shadow: rgba(0, 0, 0, 0.07) 0px 8px 30px 0px; */

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
        /* transform: translateY(-3px); */
    }
`;

const Title = styled.a`
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: capitalize;
    text-decoration: none;

    display: block;
`;

const PostingDate = styled.div`
    color: #525252;
    font-weight: 700;
    font-size: 0.8rem;
    margin-top: 0.4rem;
`;

const Description = styled.div`
    padding: 0.7rem 0;
    color: #666;
    font-size: 0.9rem;
    font-family: 'Crimson Text', serif;
`;

const ReadMore = styled(Title)`
    color: #12afff;
    font-size: 0.9rem;

    font-family: 'Crimson Text', serif;
    &:hover {
        color: #25b5ff;
    }
`;

const Blogs: React.FC = () => {
    return (
        <>
            <h1>Blogs</h1>
            <List>
                {blogPosts.map(({ __resourcePath, title, date, description }) => (
                    <ListItem key={__resourcePath}>
                        <Link href={formatPath(__resourcePath)} passHref>
                            <Title>{title}</Title>
                        </Link>
                        <PostingDate>{formatDate(date)}</PostingDate>
                        <Description>{description}</Description>
                        <ReadMore>Read More</ReadMore>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default Blogs;

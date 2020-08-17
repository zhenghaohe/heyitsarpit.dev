import styled from '@emotion/styled';

import Heading from '../Common/Heading';
import Blog, { BlogProps } from './Blog';

const BlogStyled = styled.div`
    margin-top: 60px;
`;

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
    transition: transform 0.2s ease 0.1s;
    /* box-shadow: rgba(0, 0, 0, 0.07) 0px 8px 30px 0px; */

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
        /* transform: translateY(-3px); */
    }
`;

const Data: BlogProps[] = [
    {
        title: 'How to add "signin with apple" to your website',
        description: `Implement Apple OAuth authentication workflow for your website.`,
        date: 'August 17, 2020',
        link: 'https://dev.to/arpit73/how-to-add-signin-with-apple-on-your-website-43m9'
    },
    {
        title: 'useDebounce hook in React, Improve performance of your React app with Debouncing',
        description: `Understand debouncing and implement a reusable useDebounce hook in React.`,
        date: 'July 7, 2020',
        link:
            'https://dev.to/arpit73/improve-performance-of-your-react-app-with-debouncing-build-your-own-usedebounce-hook-1fb1'
    },
    {
        title: 'ESlint and Prettier for React apps (Bonus - Next.js and TypeScript)',
        description: `Improve your JavaScript/TypeScript development workflow by using ESlint and Prettier`,
        date: 'July 5, 2020',
        link:
            'https://dev.to/arpit73/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46'
    },
    {
        title: 'GSoC 2019 Progress Report',
        description: `Notes on contributions to Firefox for my GSoC 2019 project.`,
        date: 'August 27, 2019',
        link: 'https://arpit73.netlify.app/posts/Arpit-Bharti-GSoC-2019-Report/'
    }
];

const Blogs: React.FC = () => {
    return (
        <BlogStyled id="blogs">
            <Heading href="#blogs">Blogs</Heading>
            <List>
                {Data.map((blog) => (
                    <ListItem key={blog.link}>
                        <Blog {...blog} />
                    </ListItem>
                ))}
            </List>
        </BlogStyled>
    );
};

export default Blogs;

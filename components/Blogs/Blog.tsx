import styled from '@emotion/styled';

const Title = styled.a`
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: capitalize;
    color: #3b49df;
    text-decoration: none;

    display: block;
`;

const Date = styled.div`
    color: #525252;
    font-weight: 700;
    font-size: 0.8rem;
    margin-top: 0.4rem;
`;

const Description = styled.div`
    padding: 0.7rem 0;
    color: #666;
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-justify: inter-word;
`;

export type BlogProps = {
    title: string;
    description: string;
    date: string;
    link: string;
};

const Blog: React.FC<BlogProps> = ({ title, description, date, link }) => {
    return (
        <>
            <Title href={link} target="_blank" rel="noopener noreferrer">
                {title}
            </Title>
            <Date>{date}</Date>
            <Description>{description}</Description>
        </>
    );
};

export default Blog;

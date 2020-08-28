import styled from '@emotion/styled';

const Title = styled.h1`
    line-height: 1.3em;
    font-weight: 900;
    text-transform: capitalize;
    text-decoration: none;
    font-family: 'Mulish', sans-serif;
    text-align: unset;
`;

const Date = styled.div`
    color: #525252;
    font-weight: 700;
    font-size: 1rem;
    margin-top: 0.4rem;
`;

const Article = styled.article`
    /* @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Merriweather:wght@400;700&display=swap'); */
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&family=Libre+Caslon+Text:wght@400;700&family=Merriweather:wght@400;700&display=swap');
    font-family: 'Crimson Text', serif;

    max-width: 42em;
    margin: 0 auto;
    line-height: 1.5em;
    font-size: 22px;

    @media screen {
        font-size: 24px;
    }
    @media screen and (max-width: 1690px) {
        font-size: 22px;
    }
    @media screen and (max-width: 1280px) {
        font-size: 22px;
    }
    @media screen and (max-width: 980px) {
        font-size: 20px;
    }
    @media screen and (max-width: 736px) {
        font-size: 20px;
    }
    @media screen and (max-width: 480px) {
        padding: 0.5rem;
        font-size: 18px;
    }

    text-align: justify;
    text-justify: inter-word;
    hyphens: auto;
    /* font-family: 'Crimson Text', serif;

    font-family: 'Libre Caslon Text', serif;

    font-family: 'Merriweather', serif; */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2.5em;
    }

    .anchor {
        visibility: hidden;

        float: left;
        padding-right: 4px;
        margin-left: -20px;
    }

    h1:hover .anchor,
    h2:hover .anchor,
    h3:hover .anchor,
    h4:hover .anchor,
    h5:hover .anchor,
    h6:hover .anchor {
        visibility: visible;
    }
`;

export default function Layout(frontMatter: FrontMatter) {
    return function Content({ children: content }): JSX.Element {
        // React hooks, for example `useState` or `useEffect`, go here.
        return (
            <Article>
                <Title>{frontMatter.title}</Title>
                <Date>{frontMatter.date}</Date>
                {/* <img src={frontMatter.cover_image} alt="cover" /> */}
                {content}
            </Article>
        );
    };
}

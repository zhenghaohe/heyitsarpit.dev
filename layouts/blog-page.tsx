import styled from '@emotion/styled';

import Prism from './Styles/prism';

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

const Article = styled(Prism)`
    /* @import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Merriweather:wght@400;700&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&family=Libre+Caslon+Text:wght@400;700&family=Merriweather:wght@400;700&display=swap'); */
    /* font-family: 'Crimson Text', serif; */
    /* font-family: 'Merriweather', serif; */
    /* font-family: 'Libre Caslon Text', serif; */

    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');
    font-family: 'Fira Sans', sans-serif;
    max-width: 42em;
    margin: 0 auto;
    line-height: 1.5em;
    font-size: 16px;

    hyphens: auto;
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';

    img {
        max-width: 100%;
        padding: 2px;
    }

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
    return function Content({ children: content }: { children: JSX.Element }): JSX.Element {
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

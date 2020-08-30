import styled from '@emotion/styled';

import formatDate from '../utils/formatDate';
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
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
    font-family: 'Merriweather', serif;
    /* font-family: 'Crimson Text', serif; */
    /* font-family: 'Libre Caslon Text', serif; */

    /* @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap');
    font-family: 'Fira Sans', sans-serif; */
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

    hr {
        color: #25b5ff52;
        width: 30%;
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
        padding-left: 4px;
    }

    h1:hover .anchor,
    h2:hover .anchor,
    h3:hover .anchor,
    h4:hover .anchor,
    h5:hover .anchor,
    h6:hover .anchor {
        visibility: visible;
    }

    ul,
    ol {
        margin: 0;
        padding: 0 0 0 1em;
        list-style-position: outside;
        list-style-image: none;
        list-style: disc;
    }

    ul ul,
    ul ol,
    ol ul,
    ol ul {
        padding-left: 1em;
        list-style: circle;
    }
`;

export default function Layout(frontMatter: FrontMatter) {
    return function Content({ children: content }: { children: JSX.Element }): JSX.Element {
        return (
            <Article>
                <Title>{frontMatter.title}</Title>
                <Date>{formatDate(frontMatter.date)}</Date>
                {/* <img src={frontMatter.cover_image} alt="cover" /> */}
                {content}
            </Article>
        );
    };
}

import styled from '@emotion/styled';

import TagList from '../components/Tags';
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

const DateAndReadTime = styled.div`
    color: #525252;
    font-weight: 700;
    font-size: 0.9rem;
    margin-top: 0.4rem;
    text-transform: capitalize;
`;

const Separator = styled.span`
    padding: 0 0.2rem;
`;

const Description = styled.div`
    padding: 2.2rem 0 0;
    font-style: italic;
`;

const Article = styled(Prism)`
    font-family: 'Merriweather', serif;

    max-width: 42em;
    margin: 0 auto;
    line-height: 1.7;
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
                <DateAndReadTime>
                    {formatDate(frontMatter.date)}
                    <Separator>•</Separator>
                    {frontMatter.readingTime.text}
                </DateAndReadTime>
                {/* <img src={frontMatter.cover_image} alt="cover" /> */}
                <Description>{frontMatter.description}</Description>
                {content}
                <TagList tags={frontMatter.tags} />
            </Article>
        );
    };
}

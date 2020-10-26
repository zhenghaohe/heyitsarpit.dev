import styled from '@emotion/styled';

import Prism from './prism';

export const Title = styled.h1`
  line-height: 1.3em;
  font-weight: 900;
  text-transform: capitalize;
  text-decoration: none;
  font-family: sans-serif;
  text-align: unset;
`;

export const DateAndReadTime = styled.em`
  color: var(--color-highlight-2);
  font-weight: 400;
  font-size: 0.9rem;
  margin-top: 0.4rem;
  text-transform: capitalize;
  font-style: italic;
`;

export const Separator = styled.span`
  padding: 0 0.2rem;
`;

export const Description = styled.p`
  padding: 2.2rem 0 0;
  font-style: italic;
`;

export const Article = styled(Prism)`
  max-width: 75ch;
  padding: 0 1.2rem;
  margin: 0 auto;
  margin-top: 3rem;
  line-height: 1.9;
  letter-spacing: 0.3px;

  hyphens: auto;
  font-kerning: normal;
  font-feature-settings: 'kern', 'liga', 'clig', 'calt';

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-heading-primary);
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5em;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    padding: 2px;
  }

  hr {
    color: var(--color-heading-secondary);
    width: 30%;
  }

  .anchor {
    visibility: hidden;
    opacity: 0;
    padding-left: 4px;
    transition: opacity 240ms ease-in-out;
  }
  @media screen and (max-width: 736px) {
    .anchor {
      visibility: visible;
      opacity: 1;
    }
  }
  @media screen and (max-width: 480px) {
    .anchor {
      visibility: visible;
      opacity: 1;
    }
  }
  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    visibility: visible;
    opacity: 1;
  }

  ul,
  ol {
    margin: 0;
    padding: 0 0 0 1em;
    list-style-position: outside;
    list-style-image: url('/images/diya.svg');
    /* list-style: disc; */
  }

  ul ul,
  ul ol,
  ol ul,
  ol ul {
    padding-left: 1em;
    list-style: circle;
  }
`;

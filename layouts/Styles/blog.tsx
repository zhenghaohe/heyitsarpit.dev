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

export const DateAndReadTime = styled.div`
  color: var(--color-heading-primary);
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 0.4rem;
  text-transform: capitalize;
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

  p a {
    color: var(--color-link-posts);
    box-shadow: 0 1px 0 0 currentColor;
    text-decoration: none;

    :hover {
      box-shadow: none;
    }
  }

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

  img {
    max-width: 100%;
    padding: 2px;
  }

  hr {
    color: var(--color-heading-secondary);
    width: 30%;
  }

  strong {
    color: var(--color-heading-primary);
  }

  .info {
    padding: 1rem;
    margin: 3rem 0;
    border-radius: 6px;
    background: var(--highlight-box);

    display: flex;

    --color-info-highlight: #4433ff;
    border-left: 3px solid var(--color-info-highlight);
  }

  .info ::before {
    content: 'i';

    --size: 1rem;
    width: var(--size);
    height: var(--size);

    font-family: 'Fira Code', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-info-highlight);

    margin-right: 0.5rem;
    color: #111111;

    padding: 1rem;
    /* background: var(--color-background); */
    background: white;

    border-radius: 100vh;
    translate: -2rem -2rem;
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
    position: relative;
    list-style: none;
  }

  li::before {
    content: '->';
    position: absolute;
    left: 0;
    padding-right: 0.5rem;
    translate: -0.4rem;
    color: #2674c8;
    font-weight: bold;
  }

  ul ul,
  ul ol,
  ol ul,
  ol ul {
    padding-left: 1em;
  }
`;

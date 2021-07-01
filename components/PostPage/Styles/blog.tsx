import { styled } from '@linaria/react';

import Prism from './prism';

export const GoBackWrapper = styled.div``;

export const GoBackLink = styled.a`
  --color-text: #c4c5c9;
  --color-heading-primary: #ffffff;

  padding: 0.5rem;
  border-radius: 6px;
  color: var(--color-heading-primary);
  vertical-align: middle;
  text-decoration: none;
  text-transform: uppercase;
  backdrop-filter: blur(10px) saturate(1.5);
  font-family: 'Fira Code', monospace;
  letter-spacing: 1px;

  .back-arrow {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  transition: all 0.4s;

  &:hover {
    background: #3a3d4f8a;
    color: var(--color-link-posts);
  }
`;

export const Hero = styled.div`
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.09), 0 3px 14px 2px rgba(0, 0, 0, 0.09),
    0 5px 5px -3px rgba(0, 0, 0, 0.12);

  border-bottom: 1px solid #353434;

  position: relative;

  & .next_image {
    pointer-events: none;
    object-fit: cover;
  }
`;

export const HeroInner = styled.div`
  padding: 7rem 1rem 4rem;

  max-width: 75ch;
  font-size: 1rem;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;

export const CoverCredits = styled.p`
  position: absolute;
  right: 10px;
  bottom: -5px;
  text-align: right;
  line-height: 1;
  font-size: 0.7em;
  font-family: 'Fira Code', monospace;
  opacity: 0.7;
  color: #c4c5c9;

  a {
    color: currentColor;
    text-decoration: none;
  }

  transition: opacity 500ms;

  &:hover {
    opacity: 0.9;
    color: #faefff;
  }
`;

export const Title = styled.h1`
  --color-heading-primary: #ffffff;

  color: var(--color-heading-primary);
  line-height: 1.3em;
  font-weight: 900;
  text-transform: capitalize;
  text-decoration: none;
  font-family: sans-serif;
  text-align: unset;
`;

export const DateAndReadTime = styled.div`
  --color-heading-primary: #ffffff;

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
  --color-text: #c4c5c9;

  color: var(--color-text);
  padding: 2.2rem 0 0;
`;

export const Article = styled(Prism)`
  max-width: 75ch;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 3rem;
  line-height: 1.9;
  letter-spacing: 0.3px;

  transition: 500ms;

  /* hyphens: auto; */
  font-kerning: normal;
  font-feature-settings: 'kern', 'liga', 'clig', 'calt';

  font-size: 1rem;
  @media screen and (max-width: 736px) {
  }

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

  blockquote {
    code {
      font-style: normal;
    }

    padding: 0.2rem 0;
    padding-left: 2ch;
    padding-right: 1ch;

    margin: 2rem 0;
    font-style: italic;
    background: #8a63ad14;

    @media screen and (max-width: 700px) {
      position: relative;
      width: 100%; /*Fallback for older browsers*/
      width: 100vw; /*Percentage of full screen viewing width*/
      left: calc(-50vw + 50%); /*Centres div*/
    }

    position: relative;
    ::before {
      content: '';
      width: 0.5ch;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;

      display: inline-block;

      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 350% 350%;

      animation: gradient_0 10s ease infinite;

      @keyframes gradient_0 {
        0% {
          background-position: 0% 100%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 100%;
        }
      }
    }
  }

  .anchor {
    visibility: hidden;
    opacity: 0;
    padding-left: 4px;
    transition: opacity 240ms ease-in-out;
  }
  /* @media screen and (max-width: 736px) {
    .anchor {
      visibility: visible;
      opacity: 1;
    }
  } */

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
    content: '';
    position: absolute;
    left: 0;
    transform: translateY(14px);
    background-color: #2674c8;
    height: 7px;
    width: 7px;
    border-radius: 100vw;
  }

  ul ul,
  ul ol,
  ol ul,
  ol ul {
    padding-left: 1em;
  }
`;
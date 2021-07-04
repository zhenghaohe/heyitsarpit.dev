import { styled } from '@linaria/react';

export const Article = styled.article`
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

import styled from '@emotion/styled';

export default styled.article`
    code[class*='language-'],
    pre[class*='language-'] {
        color: #403f53;
        font-family: 'Fira Code', monospace;

        font-size: 0.95em;
        border-radius: 0.4em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    code[class*='language-'] ::-moz-selection,
    code[class*='language-']::-moz-selection,
    pre[class*='language-'] ::-moz-selection,
    pre[class*='language-']::-moz-selection {
        text-shadow: none;
        background: #fbfbfb;
    }
    code[class*='language-'] ::selection,
    code[class*='language-']::selection,
    pre[class*='language-'] ::selection,
    pre[class*='language-']::selection {
        text-shadow: none;
        background: #fbfbfb;
    }
    @media print {
        code[class*='language-'],
        pre[class*='language-'] {
            text-shadow: none;
        }
    }
    pre[class*='language-'] {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
    }
    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
        color: #fff;
        background: #fbfbfb;
    }
    :not(pre) > code[class*='language-'] {
        padding: 0.1em;
        border-radius: 0.3em;
        white-space: normal;
    }
    .token.cdata,
    .token.comment,
    .token.prolog {
        color: #989fb1;
        font-style: italic;
    }
    .token.punctuation {
        color: #994cc3;
    }
    .namespace {
        color: #0c969b;
    }
    .token.deleted {
        color: rgba(239, 83, 80, 0.56);
        font-style: italic;
    }
    .token.keyword,
    .token.operator,
    .token.property,
    .token.symbol {
        color: #0c969b;
    }
    .token.tag {
        color: #994cc3;
    }
    .token.boolean {
        color: #bc5454;
    }
    .token.number {
        color: #aa0982;
    }
    .language-css .token.string,
    .style .token.string,
    .token.builtin,
    .token.char,
    .token.constant,
    .token.entity,
    .token.string,
    .token.url {
        color: #4876d6;
    }
    .token.doctype,
    .token.function,
    .token.selector {
        color: #994cc3;
        font-style: italic;
    }
    .token.attr-name,
    .token.inserted {
        color: #4876d6;
        font-style: italic;
    }
    .token.atrule,
    .token.attr-value,
    .token.class-name {
        color: #111;
    }
    .token.important,
    .token.regex,
    .token.variable {
        color: #c96765;
    }
    .token.bold,
    .token.important {
        font-weight: 700;
    }
    .token.italic {
        font-style: italic;
    }

    img {
        max-width: 100%;
        padding: 2px;
    }
`;

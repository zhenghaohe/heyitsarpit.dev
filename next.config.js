/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */

const withMdxEnhanced = require('next-mdx-enhanced');
const readingTime = require('reading-time');

const autoLinkHeadingsOptions = {
    behaviour: 'append',
    properties: {
        className: ['anchor']
    },
    content: {
        type: 'element',
        tagName: 'svg',
        properties: {
            className: ['icon-link'],
            viewBox: '0 0 16 16',
            version: '1.1',
            width: '16',
            height: '16',
            ariaHidden: 'true'
        },
        children: [
            {
                type: 'element',
                tagName: 'path',
                properties: {
                    fillRule: 'evenodd',
                    viewBox: '0 0 16 16',
                    d:
                        'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'
                }
            }
        ]
    }
};

module.exports = withMdxEnhanced({
    layoutPath: 'layouts',
    defaultLayout: true,
    fileExtensions: ['mdx'],
    remarkPlugins: [],
    rehypePlugins: [
        require('rehype-slug'),
        [require('rehype-autolink-headings'), autoLinkHeadingsOptions],
        require('@mapbox/rehype-prism')
    ],
    extendFrontMatter: {
        process: (mdxContent) => ({
            readingTime: readingTime(mdxContent)
        })
    }
})({ pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'] });

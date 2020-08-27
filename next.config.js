/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */

const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
    layoutPath: 'layouts',
    defaultLayout: true,
    fileExtensions: ['mdx'],
    remarkPlugins: [],
    rehypePlugins: [
        require('rehype-slug'),
        require('rehype-autolink-headings'),
        require('@mapbox/rehype-prism')
    ],
    extendFrontMatter: {
        process: (mdxContent, frontMatter) => {},
        phase: 'prebuild|loader|both'
    }
})({ pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'] });

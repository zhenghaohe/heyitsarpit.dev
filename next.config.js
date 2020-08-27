/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */

const withMdxEnhanced = require('next-mdx-enhanced');
const rehypePrism = require('@mapbox/rehype-prism');

module.exports = withMdxEnhanced({
    layoutPath: 'layouts',
    defaultLayout: true,
    fileExtensions: ['mdx'],
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
    extendFrontMatter: {
        process: (mdxContent, frontMatter) => {},
        phase: 'prebuild|loader|both'
    }
})({ pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'] });

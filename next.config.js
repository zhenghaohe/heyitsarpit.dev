/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */

const withMdxEnhanced = require('next-mdx-enhanced');
const readingTime = require('reading-time');
const withLinaria = require('next-linaria');

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
      viewBox: '0 0 24 24',
      version: '1.1',
      width: '24',
      height: '24',
      style: 'vertical-align: middle',
      ariaHidden: 'true'
    },
    children: [
      {
        type: 'element',
        tagName: 'path',
        properties: {
          fillRule: 'evenodd',
          fill: 'var(--color-link-posts)',
          d: 'M8.46504 20.535C6.44288 20.535 4.61982 19.3169 3.84585 17.4487C3.07187 15.5805 3.49938 13.4301 4.92904 12L7.05104 9.87799L8.46504 11.292L6.34404 13.413C5.58611 14.1709 5.2901 15.2756 5.56752 16.311C5.84495 17.3464 6.65366 18.1551 7.68902 18.4325C8.72439 18.7099 9.8291 18.4139 10.587 17.656L12.708 15.535L14.122 16.95L12.001 19.071C11.0651 20.0115 9.7919 20.5387 8.46504 20.535ZM9.17204 16.242L7.75804 14.828L14.829 7.75699L16.243 9.17099L9.17304 16.241L9.17204 16.242ZM16.951 14.121L15.536 12.707L17.657 10.586C18.4253 9.83032 18.7292 8.72065 18.4533 7.67897C18.1773 6.63729 17.3639 5.82364 16.3223 5.54743C15.2806 5.27123 14.1709 5.57491 13.415 6.34299L11.293 8.46399L9.87904 7.04999L12.001 4.92799C13.9561 2.98996 17.11 2.99686 19.0566 4.94344C21.0032 6.89002 21.0101 10.0439 19.072 11.999L16.951 14.12V14.121Z'
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
    require('mdx-prism')
  ],
  extendFrontMatter: {
    process: (mdxContent) => ({
      readingTime: readingTime(mdxContent)
    })
  }
})(
  withLinaria({
    webpack5: false,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
    images: {
      domains: ['images.pexels.com']
    }
  })
);

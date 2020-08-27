/* eslint-disable @typescript-eslint/no-explicit-any */
interface FrontMatter {
    __resourcePath: string;
    layout: string;
    title: string;
    published: string;
    description: string;
    tags: string;
    cover_image: string;
    date: string;
}

declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
    export const frontMatter: FrontMatter[];
}

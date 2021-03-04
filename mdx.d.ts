interface FrontMatter {
  __resourcePath: string;
  layout: string;
  title: string;
  published: string;
  description: string;
  tags: string;
  cover_image: string;
  cover_artist: string;
  cover_artist_url: string;
  date: string;
  readingTime: {
    text: string;
    time: number;
    words: number;
    minutes: number;
  };
}

declare module '*.mdx' {
  let MDXComponent: (props: unknown) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[];
}

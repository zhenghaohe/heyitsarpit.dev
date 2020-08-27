import Link from 'next/link';

import { frontMatter as blogPosts } from './blogs/**/*.mdx';

const formatPath = (p: string) => p.replace(/\.mdx$/, '');

const Blogs: React.FC = () => {
    console.log(blogPosts);
    return (
        <>
            <h1>Blogs</h1>
            <ul>
                {blogPosts.map((page) => (
                    <li key={page.__resourcePath}>
                        <Link href={formatPath(page.__resourcePath)}>
                            <a>{page.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Blogs;

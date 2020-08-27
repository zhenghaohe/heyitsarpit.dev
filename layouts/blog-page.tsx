export default function Layout(frontMatter: FrontMatter) {
    return function Content({ children: content }): JSX.Element {
        // React hooks, for example `useState` or `useEffect`, go here.
        return (
            <div>
                <h1>{frontMatter.title}</h1>
                {content}
            </div>
        );
    };
}

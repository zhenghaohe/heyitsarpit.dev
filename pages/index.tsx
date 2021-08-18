import Link from 'next/link';

const Social = () => (
  <section>
    <h2>Find Me Online</h2>
    <ul>
      {[
        { name: 'Github', url: 'https://github.com/heyitsarpit' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arpitbharti' },
        { name: 'Twitter', url: 'https://twitter.com/heyitsarpit' }
      ].map(({ name, url }) => (
        <li
          key={name}
          className="max-w-max flex items-center pl-0 before:hidden hover:text-[color:var(--color-link-posts)] hover:cursor-pointer">
          <a className="hover:link" href={url} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </li>
      ))}
    </ul>
  </section>
);

const Home: React.FC = () => {
  return (
    <div className="w-full sm:max-w-[75ch] mt-[20vh] mx-auto h-full px-5 flex justify-center items-center">
      <article className="w-full">
        <h1 className="mb-3 text-3xl font-extrabold">Hi, I&apos;m Arpit</h1>
        <p>
          Software Developer.{' '}
          <Link href="/posts">
            <a className="link">Writing</a>
          </Link>{' '}
          about Programming and Web Development. <br />
          Making some{' '}
          <Link href="/art">
            <a className="link">art. </a>
          </Link>
          Working at{' '}
          <a
            className="link"
            href="https://www.linkedin.com/company/antillia-llc/"
            target="_blank"
            rel="noreferrer">
            Antillia.
          </a>
        </p>
        <Social />
      </article>
    </div>
  );
};

export default Home;

import Link from 'next/link';

import ScrollProgress from './ScrollProgress';
import ThemeSwitch from './ThemeSwitch';

const Nav: React.FC = () => {
  return (
    <header className="w-full h-16 relative">
      <div className="fixed h-16 z-10 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-transparent">
        <ScrollProgress />
        <nav className="w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center dark:text-white">
          <Link href="/" passHref>
            <a title="Home" aria-label="Home">
              ARPIT
            </a>
          </Link>
          <div className="flex items-center gap-10">
            <Link href="/posts" passHref>
              <a>Posts</a>
            </Link>
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

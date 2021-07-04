import Image from 'next/image';
import Link from 'next/link';

import astro from '../../public/images/astro.png';
import ScrollProgress from '../ScrollProgress';
import ThemeSwitch from '../ThemeSwitch';

const Nav: React.FC = () => {
  return (
    <header className="w-full relative sm:h-12 lg:h-16 2xl:h-20">
      <div className="fixed sm:h-12 lg:h-16 2xl:h-20 z-10 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-nav">
        <ScrollProgress />
        <nav className="w-full md:w-4/5 lg:w-1/2  2xl:w-1/3 m-auto flex px-5 justify-between items-center">
          <Link href="/" passHref>
            <a title="Home" aria-label="Home">
              ARPIT
            </a>
          </Link>
          <Link href="/posts" passHref>
            <a>Posts</a>
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Nav;

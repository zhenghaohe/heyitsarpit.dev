import Image from 'next/image';
import Link from 'next/link';

import astro from '../../public/images/astro.png';
import ScrollProgress from '../ScrollProgress';
import ThemeSwitch from '../ThemeSwitch';

const Nav: React.FC = () => {
  return null;
  return (
    <header className="fixed z-10 w-full h-16">
      <div className="w-full h-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-cl-nav-bg">
        <ScrollProgress />
        <nav className="w-full flex px-5 justify-between items-center">
          <Link href="/" passHref>
            <a title="Home" aria-label="Home">
              <div className="h-11 w-11">
                {/* <Image src={astro} alt="home" className="rounded-full" /> */}
              </div>
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

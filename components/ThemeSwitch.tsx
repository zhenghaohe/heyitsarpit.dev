import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const DarkModeSwitch = dynamic(() =>
  import('react-toggle-dark-mode').then((mod) => mod.DarkModeSwitch)
);

import { setLocalStorage } from '../utils/localStorage';

type ColorTheme = 'light' | 'dark';

const ThemeSwitch: React.FC = () => {
  const COLOR_THEME = 'theme';

  const [theme, setTheme] = useState<ColorTheme>('dark');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const theme = (document.body.getAttribute('class') as ColorTheme) || 'dark';
    setTheme(theme);
  }, []);

  useEffect(() => {
    const bodyClass = document.body.classList;

    if (theme === 'dark') {
      bodyClass.remove('light');
      bodyClass.add('dark');
    } else {
      bodyClass.add('light');
      bodyClass.remove('dark');
    }

    setLocalStorage<ColorTheme>(COLOR_THEME, theme);
  }, [theme]);

  const switchTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme === 'dark' ? '#000' : '#fdfdfd'} />
      </Head>
      <div className="flex items-center w-5 h-5 bg-transparent">
        <DarkModeSwitch
          checked={theme === 'dark'}
          onChange={switchTheme}
          moonColor="white"
          sunColor="black"
        />
      </div>
    </>
  );
};

export default ThemeSwitch;

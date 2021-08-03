import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const DarkModeSwitch = dynamic(() =>
  import('react-toggle-dark-mode').then((mod) => mod.DarkModeSwitch)
);

import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

type ColorTheme = 'light' | 'dark';

const ThemeSwitch: React.FC = () => {
  const COLOR_THEME = 'COLOR_THEME';

  const [theme, setTheme] = useState<ColorTheme>('light');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const theme = getLocalStorage<ColorTheme>(COLOR_THEME, 'light');
    setTheme(theme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
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
      <DarkModeSwitch
        checked={theme === 'dark'}
        onChange={switchTheme}
        moonColor="white"
        sunColor="black"
      />
    </>
  );
};

export default ThemeSwitch;

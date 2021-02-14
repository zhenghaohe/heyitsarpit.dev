import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

type ColorTheme = 'light' | 'dark';

const ThemeSwitch: React.FC = () => {
  const COLOR_THEME = 'COLOR_THEME';

  const [theme, setTheme] = useState<ColorTheme>('dark');

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setTheme(getLocalStorage<ColorTheme>(COLOR_THEME, 'dark'));
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
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
        moonColor="var(--color-text)"
        sunColor="var(--color-text)"
      />
    </>
  );
};

export default ThemeSwitch;

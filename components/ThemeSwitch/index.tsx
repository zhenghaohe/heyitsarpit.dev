import styled from '@emotion/styled';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

type ColorTheme = 'light' | 'dark';

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  padding: 0.5rem;
  border: 1px solid white;
  border-radius: 6px;
  &:hover {
    background: white;
  }
`;

const ThemeSwitch: React.FC = () => {
  const COLOR_THEME = 'COLOR_THEME';

  const [theme, setTheme] = useState(() => getLocalStorage<ColorTheme>(COLOR_THEME, 'dark'));

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
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

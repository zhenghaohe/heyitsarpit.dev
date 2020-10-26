import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import AppWrapper from './Common/AppWrapper';

type ColorTheme = 'light' | 'dark';

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
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
    <ThemeToggle onClick={switchTheme} aria-label="theme toggle">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d={
            theme === 'dark'
              ? 'M11.971 22H11.071C8.42165 21.7651 5.9797 20.4693 4.30004 18.407C2.60411 16.3478 1.7923 13.701 2.04204 11.045C2.43533 6.22905 6.25292 2.40342 11.068 1.99999C11.462 1.99793 11.8333 2.18361 12.068 2.5C12.2875 2.84915 12.2465 3.30187 11.968 3.606C11.0113 4.90556 10.6152 6.53422 10.868 8.128C11.0782 9.71686 11.9536 11.1416 13.276 12.047C15.3768 13.6555 18.2952 13.6555 20.396 12.047C20.5873 11.9145 20.8134 11.8414 21.046 11.837C21.2038 11.8373 21.3593 11.8746 21.5 11.946C21.817 12.1825 22.0026 12.5556 22.0001 12.951C21.801 15.6324 20.4926 18.1092 18.39 19.785C16.5442 21.1943 14.2932 21.971 11.971 22ZM9.16304 4.311C6.22167 5.35162 4.17487 8.03424 3.94804 11.146C3.74761 13.2674 4.39674 15.3816 5.75304 17.025C7.09938 18.6691 9.05131 19.7015 11.168 19.889C11.43 19.914 11.696 19.927 11.958 19.927C13.8023 19.9417 15.589 19.2852 16.985 18.08C18.0691 17.168 18.8983 15.9908 19.392 14.663C18.5224 14.9771 17.6047 15.1375 16.68 15.137C14.9494 15.1366 13.2642 14.5834 11.87 13.558C10.1858 12.2776 9.04149 10.4134 8.66204 8.332C8.57175 6.972 8.74179 5.60727 9.16304 4.311Z'
              : 'M12.998 22H10.998V19H12.998V22ZM18.362 19.778L16.241 17.657L17.655 16.243L19.777 18.365L18.364 19.778H18.362ZM5.63405 19.778L4.21905 18.364L6.33905 16.242L7.75405 17.656L5.63405 19.777V19.778ZM11.998 17.007C9.23302 17.0059 6.99231 14.7637 6.99305 11.9987C6.99378 9.23364 9.23568 6.99263 12.0007 6.993C14.7657 6.99337 17.007 9.23497 17.007 12C17.0043 14.7649 14.763 17.0053 11.998 17.007ZM11.998 8.993C10.3376 8.9941 8.99231 10.3409 8.99305 12.0013C8.99378 13.6618 10.3403 15.0074 12.0007 15.007C13.6612 15.0066 15.007 13.6605 15.007 12C15.0054 10.3392 13.6589 8.99355 11.998 8.993ZM21.998 13H18.998V11H21.998V13ZM4.99805 13H1.99805V11H4.99805V13ZM17.654 7.758L16.241 6.343L18.362 4.221L19.777 5.636L17.655 7.757L17.654 7.758ZM6.34105 7.758L4.22105 5.637L5.63605 4.223L7.75605 6.345L6.34205 7.757L6.34105 7.758ZM12.998 5H10.998V2H12.998V5Z'
          }
          fill="var(--color-text-secondary)"></path>
      </svg>
    </ThemeToggle>
  );
};

const Wrapper = styled.header`
  flex-shrink: 0;
  border-bottom: 1px solid #dddddd;
  background: var(--color-background);
  width: 100%;
`;

const Content = styled(AppWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`.withComponent('nav');

const LogoImage = styled.img`
  height: 2.9rem;
  border-radius: 50%;
`;

const StyledLink = styled.a`
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Nav: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Link href="/" passHref>
            <StyledLink>
              <LogoImage src="/images/astro.png" alt="home" />
              <span>Arpit</span>
            </StyledLink>
          </Link>
          <Link href="/posts" passHref>
            <StyledLink>Posts</StyledLink>
          </Link>
          <ThemeSwitch />
        </Content>
      </Wrapper>
    </>
  );
};

export default Nav;

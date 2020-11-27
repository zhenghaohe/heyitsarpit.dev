import styled from '@emotion/styled';
import Link from 'next/link';
import { RiArticleFill } from 'react-icons/ri';

import ScrollProgress from './ScrollProgress';
import ThemeSwitch from './ThemeSwitch';

const Wrapper = styled.div`
  --width: 80px;

  width: var(--width);
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 2;

  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),
    0 5px 5px -3px rgba(0, 0, 0, 0.2);
  background: #0000008f;
  backdrop-filter: blur(10px) saturate(1.7);

  @media (max-width: 1000px) {
    position: sticky;

    width: 100%;
    height: var(--width);
  }

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const Content = styled.nav`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: row;
  }
`;

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

const ProgressBar = styled('div')`
  @media (min-width: 1000px) {
    width: 7px;
    height: 100%;
    will-change: width;
    transform-origin: 0% 50%;
  }
`;

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <ProgressBar>
        <ScrollProgress control="height" />
      </ProgressBar>
      <Content>
        <Link href="/" passHref>
          <StyledLink title="Home" aria-label="Home">
            <LogoImage src="/images/astro.png" alt="home" />
          </StyledLink>
        </Link>
        <Link href="/posts" passHref>
          <StyledLink title="Posts" aria-label="Home">
            <RiArticleFill size="2rem" />
          </StyledLink>
        </Link>
        <ThemeSwitch />
      </Content>
    </Wrapper>
  );
};

export default Nav;

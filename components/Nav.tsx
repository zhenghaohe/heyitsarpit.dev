import styled from '@emotion/styled';
import Link from 'next/link';

import ThemeSwitch from './ThemeSwitch';

const Wrapper = styled.aside`
  --width: 4rem;

  width: var(--width);
  height: 100vh;

  position: fixed;
  z-index: 1;

  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),
    0 5px 5px -3px rgba(0, 0, 0, 0.2);
  background: black;
  border: 1px solid red;

  @media (max-width: 1000px) {
    width: 100%;
    height: var(--width);
  }

  display: flex;
  justify-content: center;
`;

const Content = styled.nav`
  position: fixed;

  display: flex;
  flex-direction: column;

  height: 95%;
  justify-content: space-between;
  align-items: center;
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

const Nav: React.FC = () => {
  return (
    <Wrapper>
      {/* <Content>
        <Link href="/" passHref>
          <StyledLink>
            <LogoImage src="/images/astro.png" alt="home" />
          </StyledLink>
        </Link>
        <Link href="/posts" passHref>
          <StyledLink>Posts</StyledLink>
        </Link>
        <ThemeSwitch />
      </Content> */}
    </Wrapper>
  );
};

export default Nav;

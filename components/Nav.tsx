import styled from '@emotion/styled';
import Link from 'next/link';

import ThemeSwitch from './ThemeSwitch';

const Wrapper = styled.div`
  /* width: 5rem; */
  /* height: 100vh; */
  /* position: fixed; */

  background: black;
  color: white;
`;

const Content = styled.nav`
  display: flex;
  /* flex-direction: column; */
  flex-direction: row;

  height: 95%;
  justify-content: space-between;
  align-items: center;
`;

// const Wrapper = styled.header`
//   flex-shrink: 0;
//   border-bottom: 1px solid #dddddd;
//   background: var(--color-background);
//   width: 100%;
// `;

// const Content = styled(AppWrapper)`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   height: 3rem;
// `.withComponent('nav');

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
      <Content>
        <Link href="/" passHref>
          <StyledLink>
            <LogoImage src="/images/astro.png" alt="home" />
          </StyledLink>
        </Link>
        <Link href="/posts" passHref>
          <StyledLink>Posts</StyledLink>
        </Link>
        <ThemeSwitch />
      </Content>
    </Wrapper>
  );
};

export default Nav;

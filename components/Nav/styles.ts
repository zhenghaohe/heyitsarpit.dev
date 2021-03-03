import { styled } from '@linaria/react';

export const Wrapper = styled.header`
  --width: 60px;

  width: var(--width);
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 2;

  box-shadow: var(--nav-box-shadow);
  background: var(--color-nav-background);
  backdrop-filter: blur(10px) saturate(1.7);

  transition: 500ms;
  transition-property: background, color;

  @media (max-width: 1000px) {
    position: sticky;

    width: 100%;
    height: var(--width);
  }

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const Content = styled.nav`
  display: flex;
  /* flex: 1; */

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: row;
    padding: 0 1rem;
  }
`;

export const LogoImage = styled.img`
  height: 2.9rem;
  border-radius: 50%;
`;

export const StyledLink = styled.a`
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled('div')`
  @media (min-width: 1000px) {
    width: 7px;
    height: 100%;
    will-change: width;
    transform-origin: 0% 50%;
  }
`;

import { styled } from '@linaria/react';

export const Container = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const ProgressBar = styled('div')`
  @media (max-width: 1000px) {
    width: 100%;
    height: 6px;

    position: fixed;
    left: 0%;
    top: 0%;
    right: auto;
    z-index: 800;
    bottom: auto;

    transform-origin: 0% 50%;

    display: block;
    will-change: width;
  }
`;

export const Main = styled.main`
  flex: 1;
`;


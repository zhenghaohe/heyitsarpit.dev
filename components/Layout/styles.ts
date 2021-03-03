import { styled } from '@linaria/react';

export const Container = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Main = styled.main`
  flex: 1;
`;


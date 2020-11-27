import styled from '@emotion/styled';

import Main from './Main';
import Nav from './Nav';
import ScrollProgress from './ScrollProgress';

const Container = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 1000px) {
    display: block;
    height: auto;
  }
`;

const ProgressBar = styled('div')`
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

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ProgressBar>
        <ScrollProgress control="width" />
      </ProgressBar>
      <Container>
        <Nav />
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default Layout;

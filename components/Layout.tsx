import styled from '@emotion/styled';

import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';
import ScrollProgress from './ScrollProgress';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Container>
        <Nav />
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default Layout;

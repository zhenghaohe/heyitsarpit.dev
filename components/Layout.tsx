import styled from '@emotion/styled';

import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';
import ScrollProgress from './ScrollProgress';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Container>
        <Nav />
        <Main>{children}</Main>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default Layout;

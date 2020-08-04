import styled from '@emotion/styled';

import Footer from './Footer';
import Nav from './Nav';
import ScrollProgress from './ScrollProgress';

const MediaQueries = styled.div`
    @media screen {
        max-width: 50%;
    }
    @media screen and (max-width: 1690px) {
        max-width: 50%;
    }
    @media screen and (max-width: 1280px) {
        max-width: 70%;
    }
    @media screen and (max-width: 980px) {
        max-width: 80%;
    }
    @media screen and (max-width: 736px) {
        max-width: 100%;
    }
    @media screen and (max-width: 480px) {
        max-width: 100%;
    }
`;

const Container = styled(MediaQueries)`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const ContainerNav = styled(Container)`
    justify-content: center;
    height: 100%;
`;

const NavBox = styled.div`
    border-bottom: 1px solid #dddddd;
    height: 3rem;
`;

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <ScrollProgress />
            <NavBox>
                <ContainerNav>
                    <Nav />
                </ContainerNav>
            </NavBox>
            <Container>{children}</Container>
            <Footer />
        </>
    );
};

export default Layout;

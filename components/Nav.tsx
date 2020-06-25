import styled from '@emotion/styled';
import Link from 'next/link';

const NavStyled = styled.div`
    border-bottom: 1px solid #dddddd;
    height: 3rem;
`;
const Container = styled.div`
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

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

const StyledLink = styled.span`
    cursor: pointer;
`;

const Nav: React.FC = () => {
    return (
        <NavStyled id="nav">
            <Container>
                <Link href="/">
                    <StyledLink>Arpit Bharti</StyledLink>
                </Link>
                <Link href="#resume">Resume</Link>
            </Container>
        </NavStyled>
    );
};

export default Nav;

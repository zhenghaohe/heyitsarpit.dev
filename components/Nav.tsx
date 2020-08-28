import styled from '@emotion/styled';
import Link from 'next/link';

const NavStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled.span`
    cursor: pointer;
`;

const Nav: React.FC = () => {
    return (
        <NavStyled id="nav">
            <Link href="/">
                <StyledLink>Arpit Bharti</StyledLink>
            </Link>
            <Link href="/blogs">
                <a>Blogs</a>
            </Link>
        </NavStyled>
    );
};

export default Nav;

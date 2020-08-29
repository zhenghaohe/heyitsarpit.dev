import styled from '@emotion/styled';
import Link from 'next/link';

import AppWrapper from './Common/AppWrapper';

const Wrapper = styled.nav`
    flex-shrink: 0;
    border-bottom: 1px solid #dddddd;
`;

const Content = styled(AppWrapper)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
`;

const StyledLink = styled.span`
    cursor: pointer;
`;

const Nav: React.FC = () => {
    return (
        <Wrapper id="nav">
            <Content>
                <Link href="/">
                    <StyledLink>Arpit Bharti</StyledLink>
                </Link>
                <Link href="/blogs">
                    <a>Blogs</a>
                </Link>
            </Content>
        </Wrapper>
    );
};

export default Nav;

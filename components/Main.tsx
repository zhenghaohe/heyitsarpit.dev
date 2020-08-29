import styled from '@emotion/styled';

import AppWrapper from './Common/AppWrapper';

const Wrapper = styled.main`
    flex-grow: 1;
`;

const Content = styled(AppWrapper)``;

const Nav: React.FC = ({ children }) => {
    return (
        <Wrapper id="nav">
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Nav;

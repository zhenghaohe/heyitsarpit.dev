import styled from '@emotion/styled';

const Wrapper = styled.main`
    flex-grow: 1;
`;

const Main: React.FC = ({ children }) => {
    return <Wrapper id="main">{children}</Wrapper>;
};

export default Main;

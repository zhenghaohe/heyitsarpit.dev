import styled from '@emotion/styled';

const HomeStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 5rem;
`;

const Home: React.FC = () => {
    return <HomeStyled>Hello World</HomeStyled>;
};

export default Home;

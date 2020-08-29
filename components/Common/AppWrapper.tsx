import styled from '@emotion/styled';

const AppWrapper = styled.div`
    margin: auto;
    width: 100%;

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
        padding: 0 0.9rem;
    }
    @media screen and (max-width: 480px) {
        max-width: 100%;
        padding: 0 0.9rem;
    }
`;

export default AppWrapper;

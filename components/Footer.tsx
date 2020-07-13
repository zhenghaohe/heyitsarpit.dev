import styled from '@emotion/styled';

const FooterStyled = styled.div`
    width: 100%;
    height: 2rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    color: #fff;
    background: #21262f;
`;

const Footer: React.FC = () => {
    return <FooterStyled id="footer">made by me!</FooterStyled>;
};

export default Footer;

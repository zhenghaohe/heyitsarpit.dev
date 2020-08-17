import styled from '@emotion/styled';
import { useState } from 'react';

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

    & a {
        text-decoration: none;
        color: white;
        letter-spacing: 2px;
        text-transform: capitalize;
        font-size: 0.7rem;
    }
`;

const Links = [
    'https://www.youtube.com/watch?v=3bNITQR4Uso', // Plastic Love
    'https://www.youtube.com/watch?v=-ed6UeDp1ek', // Let it happen
    'https://www.youtube.com/watch?v=xUNqsfFUwhY', // Here comes the sun
    'https://www.youtube.com/watch?v=NvsQPCbgJOA', // Bodys
    'https://www.youtube.com/watch?v=826mxiKjoP0', // The adults are talking
    'https://www.youtube.com/watch?v=Ql_dEdMEjl4', // Flowers
    'https://www.youtube.com/watch?v=8ECPu3iumnE', // Mystery of love
    'https://www.youtube.com/watch?v=KmpzIU301VU', // Separator
    'https://www.youtube.com/watch?v=c_-cUdmdWgU' // Chicago
];

const Footer: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * Links.length));

    const onClick = () => {
        setClicked(true);
        setRandomIndex(Math.max(randomIndex + 1, 0));
    };

    return (
        <FooterStyled id="footer">
            <a
                href={Links[randomIndex]}
                target="_blank"
                onClick={onClick}
                rel="noopener noreferrer">
                {!clicked ? 'Click Me!' : 'Click Me Again!!'}
            </a>
        </FooterStyled>
    );
};

export default Footer;

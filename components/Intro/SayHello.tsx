import styled from '@emotion/styled';
import Link from 'next/link';

const StyledLink = styled.a`
    grid-area: SayHello;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    border-radius: 0px;
    background-color: #564eff;
    transition: all 0.3s ease;
    color: #fff;
    font-size: 1rem;
    line-height: 22px;
    font-weight: 500;
    letter-spacing: 0.8px;

    width: 100%;
    box-sizing: border-box;

    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    align-self: center;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(39, 17, 45, 0.1);
    }
`;

const SayHello: React.FC = () => {
    return (
        <Link href="mailto:arpitbharti73@gmail.com" prefetch={false}>
            <StyledLink target="_blank" rel="noopener noreferrer">
                Say Hello!
            </StyledLink>
        </Link>
    );
};

export default SayHello;
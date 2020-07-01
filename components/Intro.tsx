import styled from '@emotion/styled';

import Image from './Image';
import SayHello from './SayHello';
import Social from './Social';

const IntroStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1px 1px;
    grid-template-areas: 'Greeting Greeting Image' 'Description Description Image' 'SayHello Social Image';

    padding-top: 5rem;
    color: var(--color-text);

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Greeting = styled.div`
    grid-area: Greeting;
    font-size: 2.5rem;
`;

const Description = styled.div`
    grid-area: Description;
`;

const Intro: React.FC = () => {
    return (
        <IntroStyled id="intro">
            <Greeting>Hello, I&apos;m Arpit</Greeting>
            <Description>Software Developer</Description>
            <SayHello />
            <Social />
            <Image />
        </IntroStyled>
    );
};

export default Intro;

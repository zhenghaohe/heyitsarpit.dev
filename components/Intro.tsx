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
    font-size: 2.4rem;
`;

const Description = styled.div`
    grid-area: Description;
`;

const Intro: React.FC = () => {
    const emojis = [0x1f91f, 0x1f44b, 0x1f44a, 0x2728, 0x1f525, 0x26a1, 0x1f64c, 0x1f64c];
    const selectedEmoji = String.fromCodePoint(emojis[Math.floor(Math.random() * emojis.length)]);

    return (
        <IntroStyled id="intro">
            <Greeting>Hello, I&apos;m Arpit {selectedEmoji}</Greeting>
            <Description>Software Developer</Description>
            <SayHello />
            <Social />
            <Image />
        </IntroStyled>
    );
};

export default Intro;

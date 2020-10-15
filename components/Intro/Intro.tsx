import styled from '@emotion/styled';
import { memo, useEffect, useRef, useState } from 'react';

import AppWrapper from '../Common/AppWrapper';
import Image from './Image';
import SayHello from './SayHello';
import Social from './Social';

type IntervalFunction = () => unknown | void;

function useInterval(callback: IntervalFunction, delay: number) {
  const savedCallback = useRef<IntervalFunction | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    };
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const IntroStyled = styled(AppWrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: 'Greeting Greeting Image' 'Description Description Image' 'SayHello Social Image';

  padding: 5rem 0;

  color: var(--color-text);

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Description = styled.div`
  grid-area: Description;
  @media screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const GreetingStyled = styled.h1`
  grid-area: Greeting;
  font-size: 2.4rem;
  font-weight: 900;
  padding: 0;
  margin: 0;
`;

const Greeting: React.FC = memo(({ children }) => {
  const emojis = [0x1f91f, 0x1f44b, 0x1f44a, 0x2728, 0x1f525, 0x26a1, 0x1f64c, 0x1f64c];
  const [emoji, setEmoji] = useState(String.fromCodePoint(0x1f91f));

  useInterval(() => {
    setEmoji(String.fromCodePoint(emojis[Math.floor(Math.random() * emojis.length)]));
  }, 3000);

  return (
    <GreetingStyled>
      {children} {emoji}
    </GreetingStyled>
  );
});

Greeting.displayName = 'Greeting';

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

import { styled } from '@linaria/react';
import { useEffect, useRef } from 'react';

const Wrapper = styled('div')`
  /* Portrait*/
  width: 7px;
  height: 100%;
  will-change: width;
  transform-origin: 0% 50%;

  /* Landscape */
  @media (max-width: 1000px) {
    width: 100%;
    height: 6px;

    position: fixed;
    left: 0%;
    top: 0%;
    right: auto;
    z-index: 800;
    bottom: auto;

    transform-origin: 0% 50%;

    display: block;
    will-change: height;
  }
`;

const Bar = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

  background-size: 350% 350%;

  height: var(--length, 0);
  @media (max-width: 1000px) {
    width: var(--length, 0);
    height: 6px;
  }

  animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
`;

const getLength = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const ratio = scrollTop / (scrollHeight - clientHeight);

  return ratio * 100 + '%';
};

const ScrollProgress: React.FC = () => {
  const bar$ = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setLength = () => {
      const length = getLength();
      bar$.current?.style.setProperty('--length', length);
    };

    setLength();
    window.addEventListener('scroll', setLength);

    return () => {
      window.removeEventListener('scroll', setLength);
    };
  }, []);

  return (
    <Wrapper>
      <Bar ref={bar$} />
    </Wrapper>
  );
};

export default ScrollProgress;

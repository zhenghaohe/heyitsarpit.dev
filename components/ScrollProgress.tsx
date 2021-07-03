import { styled } from '@linaria/react';
import Router from 'next/router';
import { useEffect, useRef } from 'react';

const Bar = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

  background-size: 350% 350%;

  width: var(--length, 0);
  height: 6px;

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

  const setLength = (length: string) => {
    bar$.current?.style.setProperty('--length', length);
  };

  useEffect(() => {
    const speed = 50;
    let length = 0;
    let tick: NodeJS.Timeout;

    Router.events.on('routeChangeStart', () => {
      const startTime = performance.now();

      tick = setInterval(() => {
        const endTime = performance.now();
        let timeDiff = endTime - startTime;
        timeDiff /= 1000;

        length = 10 * timeDiff ** 0.5;
        setLength(`${length}%`);
      }, speed);
    });

    Router.events.on('routeChangeComplete', () => {
      clearInterval(tick);
      setLength('100%');
    });

    Router.events.on('routeChangeError', () => {
      clearInterval(tick);
      setLength('100%');
    });
  }, []);

  useEffect(() => {
    const length = getLength();
    setLength(length);

    const tick = () => setLength(getLength());
    window.addEventListener('scroll', tick);

    return () => {
      window.removeEventListener('scroll', tick);
    };
  }, []);

  return (
    <div className="w-full sm:h-1 h-2 fixed z-20">
      <Bar ref={bar$} className="" />
    </div>
  );
};

export default ScrollProgress;

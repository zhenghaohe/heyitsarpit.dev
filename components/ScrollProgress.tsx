import Router from 'next/router';
import { useEffect, useRef } from 'react';

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
    <div className="w-full fixed z-20">
      <div
        ref={bar$}
        className="animate-gradient bg-iridescent bg-zoom-350 h-[6px] w-[var(--length)]"
      />
    </div>
  );
};

export default ScrollProgress;

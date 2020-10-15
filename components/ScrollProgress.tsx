import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const ProgressBar = styled('div')`
  position: fixed;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: auto;
  z-index: 800;
  display: block;
  height: 6px;
  background-color: #25b5ff;
  will-change: width;
  transform-origin: 0% 50%;
`;

const ScrollProgress: React.FC = () => {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const getLength = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      // scrollHeight - clientHeight === scrollTopMax
      const ratio = scrollTop / (scrollHeight - clientHeight);
      setLength(ratio * 100);
    };
    window.addEventListener('scroll', getLength);
    return () => {
      window.removeEventListener('scroll', getLength);
    };
  }, []);

  return <ProgressBar style={{ width: `${length}%` }} />;
};

export default ScrollProgress;

import { createContext, useContext, useEffect, useState } from 'react';

type ContextValue = { length: number };

const ScrollContext = createContext<ContextValue>({ length: 0 });

ScrollContext.displayName = 'ScrollContext';

const ScrollProvider: React.FC = ({ children }) => {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const getLength = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const ratio = scrollTop / (scrollHeight - clientHeight);
      setLength(ratio * 100);
    };
    window.addEventListener('scroll', getLength);
    return () => {
      window.removeEventListener('scroll', getLength);
    };
  }, []);

  return <ScrollContext.Provider value={{ length }}>{children}</ScrollContext.Provider>;
};

const useScroll = (): ContextValue => useContext(ScrollContext);

export { useScroll, ScrollProvider };

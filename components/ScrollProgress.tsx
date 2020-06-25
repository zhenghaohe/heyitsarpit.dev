import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const ProgressBar = styled('div')<{ length: number }>`
    width: ${(props) => props.length}%;

    position: fixed;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    z-index: 800;
    display: block;
    height: 6px;
    background-color: #ffc71b;
    transform-origin: 0% 50%;
`;

const ScrollProgress: React.FC = () => {
    const [length, setLength] = useState(0);

    useEffect(() => {
        const getLength = () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            const { scrollTop, scrollTopMax } = document.documentElement; // TODO: File a bug for this.
            const ratio = scrollTop / scrollTopMax;
            setLength(Math.round(ratio * 100));
        };

        window.addEventListener('scroll', getLength);
        return () => {
            window.removeEventListener('scroll', getLength);
        };
    }, []);

    return <ProgressBar length={length} />;
};

export default ScrollProgress;

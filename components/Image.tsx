import styled from '@emotion/styled';
import { MouseEvent, useEffect, useRef, useState } from 'react';

const ImageStyled = styled('img')<{ rotation: { x: number; y: number } }>`
    width: 15rem;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
        rotateX(${({ rotation }) => rotation.x}deg) rotateY(${({ rotation }) => rotation.y}deg)
        rotateZ(0deg) skew(0deg);
    transform-style: preserve-3d;
    margin-left: 40px;
`;

const Image: React.FC = () => {
    // const [rotation, setRotation] = useStateWithPromise({ x: 0, y: 0 });
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const imageRef = useRef<HTMLImageElement>(null);

    let rect: DOMRect;
    let imageCenter = { x: 0, y: 0 };

    useEffect(() => {
        rect = imageRef?.current?.getBoundingClientRect() as DOMRect;
        imageCenter = {
            x: rect?.left + (rect?.right - rect?.left) / 2,
            y: rect?.top + (rect?.bottom - rect?.top) / 2
        };
    }, [imageRef.current, imageCenter]);

    const getCoefficients = (mx: number, my: number) => {
        return { cx: Math.sign(my), cy: Math.sign(mx) };
    };

    const handleMouseMove = async (e: MouseEvent<HTMLImageElement>) => {
        const mouseX = (e.clientX - imageCenter.x) / ((rect?.right - rect?.left) / 2);
        const mouseY = (-1 * (e.clientY - imageCenter.y)) / ((rect?.bottom - rect?.top) / 2);
        const { cx, cy } = getCoefficients(mouseX, mouseY);

        // logQuadrant(20 * mouseX, 30 * mouseY);
        setRotation({
            x: 15 * cx * Math.abs(mouseY),
            y: 15 * cy * Math.abs(mouseX)
        });
    };

    return (
        <ImageStyled
            rotation={rotation}
            ref={imageRef}
            onMouseMove={(e) => handleMouseMove(e)}
            id="my_image"
            src="/images/me-cutout_bent_test.png"
            alt="arpit cutout"
        />
    );
};

export default Image;

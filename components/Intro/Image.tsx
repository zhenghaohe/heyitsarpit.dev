import styled from '@emotion/styled';
import { MouseEvent, useEffect, useRef, useState } from 'react';

type Coordinate = [number, number];

const useDebounce = (value: Coordinate, timeout: number) => {
    const [state, setState] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);

        return () => clearTimeout(handler);
    }, [...value, timeout]);

    return state;
};

const Floats = styled.img`
    position: absolute;
    z-index: 1;
    width: 5rem;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

const PC = styled(Floats)`
    padding-top: 110%;
`;

const Wave = styled(Floats)`
    top: -10%;
    right: -35%;
`;

const ImageContainer = styled.div`
    --image-width: 13rem;

    grid-area: Image;
    width: var(--image-width);
    perspective: 1000px;
    justify-self: end;

    @media screen and (max-width: 480px) {
        --image-width: 21rem;
    }
`;

const ImageStyled = styled('img')`
    width: var(--image-width);
    position: absolute;
    will-change: transform;
    transition: transform 0.5s;
    transform-style: preserve-3d;

    @media screen and (max-width: 480px) {
        position: static;
    }
`;

const Image: React.FC = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const [mouse, setMouse] = useState<Coordinate>([0, 0]);
    const debouncedMouse = useDebounce(mouse, 15);

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

    useEffect(() => {
        const [mouseX_G, mouseY_G] = debouncedMouse;
        const mouseX_L = (mouseX_G - imageCenter.x) / ((rect?.right - rect?.left) / 2);
        const mouseY_L = (-1 * (mouseY_G - imageCenter.y)) / ((rect?.bottom - rect?.top) / 2);

        const getCoefficients = (mx: number, my: number) => {
            return {
                cx: Math.abs(my) < 1 ? Math.sign(my) : 0,
                cy: Math.abs(mx) < 1 ? Math.sign(mx) : 0
            };
        };

        const { cx, cy } = getCoefficients(mouseX_L, mouseY_L);

        setRotation({
            x: 20 * cx * Math.abs(mouseY_L),
            y: 15 * cy * Math.abs(mouseX_L)
        });
    }, [...debouncedMouse]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        setMouse([e.clientX, e.clientY]);
    };

    const handleMouseLeave = () => {
        setMouse([0, 0]);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <ImageContainer onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={handleMouseLeave}>
            <PC id="pc" src="/images/pc_icon.png" alt="pc icon" />
            <Wave id="wave" src="/images/pngwave.png" alt="windows icon" />
            <ImageStyled
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
                ref={imageRef}
                id="my_image"
                src="/images/me-cutout_bent_test.png"
                alt="arpit cutout"
            />
        </ImageContainer>
    );
};

export default Image;

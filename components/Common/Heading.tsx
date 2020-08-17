import styled from '@emotion/styled';
import Link from 'next/link';

type HeadingProps = React.ComponentProps<typeof Link>;

const HeadingLink = styled.a`
    font-weight: 900;
    font-size: 2.2rem;
    cursor: pointer;
`;

const Heading: React.FC<HeadingProps> = ({ href, children }) => {
    return (
        <Link href={href}>
            <HeadingLink>{children}</HeadingLink>
        </Link>
    );
};

export default Heading;

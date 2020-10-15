import styled from '@emotion/styled';
import Link from 'next/link';

type HeadingProps = React.ComponentProps<typeof Link>;

const HeadingLink = styled.a`
  font-weight: 900;
  font-size: 2.2rem;
  cursor: pointer;
  color: var(--color-text);
`;

const Heading: React.FC<HeadingProps> = ({ href, children }) => {
  return (
    <h2>
      <Link href={href}>
        <HeadingLink>{children}</HeadingLink>
      </Link>
    </h2>
  );
};

export default Heading;

import styled from '@emotion/styled';
import Link from 'next/link';

const Title = styled.div``;
const Description = styled.div``;
const Sources = styled.div``;

type ProjectProps = {
    title: string;
    description: string;
    codeLink: string;
    liveLink?: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, codeLink, liveLink }) => {
    return (
        <>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Sources>
                <Link href={codeLink} prefetch={false}>
                    <a target="_blank" rel="noopener noreferrer">
                        Code
                    </a>
                </Link>
                {liveLink && (
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    <Link href={liveLink!} prefetch={false}>
                        <a target="_blank" rel="noopener noreferrer">
                            Live
                        </a>
                    </Link>
                )}
            </Sources>
        </>
    );
};

export default Project;

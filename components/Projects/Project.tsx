import styled from '@emotion/styled';

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
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    Code
                </a>
                {liveLink ? (
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    <a href={liveLink!} target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                ) : null}
            </Sources>
        </>
    );
};

export default Project;

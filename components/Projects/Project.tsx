import styled from '@emotion/styled';

const Title = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
`;
const Description = styled.div``;
const Sources = styled.div`
    & a {
        text-decoration: none;
        color: blue;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export type ProjectProps = {
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
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                ) : null}
            </Sources>
        </>
    );
};

export default Project;

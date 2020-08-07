import styled from '@emotion/styled';

const Title = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: capitalize;
`;

const Description = styled.div`
    padding: 0.7rem 0;
    color: #666;
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-justify: inter-word;
`;

const Sources = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: blue;
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
                <StyledLink href={codeLink} target="_blank" rel="noopener noreferrer">
                    Code
                </StyledLink>
                {liveLink ? (
                    <StyledLink href={liveLink} target="_blank" rel="noopener noreferrer">
                        Live
                    </StyledLink>
                ) : null}
            </Sources>
        </>
    );
};

export default Project;

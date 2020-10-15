import styled from '@emotion/styled';

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0;
  color: var(--color-highlight-2);
`;

const Description = styled.p`
  padding: 0.7rem 0;
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin: 0;

  flex-grow: 1;
`;

const Sources = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* border-top: 1px solid rgba(33, 38, 47, 0.2);
    padding-top: 5px; */
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: blue;
  font-size: 0.9rem;
  font-weight: 900;
  color: var(--color-link);
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

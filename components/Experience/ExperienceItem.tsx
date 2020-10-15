import styled from '@emotion/styled';

const Duration = styled.div`
  color: var(--color-text-secondary);
`;

const Company = styled.div`
  font-weight: bold;
  color: var(--color-highlight-2);
`;

const Role = styled.div`
  color: var(--color-text-secondary);
`;

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  color: var(--color-text);
  font-size: 0.8rem;
`;

export type ExperienceProps = {
  start: number;
  end: number | string;
  role: string;
  company: string;
};

const ExperienceItem: React.FC<ExperienceProps> = ({ start, role, company }) => {
  return (
    <Wrapper>
      <Duration>{start}</Duration>
      <Company>{company}</Company>
      <Role>{role}</Role>
    </Wrapper>
  );
};

export default ExperienceItem;

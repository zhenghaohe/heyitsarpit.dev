import styled from '@emotion/styled';

const Duration = styled.div`
    color: rgba(33, 38, 47, 0.5);
`;

const Company = styled.div`
    font-weight: bold;
`;

const Role = styled.div``;

const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    color: rgba(33, 38, 47, 1);
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

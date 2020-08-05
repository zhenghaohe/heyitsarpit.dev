import styled from '@emotion/styled';

const Duration = styled.div`
    color: rgba(33, 38, 47, 0.5);
`;

const Company = styled.div`
    font-weight: 900;
`;

const Role = styled.div``;

const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    color: rgba(33, 38, 47, 1);
`;

export type ExperienceProps = {
    start: number;
    end: number | string;
    role: string;
    company: string;
};

const ExperienceItem: React.FC<ExperienceProps> = ({ start, end, role, company }) => {
    return (
        <Wrapper>
            <Duration>
                {start}-{end}
            </Duration>
            <Company>{company}</Company>
            <Role>{role}</Role>
        </Wrapper>
    );
};

export default ExperienceItem;

import styled from '@emotion/styled';

import AppWrapper from '../Common/AppWrapper';
import Title from '../Common/Heading';
import ExperienceItem, { ExperienceProps } from './ExperienceItem';

const ExperienceStyled = styled(AppWrapper)`
  margin-top: 60px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  padding-bottom: 0.9rem;
  margin-bottom: 0.9rem;
  border-bottom: 1px solid rgba(33, 38, 47, 0.2);
`;

const LinkedIn = styled.a`
  font-weight: 400;
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--color-link);
  opacity: 0.8;

  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

const Content = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* display: grid;
    grid-template-columns: repeat(3 , 1fr) */
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Data: ExperienceProps[] = [
  {
    start: 2020,
    end: 'Present',
    company: 'QuillHash Technologies',
    role: 'Fullstack Developer'
  },
  {
    start: 2019,
    end: 'Present',
    company: 'Mozilla',
    role: 'Junior Developer'
  },
  {
    start: 2018,
    end: '',
    company: 'Splisys IT Consulting',
    role: 'Research Intern'
  }
];

const Experience: React.FC = () => {
  return (
    <ExperienceStyled id="experience">
      <Heading>
        <Title href="#experience">Experience</Title>
        <LinkedIn
          href="https://www.linkedin.com/in/arpitbharti/"
          target="_blank"
          rel="noopener noreferrer">
          View more on LinkedIn →
        </LinkedIn>
      </Heading>
      <Content>
        <List>
          {Data.map((item) => (
            <ExperienceItem key={item.company + item.role} {...item} />
          ))}
        </List>
      </Content>
    </ExperienceStyled>
  );
};

export default Experience;

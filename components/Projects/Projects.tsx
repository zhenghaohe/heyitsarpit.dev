import styled from '@emotion/styled';

import AppWrapper from '../Common/AppWrapper';
import Heading from '../Common/Heading';
import Project, { ProjectProps } from './Project';

const ProjectsStyled = styled(AppWrapper)`
  margin-top: 60px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 5px 0 0 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

const Data: ProjectProps[] = [
  {
    title: 'Ship the Public Suffix List (PSL) over Remote Settings',
    description: `Funded via GSoC to work for Mozilla and deliver improvements to the Firefox browser.
        Worked in collaboration with Firefox core developers and community members.
        New Feature shipped in Firefox 70 to millions of users.`,
    codeLink: '/posts/gsoc-2019',
    liveLink: 'https://www.mozilla.org/en-US/firefox/'
  },
  {
    title: 'Expense Tracking App',
    description: `ReactJS application with typescript/redux/styled-components for tracking expenses fetched from an API, ability to comment and upload image receipts.
        Internationalization support(english, french and german) and dark mode support.`,
    codeLink: 'https://github.com/arpit73/expense_app',
    liveLink: 'https://expense-app.now.sh/'
  },
  {
    title: 'Ad Recommendation on YouTube Videos',
    description: `Full stack app using Next JS and Flask.
        Analysis of YouTube captions to generate product recommendations. Also, an analysis of string similarity measurement algorithms.
        Research paper to be published in Springer.
        `,
    codeLink: 'https://github.com/arpit73/ad-recommendation'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsStyled id="projects">
      <Heading href="#projects">Projects</Heading>
      <List>
        {Data.map(({ title, description, codeLink, liveLink }) => (
          <ListItem key={title}>
            <Project
              title={title}
              description={description}
              codeLink={codeLink}
              liveLink={liveLink}
            />
          </ListItem>
        ))}
      </List>
    </ProjectsStyled>
  );
};

export default Projects;

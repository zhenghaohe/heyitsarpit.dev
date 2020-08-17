import styled from '@emotion/styled';

import Heading from '../Common/Heading';
import Project, { ProjectProps } from './Project';

const ProjectsStyled = styled.div`
    margin-top: 60px;
`;

const List = styled.ul`
    /* display: flex;
    /* flex-direction: column; */
    list-style: none;
    margin: 0;
    padding: 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const ListItem = styled.li`
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.2s ease 0.1s;
    display: flex;
    flex-direction: column;
    /* box-shadow: rgba(0, 0, 0, 0.07) 0px 8px 30px 0px; */

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
        /* transform: translateY(-3px); */
    }
`;

const Data: ProjectProps[] = [
    {
        title: 'Ship the Public Suffix List (PSL) over Remote Settings',
        description: `Funded via GSoC to work for Mozilla and deliver improvements to the Firefox browser.
        Worked in collaboration with Firefox core developers and community members.
        New Feature shipped in Firefox 70 to millions of users.`,
        codeLink: 'https://arpit73.netlify.app/posts/Arpit-Bharti-GSoC-2019-Report/',
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

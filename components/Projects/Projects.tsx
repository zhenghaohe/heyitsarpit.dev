import styled from '@emotion/styled';

import Project from './Project';

const ProjectsStyled = styled.div`
    margin-top: 60px;
`;

const Heading = styled.div`
    font-weight: bold;
    font-size: 2.4rem;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li``;

const Projects: React.FC = () => {
    return (
        <ProjectsStyled id="skills">
            <Heading>Skills</Heading>
            <List>
                <ListItem>
                    <Project title="some title" description="somedescription" codeLink="a link" />
                </ListItem>
            </List>
        </ProjectsStyled>
    );
};

export default Projects;

import styled from '@emotion/styled';

import Project, { ProjectProps } from './Project';

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
    padding: 0rem;
`;

const ListItem = styled.li`
    padding: 20px;
    margin: 1rem 0;
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.2s ease 0.1s;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 8px 30px 0px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
        transform: translateY(-3px);
    }
`;

const Data: ProjectProps[] = [
    {
        title: 'some title',
        description: 'some description',
        codeLink: 'lol',
        liveLink: 'string'
    },
    {
        title: 'some title',
        description: 'some description',
        codeLink: 'lol',
        liveLink: 'string'
    },
    {
        title: 'some title',
        description: 'some description',
        codeLink: 'lol'
    }
];

const Projects: React.FC = () => {
    return (
        <ProjectsStyled id="skills">
            <Heading>Projects</Heading>
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

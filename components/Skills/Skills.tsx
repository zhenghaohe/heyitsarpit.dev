import styled from '@emotion/styled';

const SkillsStyled = styled.div`
    margin-top: 60px;
`;

const Heading = styled.div`
    font-weight: bold;
    font-size: 2.4rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    padding: 0.5em 0;
    transition: all 0.5s;
    position: relative;

    /* &:hover {
        padding-bottom: 0.05rem;
    } */
`;

const Skills: React.FC = () => {
    return (
        <SkillsStyled id="skills">
            <Heading>Skills</Heading>
            <Content>
                <List>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>TypeScript</ListItem>
                    <ListItem>Python</ListItem>
                    <ListItem>C++</ListItem>
                    <ListItem>HTML</ListItem>
                    <ListItem>CSS</ListItem>
                </List>
                <List>
                    <ListItem>ReactJS</ListItem>
                    <ListItem>Redux</ListItem>
                    <ListItem>NextJS</ListItem>
                    <ListItem>GraphQL</ListItem>
                    <ListItem>Styled-Components</ListItem>
                </List>
                <List>
                    <ListItem>NodeJS</ListItem>
                    <ListItem>Express</ListItem>
                    <ListItem>MongoDB</ListItem>
                    <ListItem>PostgreSQL</ListItem>
                    <ListItem>TypeORM</ListItem>
                </List>
            </Content>
        </SkillsStyled>
    );
};

export default Skills;

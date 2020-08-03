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

const Data = [
    ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'C++'],
    ['ReactJS', 'Redux', 'React Router', 'NextJS', 'SASS', 'Styled Components'],
    ['NodeJS', 'Express', 'MongoDB', 'AWS', 'PostgreSQL', 'TypeORM'],
    ['Git', 'Mercurial', 'Bash']
];

const Skills: React.FC = () => {
    return (
        <SkillsStyled id="skills">
            <Heading>Skills</Heading>
            <Content>
                {Data.map((list) => (
                    <List key={list[0]}>
                        {list.map((item) => (
                            <ListItem key="item">{item}</ListItem>
                        ))}
                    </List>
                ))}
            </Content>
        </SkillsStyled>
    );
};

export default Skills;

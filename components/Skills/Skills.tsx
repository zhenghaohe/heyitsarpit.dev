import styled from '@emotion/styled';

import Heading from '../Common/Heading';

const SkillsStyled = styled.div`
    margin-top: 60px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    padding-top: 5px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;

    width: 100%;

    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    padding: 0.5em 0;
    font-size: 0.8rem;

    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Item = styled.span`
    padding: 0.5em;
    font-size: 0.8rem;
`;

const Data = [
    ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'C++'],
    ['ReactJS', 'Redux', 'React Router', 'NextJS', 'SASS', 'Styled-Components'],
    ['NodeJS', 'Express', 'MongoDB', 'AWS EC2 | S3', 'PostgreSQL', 'TypeORM'],
    ['Git', 'Mercurial', 'Bash']
];

const Skills: React.FC = () => {
    return (
        <SkillsStyled id="skills">
            <Heading href="#skills">Skills</Heading>
            <Content>
                <List>
                    {Data.map((list) => (
                        <ListItem key={list[0]}>
                            {list.map((item) => (
                                <Item key={item}>{item}</Item>
                            ))}
                        </ListItem>
                    ))}
                </List>
            </Content>
        </SkillsStyled>
    );
};

export default Skills;

import styled from '@emotion/styled';

const AboutMeStyled = styled.div`
    margin-top: 60px;
`;

const Heading = styled.div`
    font-weight: bold;
    font-size: 2.2rem;
`;

const Content = styled.div``;

const AboutMe: React.FC = () => {
    return (
        <AboutMeStyled id="about_me">
            <Heading>About Me</Heading>
            <Content>
                For more than 5 years now, design has been the central piece of my world. On this
                fast and mind-blowing journey, I have moved over the years from being a visual
                designer to a full-time UX/UI thinker and designer. At the moment, this journey has
                brought me to US Mobile where I am a full-time Senior Product Designer. In this
                position, as with freelance, I am working remotely and I have been for approximately
                two years. With the constant goal of pushing design boundaries and maintaining a
                high standard for usability & user experience, I have consistently worked with
                various startups and clients from all around the world and helped them create
                amazing and engaging digital products.
            </Content>
        </AboutMeStyled>
    );
};

export default AboutMe;

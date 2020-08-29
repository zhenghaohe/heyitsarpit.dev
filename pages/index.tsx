import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const Home: React.FC = () => {
    return (
        <>
            <Intro />
            {/* <AboutMe /> */}
            <Experience />
            <Skills />
            <Projects />
        </>
    );
};

export default Home;

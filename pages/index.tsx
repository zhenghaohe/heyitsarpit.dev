import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: React.FC = () => {
    return (
        <>
            <Intro />
            <Skills />
            <Projects />
        </>
    );
};

export default Home;

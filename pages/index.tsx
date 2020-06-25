import Intro from '../components/Intro';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import ScrollProgress from '../components/ScrollProgress';
import Skills from '../components/Skills';

const Home: React.FC = () => {
    return (
        <>
            <ScrollProgress />
            <Nav />
            <Intro />
            <Skills />
            <Projects />
        </>
    );
};

export default Home;

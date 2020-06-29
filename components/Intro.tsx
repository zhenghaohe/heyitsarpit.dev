import Image from './Image';

const Intro: React.FC = () => {
    return (
        <div id="intro">
            <div>
                <span>Hi there, I&apos;m Arpit</span>
                <span role="img" aria-label="hand waving emoji">
                    👋
                </span>
            </div>
            <span>
                <div> Software Developer</div>
                <Image />
            </span>
        </div>
    );
};

export default Intro;
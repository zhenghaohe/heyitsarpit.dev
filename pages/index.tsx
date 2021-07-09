import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="w-full sm:max-w-[75ch] mx-auto h-full px-5 flex justify-center items-center">
      <section className="w-full">
        <h1 className="font-bold text-3xl mb-3">Hi, I&apos;m Arpit</h1>
        <p>
          Software Developer.{' '}
          <Link href="/posts">
            <a className="link">Writing</a>
          </Link>{' '}
          about Programming and Web Development. <br />
          Making 3D {/* <Link href="/art"> */}
          <a
            className="link"
            href="https://www.instagram.com/arpitb_/"
            target="_blank"
            rel="noreferrer">
            Art
          </a>
          {/* </Link> */} and animations. Working at{' '}
          <a
            className="link"
            href="https://www.linkedin.com/company/antillia-llc/"
            target="_blank"
            rel="noreferrer">
            Antillia
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Home;

import { styled } from '@linaria/react';
import Link from 'next/link';

import AppWrapper from '../components/Common/AppWrapper';

const Wrapper = styled(AppWrapper)`
  margin-top: 13rem;
  a {
    color: var(--color-link-posts);
    box-shadow: 0 1px 0 0 currentColor;
    text-decoration: none;
    :hover {
      box-shadow: none;
    }
  }
`;

const Home: React.FC = () => {
  return (
    <Wrapper>
      <h1>Hello I&apos;m Arpit</h1>
      <p>
        Software Developer.{' '}
        <Link href="/posts">
          <a>Writing</a>
        </Link>{' '}
        about Programming and Web Development. <br />
        Making 3D {/* <Link href="/art"> */}
        <a href="https://www.instagram.com/arpitb_/" target="_blank" rel="noreferrer">
          Art
        </a>
        {/* </Link> */} and animations. Working at{' '}
        <a href="https://www.linkedin.com/company/antillia-llc/" target="_blank" rel="noreferrer">
          Antillia
        </a>
      </p>
    </Wrapper>
  );
};

export default Home;

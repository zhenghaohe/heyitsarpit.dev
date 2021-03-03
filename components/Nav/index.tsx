import Link from 'next/link';
import { RiArticleFill } from 'react-icons/ri';

import ScrollProgress from '../ScrollProgress';
import ThemeSwitch from '../ThemeSwitch';
import * as S from './styles';

const Nav: React.FC = () => {
  return (
    <S.Wrapper>
      <ScrollProgress />
      <S.Content>
        <Link href="/" passHref>
          <S.StyledLink title="Home" aria-label="Home">
            <S.LogoImage src="/images/astro.png" alt="home" />
          </S.StyledLink>
        </Link>
        <Link href="/posts" passHref>
          <S.StyledLink title="Posts" aria-label="Home">
            <RiArticleFill size="2rem" />
          </S.StyledLink>
        </Link>
        <ThemeSwitch />
      </S.Content>
    </S.Wrapper>
  );
};

export default Nav;

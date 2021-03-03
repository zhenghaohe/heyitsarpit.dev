import Nav from '../Nav';
import ScrollProgress from '../ScrollProgress';
import * as S from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <S.ProgressBar>
        <ScrollProgress control="width" />
      </S.ProgressBar>
      <S.Container>
        <Nav />
        <S.Main>{children}</S.Main>
      </S.Container>
    </>
  );
};

export default Layout;

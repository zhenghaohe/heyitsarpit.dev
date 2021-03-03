import Nav from '../Nav';
import * as S from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <Nav />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export default Layout;

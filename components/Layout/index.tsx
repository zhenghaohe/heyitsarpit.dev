import Nav from '../Nav';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Nav />
      <main className="w-full h-full">{children}</main>
    </div>
  );
};

export default Layout;

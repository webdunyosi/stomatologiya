import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header har doim tepada turadi */}
      <Header />

      {/* Sahifalar kontenti shu yerga joylashadi */}
      <main className="flex-grow">
        <Outlet /> 
      </main>

      {/* Footer har doim pastda turadi */}
      <Footer />
    </div>
  );
};

export default Layout;
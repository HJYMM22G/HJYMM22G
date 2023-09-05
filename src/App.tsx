import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Header';
import { footerData } from './data/footerData';
import { navData } from './data/navbarData';

function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Navbar links={navData} />
        <main style={{ marginBottom: '20rem' }}>
          <Outlet />
        </main>
        <Footer data={footerData} />
      </HelmetProvider>
    </>
  );
}

export default App;

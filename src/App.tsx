import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Header';
import { footerData } from './data/footerData';
import { navData } from './data/navbarData';
function App() {
  return (
    <>
      <Navbar links={navData} />
      <main style={{ marginBottom: '20rem' }}>
        <Outlet />
      </main>
      <Footer data={footerData} />
    </>
  );
}

export default App;

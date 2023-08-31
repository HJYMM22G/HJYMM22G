import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { footerData } from './data/footerData';
function App() {
  return (
    <>
      <Header />
      <main style={{ marginBottom: '20rem' }}>
        <Outlet />
      </main>
      <Footer data={footerData} />
    </>
  );
}

export default App;

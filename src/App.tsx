import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { footerData } from './data/footerData';

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer data={footerData} />
    </>
  );
}

export default App;

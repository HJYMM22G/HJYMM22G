import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from "./components/Header";
import { footerData } from './data/footerData';
;

function App() {
  return (
    <>
      <main>
        <div>
      <Header />

      <Outlet />
      </main>
      <Footer data={footerData} />
    </>
    </div>
  );;
}

export default App;

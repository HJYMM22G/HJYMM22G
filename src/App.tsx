import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Outlet} from 'react-router-dom';
import {Footer} from './components/Footer';
import Header from './components/Header';
import {footerData} from './data/footerData';
import en from './lang/en.json';
import sv from './lang/sv.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    sv: {translation: sv},
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {escapeValue: false},
});

function App() {
  return (
    <>
      <Header />
      <main style={{marginBottom: '20rem'}}>
        <Outlet />
      </main>
      <Footer data={footerData} />
    </>
  );
}

export default App;

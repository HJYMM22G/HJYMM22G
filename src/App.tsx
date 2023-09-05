import i18n from 'i18next';
import {HelmetProvider} from 'react-helmet-async';
import {initReactI18next} from 'react-i18next';
import {Outlet} from 'react-router-dom';
import {Footer} from './components/Footer';
import {Navbar} from './components/Header';
import {useTranslatedFooterData} from './hooks/useTranslatedFooterData';
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

import {navData} from './data/navbarData';

function App() {
  const translatedData = useTranslatedFooterData();

  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Navbar links={navData} />
        <main style={{marginBottom: '20rem'}}>
          <Outlet />
        </main>
        <Footer data={translatedData} />
      </HelmetProvider>
    </>
  );
}

export default App;

import i18n from 'i18next';
import {HelmetProvider} from 'react-helmet-async';
import {initReactI18next} from 'react-i18next';
import {Outlet} from 'react-router-dom';
import {Footer} from './components/Footer';
import {Navbar} from './components/Header';
import {useTranslatedFooterData} from './hooks/useTranslatedFooterData';
import {useTranslatedNavData} from './hooks/useTranslatedNavData';
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
  const translatedFooterData = useTranslatedFooterData();
  const translatedNavData = useTranslatedNavData();

  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Navbar links={translatedNavData} />
        <main style={{marginBottom: '20rem'}}>
          <Outlet />
        </main>
        <Footer data={translatedFooterData} />
      </HelmetProvider>
    </>
  );
}

export default App;

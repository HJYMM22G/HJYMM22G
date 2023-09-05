import {Button} from '@mantine/core';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

export function LanguageButton() {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language,
  );

  const toggleLanguage = () => {
    const newLanguage =
      currentLanguage === 'en' ? 'sv' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <Button onClick={toggleLanguage}>
        {currentLanguage === 'en' ? 'Svenska' : 'English'}
      </Button>
    </>
  );
}

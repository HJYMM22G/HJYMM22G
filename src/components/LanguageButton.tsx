import {Button, createStyles} from '@mantine/core';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: '#BAB653',
    '&:focus': {
      backgroundColor: '#A5A14C',
      outlineColor: '#646338',
    },
    '&:hover': {
      backgroundColor: '#A5A14C',
    },
  },
}));

export function LanguageButton() {
  const {classes} = useStyles();
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
      <Button
        size='xs'
        className={classes.button}
        onClick={toggleLanguage}>
        {currentLanguage === 'en' ? 'Sv' : 'Eng'}
      </Button>
    </>
  );
}

import {useTranslation} from 'react-i18next';
import {navData} from '../data/navbarData';

export const useTranslatedNavData = () => {
  const {t} = useTranslation();

  return navData.map((link) => ({
    link: link.link,
    label: t(`nav.${link.label}`),
  }));
};

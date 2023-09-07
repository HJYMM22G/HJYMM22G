import {useTranslation} from 'react-i18next';
import {footerData} from '../data/footerData';

export const useTranslatedFooterData = () => {
  const {t} = useTranslation();

  return footerData.map((group) => ({
    title: t(`footer.${group.title}`),
    links: group.links.map((link) => ({
      label: t(`footer.${link.label}`),
      link: link.link,
    })),
  }));
};

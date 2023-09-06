import {useTranslation} from 'react-i18next';
import {staffData} from '../data/staffData';

export const useTranslatedStaffData = () => {
  const {t} = useTranslation();

  return staffData.map((staff) => ({
    ...staff,
    role: t('staff.role'),
    bio: t(`staff.bios.${staff.name.toLowerCase()}`),
    description1: t(
      `staff.desc.${staff.name.toLowerCase()}.description1`,
    ),
    description2: t(
      `staff.desc.${staff.name.toLowerCase()}.description2`,
    ),
    description3: t(
      `staff.desc.${staff.name.toLowerCase()}.description3`,
    ),
  }));
};

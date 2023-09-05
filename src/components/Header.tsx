import {
  Anchor,
  Container,
  createStyles,
  rem,
} from '@mantine/core';
import {useTranslation} from 'react-i18next';
import {LanguageButton} from './LanguageButton';

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing.md}`,
  },
  logo: {
    width: rem(60),
  },
  linkContainer: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  link: {
    color: theme.black,
    textDecoration: 'none',
    fontSize: rem(16),
  },
}));

const Header = () => {
  const {classes} = useStyles();
  const {t} = useTranslation();

  return (
    <Container size='xl'>
      <div className={classes.headerContainer}>
        <div className={classes.logo}>
          <img
            src='../src/assets/logos/devSTUDIO.png'
            alt='Logo'
            width='100%'
          />
        </div>
        <div className={classes.linkContainer}>
          <Container
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'baseline',
            }}>
            <Anchor
              className={classes.link}
              href='/services'>
              {t('header.services')}
            </Anchor>
            <Anchor
              className={classes.link}
              href='/AboutUs'>
              {t('header.aboutUs')}
            </Anchor>
            <Anchor
              className={classes.link}
              href='/Contact'>
              {t('header.contact')}
            </Anchor>
            <LanguageButton />
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Header;

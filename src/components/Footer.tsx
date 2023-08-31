import {
  ActionIcon,
  Box,
  Container,
  Group,
  Text,
  createStyles,
  rem,
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from '@tabler/icons-react';
import logo from '../assets/imgs/logo.png';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    background: '#FBF9F3',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
  },

  actionIcon: {
    color: '#353519',
    '&:hover': {
      background: '#BAB653',
      color: '#FFF',
    },
  },

  logo: {
    width: '8rem',
    height: '5rem',
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: '#353519',
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#BAB653',
    },
  },

  title: {
    fontSize: '18px',
    fontWeight: 700,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: '#353519',
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[6]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export interface FooterProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function Footer({ data }: FooterProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Box>
          <img
            className={classes.logo}
            alt="Logo of Devstudio"
            src={logo}
          ></img>
        </Box>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text size="sm">© 2023 Devstudio All rights reserved.</Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon className={classes.actionIcon} size="lg">
            <IconBrandLinkedin size="1.5rem" strokeWidth={1.2} />
          </ActionIcon>
          <ActionIcon className={classes.actionIcon} size="lg">
            <IconBrandYoutube size="1.5rem" strokeWidth={1.2} />
          </ActionIcon>
          <ActionIcon className={classes.actionIcon} size="lg">
            <IconBrandInstagram size="1.5rem" strokeWidth={1.2} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

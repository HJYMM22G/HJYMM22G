import { Box, Container, Text, Title, createStyles, rem } from '@mantine/core';
import heroimg from '../assets/imgs/hero.png';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    height: '31.25rem',
    width: '31.25rem',
    [theme.fn.smallerThan('sm')]: {
      height: '12.5rem',
      width: '12.5rem',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.black,
    fontWeight: 700,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(44),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.black,
    opacity: 0.9,
    maxWidth: rem(500),
    fontSize: '14px',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <Box>
      <Container>
        <Box className={classes.inner}>
          <Box className={classes.content}>
            <Title ta="center" className={classes.title}>
              Let us{' '}
              <Text component="span" inherit color="#BAB653">
                help{' '}
              </Text>{' '}
              you, <br />
              make your <br />
              company grow
            </Title>
          </Box>
          <Box>
            <img
              alt="an illustration showcasing 2 people surrounded by vegetation. One is using a magnifying glass and the other one is reading a book."
              src={heroimg}
              className={classes.image}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

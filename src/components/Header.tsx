import { Anchor, Container, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0 ${theme.spacing.md}`,
  },
  logo: {
    width: rem(60),
  },
  linkContainer: {
    marginLeft: "auto",
    marginRight: 0,
  },
  link: {
    color: theme.black,
    textDecoration: "none",
    fontSize: rem(16),
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <Container size="xl">
      <div className={classes.headerContainer}>
        <div className={classes.logo}>
          <img src="../src/assets/imgs/logo.png" alt="Logo" width="100%" />
        </div>
        <div className={classes.linkContainer}>
          <Container style={{ display: "flex", gap: "1rem" }}>
            <Anchor className={classes.link} href="/services">
              Services
            </Anchor>
            <Anchor className={classes.link} href="/AboutUs">
              About Us
            </Anchor>
            <Anchor className={classes.link} href="/Contact">
              Contact
            </Anchor>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Header;

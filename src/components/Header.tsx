import { Anchor, Container, createStyles, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `0 ${theme.spacing.md}`,
  },

  logo: {
    position: "relative",
    width: rem(60),
    [theme.fn.smallerThan("sm")]: {
      width: rem(40),
    },
  },

  linkContainer: {
    marginLeft: "auto",
    marginRight: 0,
    display: "flex",
    gap: "1rem",
  },

  link: {
    color: theme.colors.dark[7],
    textDecoration: "none",
    fontSize: rem(18),
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  contentContainer: {
    marginTop: 0, //!Important dont remove.
    transition: "margin-top 0.3s ease-in-out",
  },

  contentContainerOpen: {
    marginTop: rem(110),
  },
}));

const Header = () => {
  const { classes } = useStyles();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleBurgerToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Container size="xl">
        <div className={classes.headerContainer}>
          <div className={classes.logo}>
            <img src="../src/assets/imgs/logo.png" alt="Logo" width="100%" />
          </div>
          <div className={classes.linkContainer}>
            {isSmallScreen ? (
              <BurgerMenu onToggle={handleBurgerToggle} />
            ) : (
              <>
                <Anchor className={classes.link} href="/services">
                  Services
                </Anchor>
                <Anchor className={classes.link} href="/AboutUs">
                  About Us
                </Anchor>
                <Anchor className={classes.link} href="/Contact">
                  Contact
                </Anchor>
              </>
            )}
          </div>
        </div>
      </Container>

      <div
        className={`${classes.contentContainer} ${
          isMobileMenuOpen ? classes.contentContainerOpen : ""
        }`}
      ></div>
    </>
  );
};

export default Header;

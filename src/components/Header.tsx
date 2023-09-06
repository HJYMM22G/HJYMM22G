import {
  Burger,
  Container,
  Group,
  Header,
  Paper,
  Transition,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../assets/imgs/logo.png";

const headerHeight = rem(65);

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderBottom: "none",
    transition: "transform 0.3s ease-in-out",
    background: "#fbf9f3",
  },

  dropdown: {
    position: "absolute",
    top: headerHeight,
    left: 0,
    right: 0,
    zIndex: 0,
    background: "#fbf9f3",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#000000",
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#BAB653",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      textDecoration: "underline",
      textDecorationColor: "#BAB653",
    },
  },
}));

export interface NavbarProps {
  links: { link: string; label: string }[];
}

export function Navbar({ links }: NavbarProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState("string");
  const { classes, cx } = useStyles();

  function handleReturnClick() {
    setActive("string");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const navigate = useNavigate();

  const handleNavigateClick = (link: string) => {
    setActive(link);
    navigate(link);
    close();
  };

  const items = links.map((link) => (
    <NavHashLink
      style={{ display: "flex", justifyContent: "flex-end" }}
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => handleNavigateClick(link.link)}
    >
      {link.label}
    </NavHashLink>
  ));

  return (
    <Header height={headerHeight} className={classes.root}>
      <Container size="md" className={classes.header}>
        <Group ta="start">
          <Link to="./" onClick={handleReturnClick}>
            <img
              style={{ height: "2.8rem", width: "5rem" }}
              alt="Logo of Hike and Peak"
              src={logo}
            ></img>
          </Link>
        </Group>
        <Group onClick={scrollBackToTop} spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          color="orange"
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="md"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              onClick={scrollBackToTop}
              className={classes.dropdown}
              style={styles}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

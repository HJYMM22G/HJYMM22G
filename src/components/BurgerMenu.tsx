import {
  Burger,
  Col,
  Container,
  Divider,
  Grid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";

interface BurgerMenuProps {
  onToggle: () => void;
}

export default function BurgerMenu({ onToggle }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useMantineTheme();

  const toggle = () => {
    setIsOpen(!isOpen);
    onToggle();
  };

  const links = [
    { text: "Services", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "0.8rem",
        right: 0,
        padding: "0.8rem",
      }}
    >
      <Container size="xl">
        <Grid gutter="sm">
          <Col span={12}>
            <Burger
              size={30}
              color="orange"
              opened={isOpen}
              onClick={toggle}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            />
          </Col>
        </Grid>
      </Container>
      {isOpen && (
        <div>
          <nav>
            {links.map((link, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <Text size="lg">
                  <a
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      color:
                        theme.colorScheme === "dark"
                          ? theme.colors.blue[4]
                          : "#2C2E33",
                    }}
                  >
                    {link.text}
                  </a>
                </Text>
                <Divider size="xs" />
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

import { Container, Text } from "@mantine/core";

export default function Header() {
  return (
    <Container
      style={{
        backgroundColor: "beige",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <li>
          <Text size="xl">Home</Text>
        </li>
        <li>
          <Text size="xl">Dashboard</Text>
        </li>
        <li>
          <Text size="xl">Profile</Text>
        </li>
      </ul>
    </Container>
  );
}

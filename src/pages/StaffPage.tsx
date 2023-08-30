import { Container, Text } from "@mantine/core";
import { IconPinnedFilled } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { staffData } from "../data/staffData";

export function StaffPage() {
  const { staffname } = useParams<{ staffname: string }>();
  const person = staffname
    ? staffData.find((i) => i.name.toLowerCase() === staffname.toLowerCase())
    : null;

  return (
    <Container size="xl">
      <Container sx={{ display: "flex", padding: "0", margin: "0", gap: 2 }}>
        <IconPinnedFilled />
        <Text sx={{ marginLeft: "0.6rem" }}>Who we are</Text>
      </Container>
      {person ? (
        <div>
          <h1>{person.name}</h1>
          <p>Role: {person.role}</p>
          <p>Bio: {person.bio}</p>
        </div>
      ) : (
        <div>Personen finns tyvärr inte.</div>
      )}
      <Container sx={{ display: "flex", padding: "0", margin: "0", gap: 2 }}>
        <img
          src={person.image}
          alt=""
          style={{
            border: `${person.color} 6px solid`,
            borderRadius: "100rem",
            height: "9rem",
            width: "9rem",
            objectFit: "cover",
          }}
        />
      </Container>
      <Container sx={{ display: "flex", padding: "0", margin: "0", gap: 2 }}>
        <Text>
          Meet {person.name}, a passionate software engineer at devSTUDIO. With
          a knack for elegant solutions, {person.name} thrives on transforming
          complex problems into streamlined code. Their collaborative nature and
          innovative thinking make them an invaluable asset to the team,
          consistently delivering high-quality projects that push the boundaries
          of technology.
        </Text>
      </Container>
    </Container>
  );
}

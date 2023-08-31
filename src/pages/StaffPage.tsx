import { Col, Container, Grid, Text } from "@mantine/core";
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

      <Grid gutter="md" mt="xl">
        <Col span={6}>
          {person ? (
            <div>
              <h1>{person.name}</h1>
              <p>Role: {person.role}</p>
              <p>Bio: {person.bio}</p>
            </div>
          ) : (
            <div>Personen finns tyvärr inte.</div>
          )}
        </Col>
        <Col span={6}>
          <div
            style={{
              border: `${person ? person.color : "gray"} 6px solid`,
              borderRadius: "100rem",
              height: "9rem",
              width: "9rem",
              objectFit: "cover",
            }}
          >
            <img
              src={person ? person.image : ".../assets/placeholder.png"}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "100rem",
              }}
            />
          </div>
        </Col>
      </Grid>

      <Grid gutter="md" mt="xl">
        <Col span={6}>
          <div
            style={{
              border: `${person ? person.color : "gray"} 6px solid`,
              borderRadius: "100rem",
              height: "9rem",
              width: "9rem",
              objectFit: "cover",
            }}
          >
            <img
              src=".../assets/VectorIllustration1.png"
              alt=""
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col span={6}>
          <Text size="lg">About {person ? person.fullName : "Name"}</Text>
          <Text>
            With a flair for front-end development and user experience design,{" "}
            {person ? person.name : "they"}'s expertise in HTML, CSS, and
            JavaScript shines through in every project, creating visually
            stunning and user-friendly applications that push technological
            boundaries.
          </Text>
        </Col>
      </Grid>
    </Container>
  );
}

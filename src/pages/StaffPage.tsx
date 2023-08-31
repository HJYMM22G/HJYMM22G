import { Col, Container, Grid, Text, Title } from "@mantine/core";
import { IconPinnedFilled } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { staffData } from "../data/staffData";

export function StaffPage() {
  const { staffname } = useParams<{ staffname: string }>();
  const person = staffname
    ? staffData.find((i) => i.name.toLowerCase() === staffname.toLowerCase())
    : null;

  return (
    <Grid gutter="md">
      <Col span={12}>
        {" "}
        <Container
          sx={{ display: "flex", padding: "0", margin: "2rem", gap: 2 }}
        >
          <IconPinnedFilled />
          <Text sx={{ marginLeft: "0.6rem" }}>Who we are</Text>
        </Container>
      </Col>
      <Col span={6}>
        <Title>{person.fullName}</Title>
        <Text>{person.role}</Text>
        <Text mt={"2rem"}>{person.description}</Text>
        <Title size="sm" mt={"2rem"}>
          Contact me!
        </Title>
        <Text>Mail</Text>
        <Text>Phone</Text>
      </Col>
      <Col span={6}>
        {" "}
        <div
          style={{
            border: `${person ? person.color : "gray"} 6px solid`,
            borderRadius: "100rem",
            height: "15rem",
            width: "15rem",
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
      <Col span={6}>
        <Title size={"lg"}>About {person ? person.name : "Name"}</Title>
        <Text mt={"1rem"}>
          With a flair for front-end development and user experience design,{" "}
          {person ? person.name : "they"}'s expertise in HTML, CSS, and
          JavaScript shines through in every project, creating visually stunning
          and user-friendly applications that push technological boundaries.
        </Text>
      </Col>
      <Col span={6}>Vector bild</Col>
      <Col span={6}>
        <Title size={"md"}>My Expertises</Title>
      </Col>
    </Grid>
  );
}

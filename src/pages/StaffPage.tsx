import { Col, Container, Grid, Image, Text, Title } from "@mantine/core";
import {
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNpm,
  IconBrandReact,
  IconBrandTypescript,
  IconPinnedFilled,
} from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { staffData } from "../data/staffData";

export function StaffPage() {
  const { staffname } = useParams<{ staffname: string }>();
  const person = staffname
    ? staffData.find((i) => i.name.toLowerCase() === staffname.toLowerCase())
    : null;

  return (
    <Container>
      <Grid gutter="md">
        <Col span={12} span-sm={24}>
          {" "}
          <Container
            sx={{ display: "flex", padding: "0", marginTop: "3rem", gap: 2 }}
          >
            <IconPinnedFilled />
            <Text sx={{ marginLeft: "0.6rem" }}>Who we are</Text>
          </Container>
        </Col>
        <Col span={6} span-sm={12}>
          <Title>{person.fullName}</Title>
          <Text>{person.role}</Text>
          <Text mt={"2rem"}>{person.description}</Text>
          <Title size="sm" mt={"2rem"}>
            Contact me!
          </Title>
          <Text mt={"0.5rem"}>{person.mail}</Text>
        </Col>
        <Col span={6} span-sm={12}>
          {" "}
          <div
            style={{
              border: `${person ? person.color : "gray"} 6px solid`,
              borderRadius: "100rem",
              height: "15rem",
              width: "15rem",

              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              src={person ? person.image : ".../assets/placeholder.png"}
              alt={person?.fullName || "Name"}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "100rem",
              }}
            />
          </div>
        </Col>
        <Col span={6} span-sm={12}>
          <Title order={2}>About {person ? person.name : "Name"}</Title>
          <Text mt={"1rem"}>
            With a flair for front-end development and user experience design,{" "}
            {person ? person.name : "they"}'s expertise in HTML, CSS, and
            JavaScript shines through in every project, creating visually
            stunning and user-friendly applications that push technological
            boundaries.
          </Text>
        </Col>
        <Col span={6} span-sm={12}>
          <Image
            maw={240}
            mx="auto"
            radius="md"
            src=".../assets/staff.png"
            alt="Vector staff"
          />
        </Col>
        <Col span={6} span-sm={12}>
          <Title order={2}>My Expertises</Title>
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <IconBrandHtml5 />
            <IconBrandCss3 />
            <IconBrandJavascript />
            <IconBrandTypescript />
            <IconBrandReact />
            <IconBrandNpm />
            <IconBrandFigma />
            <IconBrandGithub />
          </div>
        </Col>
      </Grid>
    </Container>
  );
}

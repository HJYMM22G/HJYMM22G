import { Col, Container, Grid, Image, Text, Title } from '@mantine/core';
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
} from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import { staffData } from '../data/staffData';

export function StaffPage() {
  const { staffname } = useParams<{ staffname: string }>();
  const person = staffname
    ? staffData.find((i) => i.name.toLowerCase() === staffname.toLowerCase())
    : null;

  return (
    <Container>
      <Grid gutter="md">
        <Col
          span={12}
          sm={12}
          md={6}
          sx={{
            '@media (max-width: 994px)': {
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem',
            },
            '@media (min-width: 994px)': {
              display: 'none',
            },
          }}
        >
          <div
            style={{
              border: `${person ? person.color : 'gray'} 6px solid`,
              borderRadius: '100rem',
              height: '15rem',
              width: '15rem',

              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <img
              src={person ? person.image : '.../assets/placeholder.png'}
              alt={person?.fullName || 'Name'}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '100rem',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            />
          </div>
        </Col>
        <Col span={12} sm={12} md={6}>
          {' '}
          <Container
            sx={{ display: 'flex', padding: '0', marginTop: '3rem', gap: 2 }}
          >
            <IconPinnedFilled />
            <Text sx={{ marginLeft: '0.6rem' }}>Who we are</Text>
          </Container>
          <Title>{person.fullName}</Title>
          <Text fz="sm" fs="italic">
            {person.role}
          </Text>
          <Text mt={'1rem'}>{person.description}</Text>
          <Title size="sm" mt={'2rem'}>
            Contact me!
          </Title>
          <Text mt={'0.2rem'}>{person.mail}</Text>
          <Title order={2} sx={{ marginTop: '1rem' }}>
            About {person ? person.name : 'Name'}
          </Title>
          <Text mt={'0.2rem'}>
            With a flair for front-end development and user experience design,{' '}
            {person ? person.name : 'they'}'s expertise in HTML, CSS, and
            JavaScript shines through in every project, creating visually
            stunning and user-friendly applications that push technological
            boundaries.
          </Text>
          <Title order={2} sx={{ marginTop: '1rem' }}>
            My Expertises
          </Title>
          <div
            style={{
              marginTop: '1rem',
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

        <Col
          span={12}
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            '@media (max-width: 994px)': {
              display: 'none',
            },
          }}
        >
          {' '}
          <div
            style={{
              border: `${person ? person.color : 'gray'} 6px solid`,
              borderRadius: '100rem',
              height: '15rem',
              width: '15rem',

              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <img
              src={person ? person.image : '.../assets/placeholder.png'}
              alt={person?.fullName || 'Name'}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '100rem',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            />
          </div>
          <Image
            maw={300}
            mx="auto"
            radius="md"
            src="../src/assets/staff.png"
            alt="Vector staff"
          />
        </Col>
        <Col
          span={12}
          sm={12}
          md={6}
          sx={{
            '@media (max-width: 994px)': {
              display: 'flex',
              justifyContent: 'center',
            },
            '@media (min-width: 994px)': {
              display: 'none',
            },
          }}
        >
          <Image
            maw={300}
            mx="auto"
            radius="md"
            src="../src/assets/staff.png"
            alt="Vector staff"
          />
        </Col>
      </Grid>
    </Container>
  );
}

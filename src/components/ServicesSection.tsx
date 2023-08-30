import { Container, Text, Title } from '@mantine/core';
import { IconPinnedFilled } from '@tabler/icons-react';

export function ServicesSection() {
  return (
    <Container
      size="xl"
      sx={{
        display: 'flex',
        marginTop: '4rem',
        marginBottom: '4rem',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flex: 1,
          width: '100%',
          '@media (max-width: 800px)': {
            display: 'none',
          },
        }}
      >
        <img
          src="../src/assets/services.png"
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </Container>
      <Container
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          paddingLeft: '4rem',
          '@media (max-width: 800px)': {
            paddingLeft: '0',
          },
        }}
      >
        <Container sx={{ display: 'flex', padding: '0', margin: '0' }}>
          <IconPinnedFilled />

          <Text sx={{ marginLeft: '0.6rem' }}>Our Services</Text>
        </Container>
        <Title order={1} sx={{ paddingBottom: '0.5rem' }}>
          Our Area of Expertise
        </Title>
        <Text sx={{ paddingBottom: '1rem' }}>
          From initial idea to finished product, we will bring your vision to
          life.
        </Text>
        <Title order={3}>Front End Development</Title>
        <Text sx={{ paddingBottom: '1rem' }}>
          HTML, CSS and JavaScript. React and Angular.
        </Text>
        <Title order={3}>Back End Development</Title>
        <Text sx={{ paddingBottom: '1rem' }}>
          Node JS, MongoDB, Express JS.
        </Text>
        <Title order={3}>Digital Design</Title>
        <Text>Figma, Adobe Illustrator & Photoshop.</Text>
      </Container>
    </Container>
  );
}

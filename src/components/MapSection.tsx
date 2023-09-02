import { Box, Container, Text } from '@mantine/core';
import { IconPinnedFilled } from '@tabler/icons-react';
import Boop from './Boop';

function MapSection() {
  return (
    <Box
      sx={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container
        id="find-us"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '20rem',
        }}
      >
        <Container sx={{ display: 'flex', padding: '0', margin: '0', gap: 2 }}>
          <Boop rotation={10} timing={150}>
            <IconPinnedFilled />
          </Boop>
          <Text sx={{ marginLeft: '0.6rem' }}>Find us here!</Text>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.3949553626667!2d11.991950276588891!3d57.70974863959175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3802fb816f3%3A0xd8dc42d959ed0df4!2sAnders%20Personsgatan%2018%2C%20416%2064%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1693550409596!5m2!1ssv!2sse"
          width="80%"
          height="100%"
          style={{ border: '0', margin: 'auto' }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </Box>
  );
}

export default MapSection;

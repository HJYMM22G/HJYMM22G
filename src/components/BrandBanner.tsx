import { Container, Text } from '@mantine/core';
import { IconPinnedFilled } from '@tabler/icons-react';
import Marquee from 'react-fast-marquee';

function BrandBanner() {
  return (
    <Container sx={{}}>
      <Container sx={{ display: 'flex', padding: '0', margin: '1rem 0' }}>
        <IconPinnedFilled />
        <Text sx={{ marginLeft: '0.6rem' }}>Our Clients</Text>
      </Container>
      <Marquee
        autoFill={true}
        gradient={true}
        gradientColor={[251, 249, 243]}
        style={{ height: 'auto' }}
      >
        <img
          src="../src/assets/logos/candycakes.png"
          alt=""
          style={{ height: '3rem', marginRight: '3rem' }}
        />
        <img
          src="../src/assets/logos/chatclub.png"
          alt=""
          style={{ height: '3rem', marginRight: '3rem' }}
        />
        <img
          src="../src/assets/logos/chatropolis.png"
          alt=""
          style={{ height: '3rem', marginRight: '3rem' }}
        />
        <img
          src="../src/assets/logos/share.png"
          alt=""
          style={{ height: '3rem', marginRight: '3rem' }}
        />
        <img
          src="../src/assets/logos/takenbake.png"
          alt=""
          style={{ height: '3rem', marginRight: '3rem' }}
        />
        <img
          src="../src/assets/logos/sunpop.png"
          alt=""
          style={{ height: '3rem', marginRight: '3rem' }}
        />
      </Marquee>
    </Container>
  );
}

export default BrandBanner;

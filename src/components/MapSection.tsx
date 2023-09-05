import {Box, Container, Text} from '@mantine/core';
import {IconPinnedFilled} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import Boop from './Boop';

function MapSection() {
  const {t} = useTranslation();
  return (
    <Box
      sx={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '20rem',
        }}>
        <Container
          sx={{
            display: 'flex',

            padding: '0',

            margin: '0',

            gap: 2,
            alignItems: 'center',
          }}>
          <Box
            sx={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex'}}>
              <Boop
                rotation={10}
                timing={150}>
                <IconPinnedFilled />
              </Boop>
              <Text
                sx={{marginLeft: '0.6rem'}}
                fz='xl'>
                {t('map.title')}
              </Text>
            </Box>

            <Text mb={'0.4rem'}>
              Anders Personsgata 18, 416 64 Göteborg
            </Text>
          </Box>
        </Container>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.395124057713!2d11.991950277006696!3d57.70974577387089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1693916349664!5m2!1ssv!2sse'
          width='100%'
          height='100%'
          style={{border: '0', margin: '0'}}
          // allowfullscreen=""
          loading='lazy'
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </Box>
  );
}

export default MapSection;

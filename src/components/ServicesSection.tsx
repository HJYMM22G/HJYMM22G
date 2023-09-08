import {Container, Text, Title} from '@mantine/core';
import {IconPinnedFilled} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import Boop from './Boop';

export function ServicesSection() {
  const {t} = useTranslation();
  return (
    <Container
      id='services'
      size='xl'
      sx={{
        display: 'flex',
        marginTop: '4rem',
        marginBottom: '4rem',
      }}>
      <Container
        sx={{
          display: 'flex',
          flex: 1,
          width: '100%',
          '@media (max-width: 800px)': {
            display: 'none',
          },
        }}>
        <img
          src='/assets/services.png'
          alt=''
          style={{width: '100%', height: '100%'}}
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
        }}>
        <Container
          sx={{display: 'flex', padding: '0', margin: '0'}}>
          <Boop
            rotation={10}
            timing={150}>
            <IconPinnedFilled />
          </Boop>
          <Text
            sx={{marginLeft: '0.6rem'}}
            fz='xl'>
            {t('servicesection.ourServices')}
          </Text>
        </Container>
        <Title
          order={1}
          sx={{paddingBottom: '0.5rem'}}>
          {t('servicesection.areaOfExpertise')}
        </Title>
        <Text sx={{paddingBottom: '1rem'}}>
          {t('servicesection.fromIdeaToProduct')}
        </Text>
        <Title order={3}>
          {t('servicesection.frontEndTitle')}
        </Title>
        <Text sx={{paddingBottom: '1rem'}}>
          HTML, CSS and JavaScript. React and Angular.
        </Text>
        <Title order={3}>
          {t('servicesection.backEndTitle')}
        </Title>
        <Text sx={{paddingBottom: '1rem'}}>
          Node JS, MongoDB, Express JS.
        </Text>
        <Title order={3}>Digital Design</Title>
        <Text>Figma, Adobe Illustrator & Photoshop.</Text>
      </Container>
    </Container>
  );
}

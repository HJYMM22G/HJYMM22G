import {
  Col,
  Container,
  Grid,
  Text,
  Title,
} from '@mantine/core';
import {IconPinnedFilled} from '@tabler/icons-react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {useTranslatedStaffData} from '../hooks/useTranslatedStaffData';
import Boop from './Boop';

export function TeamSection() {
  const {t} = useTranslation();
  const translatedStaffData = useTranslatedStaffData();

  const handleMouseEnter = (event: {
    currentTarget: {style: {transform: string}};
  }) => {
    event.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (event: {
    currentTarget: {style: {transform: string}};
  }) => {
    event.currentTarget.style.transform = 'scale(1)';
  };
  return (
    <Container
      id='team'
      size='xl'>
      <Container
        sx={{
          display: 'flex',
          padding: '0',
          margin: '0',
          gap: 2,
        }}>
        <Boop
          rotation={10}
          timing={150}>
          <IconPinnedFilled />
        </Boop>
        <Text
          sx={{marginLeft: '0.6rem'}}
          fz='xl'>
          {t('teamsection.whoWeAre')}
        </Text>
      </Container>
      <Title order={1}>{t('teamsection.title')}</Title>
      <Grid
        gutter='sm'
        sx={{
          display: 'flex',
          width: '100%',
          marginTop: '1.5rem',
          justifyContent: 'center',
        }}>
        {translatedStaffData.map((person) => (
          <Col
            span={12}
            sm={5}
            lg={2.4}
            key={person.id}>
            <Link
              to={`/about/${person.name.toLowerCase()}`}
              onClick={() => {
                window.scroll(0, 0);
              }}
              style={{
                textDecoration: 'none',
                color: '#2C2E33',
              }}>
              <Container
                style={{
                  textAlign: 'center',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img
                  src={person.image}
                  alt=''
                  style={{
                    border: `${person.color} 6px solid`,
                    borderRadius: '100rem',
                    height: '9rem',
                    width: '9rem',
                    objectFit: 'cover',
                  }}
                />
                <Title order={4}>{person.fullName}</Title>
                <Text
                  size='sm'
                  fs='italic'>
                  {person.role}
                </Text>
                <Text>{person.bio}</Text>
              </Container>
            </Link>
          </Col>
        ))}
      </Grid>
    </Container>
  );
}

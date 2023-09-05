import {
  Col,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from '@mantine/core';
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
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {useTranslatedStaffData} from '../hooks/useTranslatedStaffData';

export function StaffPage() {
  const {staffname} = useParams<{staffname: string}>();
  const {t} = useTranslation();
  const translatedStaffData = useTranslatedStaffData();
  const person = staffname
    ? translatedStaffData.find(
        (i) =>
          i.name.toLowerCase() === staffname.toLowerCase(),
      )
    : null;

  return (
    <Container>
      <Grid gutter='md'>
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
          }}>
          <Container
            sx={{
              height: '15rem',
              width: '15rem',

              '@media (max-width: 800px)': {
                height: '10rem',
                width: '10rem',
              },
            }}>
            <img
              src={
                person
                  ? person.image
                  : '.../assets/placeholder.png'
              }
              alt={person?.fullName || 'Name'}
              style={{
                border: `${
                  person ? person.color : 'gray'
                } 6px solid`,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '100rem',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            />
          </Container>
        </Col>

        <Col
          span={12}
          sm={12}
          md={6}>
          {' '}
          <Container
            sx={{
              display: 'flex',
              padding: '0',
              marginTop: '3rem',
              gap: 2,
            }}>
            <IconPinnedFilled />
            <Text sx={{marginLeft: '0.6rem'}}>
              {t('staffpage.whoWeAre')}
            </Text>
          </Container>
          <Title>{person?.fullName}</Title>
          <Text
            fz='sm'
            fs='italic'>
            {person?.role}
          </Text>
          <Text mt={'1rem'}>{person?.bio}</Text>
          <Title
            size='sm'
            mt={'2rem'}>
            {t('staffpage.contactMe')}
          </Title>
          <Text mt={'0.2rem'}>{person?.mail}</Text>
          <Title
            order={2}
            sx={{marginTop: '1rem'}}>
            {t('staffpage.about')}{' '}
            {person ? person.name : 'Name'}
          </Title>
          <Text mt={'0.2rem'}>{person?.description}</Text>
          <Title
            order={2}
            sx={{marginTop: '1rem'}}>
            {t('staffpage.expertise')}
          </Title>
          <div
            style={{
              marginTop: '1rem',
            }}>
            <IconBrandHtml5
              style={{
                color: '#FF0000',
                height: '3rem',
                width: '3rem',
                margin: '0.25rem',
              }}
            />
            <IconBrandCss3
              style={{
                color: '#0057FF',
                height: '3rem',
                width: '3rem',
                margin: '0.25rem',
              }}
            />
            <IconBrandJavascript
              style={{
                color: '#AAD30A',
                height: '3rem',
                width: '3rem',
                margin: '0.25rem',
              }}
            />
            <IconBrandTypescript
              style={{
                color: '#0779FE',
                height: '3rem',
                width: '3rem',
                margin: '0.25rem',
              }}
            />

            <IconBrandReact
              style={{
                color: '#61DAFB',
                height: '3rem',
                width: '3rem',
                margin: '0.25rem',
              }}
            />
            <IconBrandNpm
              style={{
                color: '#970000',
                height: '3rem',
                width: '3rem',
                margin: '0.25rem',
              }}
            />
            <IconBrandFigma
              style={{
                color: '#283BA2',
                height: '3rem',
                width: '3rem',
                margin: '0.25rem',
              }}
            />
            <IconBrandGithub
              style={{
                color: 'black',
                height: '3rem',
                width: '3rem',
                margin: '0.25rem',
              }}
            />
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
            marginTop: '3rem',
            '@media (max-width: 994px)': {
              display: 'none',
            },
          }}>
          {' '}
          <div
            style={{
              border: `${
                person ? person.color : 'gray'
              } 6px solid`,
              borderRadius: '100rem',
              height: '15rem',
              width: '15rem',

              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <img
              src={
                person
                  ? person.image
                  : '.../assets/placeholder.png'
              }
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
            mx='auto'
            radius='md'
            src={person?.funImage}
            alt='Vector staff'
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
          }}>
          <Image
            maw={300}
            mx='auto'
            radius='md'
            src='../src/assets/staff.png'
            alt='Vector staff'
          />
        </Col>
      </Grid>
    </Container>
  );
}

import { Col, Container, Grid, Text, Title } from '@mantine/core';
import { IconPinnedFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { staffData } from '../data/staffData';

export function TeamSection() {
  return (
    <Container size="xl">
      <Container sx={{ display: 'flex', padding: '0', margin: '0', gap: 2 }}>
        <IconPinnedFilled />
        <Text sx={{ marginLeft: '0.6rem' }}>Who we are</Text>
      </Container>
      <Title order={1}>Empowering your digital future.</Title>
      <Grid
        gutter="sm"
        sx={{
          display: 'flex',
          width: '100%',
          marginTop: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {staffData.map((person) => (
          <Col span={12} sm={5} lg={2.4} key={person.id}>
            <Link
              to={`/about/${person.name.toLowerCase()}`}
              style={{ textDecoration: 'none', color: '#2C2E33' }}
            >
              <Container style={{ textAlign: 'center' }}>
                <img
                  src={person.image}
                  alt=""
                  style={{
                    border: `${person.color} 6px solid`,
                    borderRadius: '100rem',
                    height: '9rem',
                    width: '9rem',
                    objectFit: 'cover',
                  }}
                />
                <Title order={4}>{person.fullName}</Title>
                <Text size="sm">{person.role}</Text>
                <Text>{person.description}</Text>
              </Container>
            </Link>
          </Col>
        ))}
      </Grid>
    </Container>
  );
}

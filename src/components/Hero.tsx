import { Box, Container, Text, Title } from '@mantine/core';
import heroimg from '../assets/imgs/hero.png';

export function Hero() {
  return (
    <Box>
      <Container>
        <Box>
          <Box>
            <Title ta="center">
              Let us{' '}
              <Text component="span" inherit color="#BAB653">
                help{' '}
              </Text>{' '}
              you, <br />
              make your <br />
              company grow
            </Title>
          </Box>
          <Box>
            <img
              height="500"
              width="500"
              alt="an illustration showcasing 2 people surrounded by vegetation. One is using a magnifying glass and the other one is reading a book."
              src={heroimg}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

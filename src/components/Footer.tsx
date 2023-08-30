import { ActionIcon, Container, Group, Text } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from '@tabler/icons-react';

export interface FooterProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function Footer({ data }: FooterProps) {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div key={group.title}>
        <Text>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer>
      <Container>
        {/*div till logotyp*/}
        <div></div>
        <div>{groups}</div>
      </Container>
      <Container>
        <Text size="sm">© 2023 Devstudio All rights reserved.</Text>

        <Group spacing={0} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandLinkedin size="1.5rem" strokeWidth={1.2} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.5rem" strokeWidth={1.2} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.5rem" strokeWidth={1.2} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

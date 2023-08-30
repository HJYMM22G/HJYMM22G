import { Box, Button, Container, Select, SimpleGrid, TextInput, Textarea, createStyles } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup.string().email('Invalid email.').required('Email is required.'),
  person: yup.string().required('Select a person to contact.'),
  message: yup.string().min(3, 'Message is required.')
});

const useStyles = createStyles((theme) => ({
  firstrowinput: {
    backgroundColor: 'transparent',
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    boxShadow: 'none',
  },
  dropdown: {
    backgroundColor: '#FBF9F3',
  },
  rightSection: {
    cursor: 'pointer',
  },
}))

export function ContactForm() {
  const { classes } = useStyles();
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = nameInputRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.focus();
          console.log('Setting focus...');
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <Box>
      <Container size="sm">
        <SimpleGrid
        cols={2}
        spacing="xl"
        mb={20}
        breakpoints={[
          { maxWidth: 'sm', cols: 1, spacing: 'xl'},
        ]}>
          <Box className={classes.firstrowinput}>
            <TextInput
              ref={nameInputRef}
              required
              size="md"
              label="Name"
              classNames={{
                input: classes.input
              }} />
          </Box>
          <Box className={classes.firstrowinput}>
            <TextInput
              required
              size="md"
              label="Email"
              classNames={{
                input: classes.input
              }} />
          </Box>
        </SimpleGrid>

        <Box mb={20}>
          <Select
            label="I would like to contact"
            required
            size="md"
            rightSection={<IconChevronDown size="1rem" />}
            rightSectionWidth={30}
            classNames={{
              input: classes.input,
              dropdown: classes.dropdown,
              rightSection: classes.rightSection
            }}
            data={['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5']}
          />
        </Box>

        <Box mb={20}>
          <Textarea
            required
            minRows={6}
            size="md"
            label="Message"
            classNames={{
              input: classes.input,
            }} />
        </Box>

        <Box style={{ textAlign: 'center' }}>
          <Button radius="xs" type="submit">Send Message</Button>
        </Box>
      </Container>
    </Box>
  );
}
import { Box, Button, Container, Select, TextInput, Textarea, createStyles } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

const useStyles = createStyles((theme) => ({
  firstrow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    gap: "4rem"
  },
  firstrowinput: {
    flex: 1,
    backgroundColor: 'transparent'
  },
}))

const myStyles = {
  input: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    boxShadow: 'none',
  },
  dropdown: {
    backgroundColor: '#FBF9F3',
  },
};

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
        <Box className={classes.firstrow}>
          <Box className={classes.firstrowinput}>
            <TextInput
            ref={nameInputRef}
            required
            size="md"
            label="Name"
            styles={myStyles} />
          </Box>
          <Box className={classes.firstrowinput}>
            <TextInput
            required
            size="md"
            label="Email"
            styles={myStyles} />
          </Box>
        </Box>

        <Box style={{ marginBottom: '15px' }}>
          <Select
            label="Person"
            required
            size="md"
            rightSection={<IconChevronDown size="1rem" />}
            rightSectionWidth={30}
            styles={{ ...myStyles, rightSection: { cursor: 'pointer' } }}
            data={['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5']}
          />
        </Box>

        <Box style={{ marginBottom: '15px' }}>
          <Textarea
          required
          minRows={6}
          size="md"
          label="Message" styles={myStyles} />
        </Box>

        <Box style={{ textAlign: 'center' }}>
          <Button>Send Message</Button>
        </Box>
      </Container>
    </Box>
  );
}
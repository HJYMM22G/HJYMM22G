import { Box, Button, Container, Select, TextInput, Textarea, createStyles } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  firstrow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    gap: "5rem"
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
    boxShadow:  'none',
  },
  dropdown: {
    backgroundColor: '#FBF9F3',
  }
};

export function ContactForm() {
  const { classes } = useStyles();

  return (
    <Box>
      <Container size="md">
        <Box className={classes.firstrow}>
          <Box className={classes.firstrowinput}>
            <TextInput required label="Name" styles={myStyles}/>
          </Box>
          <Box className={classes.firstrowinput}>
            <TextInput required label="Email" styles={myStyles}/>
          </Box>
        </Box>

        <Box style={{ marginBottom: '15px' }}>
          <Select
            label="Person"
            required
            rightSection={<IconChevronDown size="1rem" />}
            rightSectionWidth={30}
            styles={myStyles}
            data={['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5']}
          />
        </Box>

        <Box style={{ marginBottom: '15px' }}>
          <Textarea required label="Message" styles={myStyles}/>
        </Box>

        <Box style={{ textAlign: 'center' }}>
          <Button>Send message</Button>
        </Box>
      </Container>
    </Box>
  );
}
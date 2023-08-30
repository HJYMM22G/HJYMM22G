import {
  Box,
  Button,
  Container,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  Title,
  createStyles,
} from '@mantine/core';
import {
  IconChevronDown,
  IconPinnedFilled,
} from '@tabler/icons-react';
import {useEffect, useRef} from 'react';
import * as yup from 'yup';
import {staffData} from '../data/staffData';

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  email: yup
    .string()
    .email('Invalid email.')
    .required('Email is required.'),
  person: yup
    .string()
    .required('Select a person to contact.'),
  message: yup.string().min(3, 'Message is required.'),
});

const useStyles = createStyles((theme) => ({
  firstrowinput: {
    backgroundColor: 'transparent',
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    boxShadow: 'none',
    '&:focus': {
      borderColor: '#BAB653',
    },
  },
  dropdown: {
    backgroundColor: '#FBF9F3',
  },
  rightSection: {
    cursor: 'pointer',
  },
  button: {
    backgroundColor: '#BAB653',
    '&:focus': {
      backgroundColor: '#A5A14C',
      outlineColor: '#646338',
    },
    '&:hover': {
      backgroundColor: '#A5A14C',
    },
  },
  item: {
    '&[data-selected]': {
      backgroundColor: '#BAB653',
      '&:hover': {
        backgroundColor: '#A5A14C',
      },
    },
  },
}));

export function ContactForm() {
  const {classes} = useStyles();
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = nameInputRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight
        ) {
          element.focus();
          console.log('Setting focus...');
          window.removeEventListener(
            'scroll',
            handleScroll,
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box>
      <Container size='xl'>
        <Container
          sx={{
            display: 'flex',
            padding: '0',
            margin: '0',
            gap: 2,
          }}>
          <IconPinnedFilled />
          <Text sx={{marginLeft: '0.6rem'}}>
            Reach out to us
          </Text>
        </Container>
        <Title
          mb={50}
          style={{textAlign: 'center'}}>
          Get in touch
        </Title>
        <Container size='sm'>
          <SimpleGrid
            cols={2}
            spacing='xl'
            mb={40}
            breakpoints={[
              {maxWidth: 'sm', cols: 1, spacing: 'xl'},
            ]}>
            <Box className={classes.firstrowinput}>
              <TextInput
                ref={nameInputRef}
                required
                size='lg'
                label='Name'
                classNames={{
                  input: classes.input,
                }}
              />
            </Box>
            <Box className={classes.firstrowinput}>
              <TextInput
                required
                size='lg'
                label='Email'
                classNames={{
                  input: classes.input,
                }}
              />
            </Box>
          </SimpleGrid>

          <Box mb={40}>
            <Select
              label='I would like to contact'
              required
              size='lg'
              rightSection={<IconChevronDown size='2rem' />}
              rightSectionWidth={40}
              classNames={{
                input: classes.input,
                dropdown: classes.dropdown,
                rightSection: classes.rightSection,
                item: classes.item,
              }}
              data={staffData.map(
                (staff) => staff.fullName,
              )}
            />
          </Box>

          <Box mb={40}>
            <Textarea
              required
              minRows={6}
              size='lg'
              label='Message'
              classNames={{
                input: classes.input,
              }}
            />
          </Box>

          <Box style={{textAlign: 'center'}}>
            <Button
              size='lg'
              radius='xs'
              type='submit'
              className={classes.button}>
              Send Message
            </Button>
          </Box>
        </Container>
      </Container>
    </Box>
  );
}

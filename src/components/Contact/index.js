import { Title, Box, TextInput, Group, Button, Textarea, Text } from "@mantine/core";
// import { useForm } from '@mantine/form'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8b04s9n', 'template_3nv9n0h', form.current, 'yODeKHhdtkltyfJRC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  }

  return (
    <div className='contact' id='contact'>
      <Title order={2}
        variant='gradient'
        gradient={{ from: 'green', to: 'blue' }}
        className='contact-title'>
        Contact
      </Title>
      <Box className='contact-box'>
        <form className='contact-form'
              ref={form}
              onSubmit={sendEmail}>
          <TextInput
            placeholder='Bill Nye'
            label='Name'
            name='name'
            styles={() => ({
              label: {
                color: '#f7f7f7'
              }
            })}
            className='form-item'
             />
          <TextInput
            placeholder='bnye@scienceguy.com'
            label='Email'
            name='email'
            styles={() => ({
              label: {
                color: '#f7f7f7',
                fontFamily: 'Titillium Web, sans-serif'
              }
            })}
            className='form-item'
            withAsterisk
            required />
          <Textarea
            placeholder='Bill! Bill! Bill! Bill!'
            label="Message"
            name='message'
            styles={() => ({
              label: {
                color: '#f7f7f7'
              }
            })}
            minRows={5}
            className='form-item'
            withAsterisk
            required
          />
          <Group>
            <Button
              type='submit'
              variant='gradient'
              gradient={{ from: 'green', to: 'blue' }}
              className='form-submit-button'
            >Submit
            </Button>
          </Group>
        </form>
      </Box>
      <p className='email-prompt'>
        or email me at{' '}
        <Text component='a'
          href='mailto:xhillman13@gmail.com'
          variant='gradient'
          gradient={{ from: 'green', to: 'blue' }}
        >
          xhillman13@gmail.com
        </Text>
      </p>
    </div>
  )
}

export default Contact;
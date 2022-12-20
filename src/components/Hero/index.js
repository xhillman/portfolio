import {Container, Text} from '@mantine/core';

import './hero.css';

const Hero = () => {
  return (
    <div className='hero-container' id='home'>
      <Container className="hero">
        <h1 className='title'>
          Hey there, I'm{' '}
          <Text component='span'
          variant='gradient'
          gradient={{ from: 'green', to: 'blue' }}
          inherit>
            Xavier Hillman.
          </Text>
        </h1>
        <Text className='description'>
          I'm a software developer focused on building human-centered products on the web.
        </Text>
      </Container>
    </div>
  )
}

export default Hero;
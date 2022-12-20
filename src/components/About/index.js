import { Title, Text, Image } from '@mantine/core';
import './about.css';
import photo from '../../../src/images/photo.jpeg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-container'>
        <div className='about-context'>
          <Title
            order={2}
            variant='gradient'
            gradient={{ from: 'green', to: 'blue' }}
            className='about-title'>
            About Me
          </Title>
          <Text className='about-text'>
            Hello! My name's Xavier and I enjoy bringing things to life with code. I got my start in web development in 2020 when I learned Python through Stanford's Code in Place course. I fell in love with the process and started tinkering with HTML, CSS, and JavaScript. After a few months of self-teaching, I decided to take the plunge and enroll in a coding bootcamp. I graduated from Code Fellows in 2022 with a certificate in Advanced Software Development with JavaScript. Some of the technologies that I've been working with recently include:
          </Text>
          <ul className='tech-list'>
            <li className='tech-list-item'>JavaScript</li>
            <li className='tech-list-item'>React</li>
            <li className='tech-list-item'>Bootstrap</li>
            <li className='tech-list-item'>Node.js</li>
            <li className='tech-list-item'>Express</li>
            <li className='tech-list-item'>Puppeteer</li>
            <li className='tech-list-item'>AWS</li>
            <li className='tech-list-item'>MongoDB</li>
          </ul>
        </div>
        <div className='photo'>
          <Image src={photo} radius='10%' className='photo-inner' />
        </div>
      </div>
    </div>
  )
}

export default About;
import { Container, Header, Burger, Transition } from '@mantine/core'
import Logo from '../Logo'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
import { useState } from 'react'
import './header.css'

const ResponsiveHeader = () => {

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <Header className='container'
    height={60}
    sx={{ borderBottom: 0 }}>
      <Container className='header'
      fluid={true}>
        <Logo />
        <Menu />
        <Burger opened={isOpen} 
                onClick={() => setIsOpen(o => !o)} size='sm'
                color='white'
                className='burger'
                />
        <Transition transition='slide-right' 
                    duration={200} 
                    mounted={isOpen}>
          {() => (
            <MobileMenu />
          )}
        </Transition>
      </Container>
    </Header>
  )
}

export default ResponsiveHeader;
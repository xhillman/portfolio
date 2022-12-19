import { Container, Header, Burger, Transition } from '@mantine/core'
import Logo from '../Logo'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
import { useDisclosure } from '@mantine/hooks'
import './header.css'

const ResponsiveHeader = () => {

  const [ isOpen, setIsOpen ] = useDisclosure(false)

  return (
    <Header className='container'
    sx={{ borderBottom: 0 }}>
      <Container className='header'
      fluid={true}>
        <Logo />
        <Menu />
        <Burger opened={isOpen} 
                onClick={() => setIsOpen(o => !o)} size='sm'
                className='burger'
                />
        <Transition transition='pop-top-right' 
                    duration={200} 
                    mounted={isOpen}>
          <MobileMenu />
        </Transition>
      </Container>
    </Header>
  )
}

export default ResponsiveHeader;
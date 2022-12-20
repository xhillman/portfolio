import { MantineProvider, Title } from '@mantine/core'
import './logo.css'

const Logo = () => {
  return (
    <MantineProvider theme= {{headings: {fontFamily: 'Dosis, sans-serif'}}}>
      <Title
        order={2}
        variant='gradient'
        gradient={{ from: 'green', to: 'blue' }}
        className='logo'
        component='a'
        href='#home'
      >
        xh.
      </Title>
    </MantineProvider>
  )
}

export default Logo;
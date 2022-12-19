import { Text, MantineProvider } from '@mantine/core'
import './logo.css'

const Logo = () => {
  return (
    <MantineProvider theme= {{headings: {fontFamily: 'Dosis, sans-serif'}}}>
      <Text
        component='h2'
        variant='gradient'
        gradient={{ from: 'green', to: 'blue' }}
        className='logo'
      >
        xh.
      </Text>
    </MantineProvider>
  )
}

export default Logo;
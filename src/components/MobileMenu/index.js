import { Stack, Button } from '@mantine/core'

import './mobile-menu.css'

const MobileMenu = () => {
  return (
    <>
      <Stack className='dropdown'>
        <Button variant='subtle' color="dark">About</Button>
        <Button variant='subtle' color="dark">Projects</Button>
        <Button variant='subtle' color="dark">Contact</Button>
        <Button variant='outline' color="green">Resume</Button>
      </Stack>
    </>
  )
}

export default MobileMenu;
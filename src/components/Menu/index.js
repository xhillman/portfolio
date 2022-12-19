import {Group, Button} from '@mantine/core'
import './menu.css'

const Menu = () => {
  return (
    <div className='menu'>
      <Group >
        <Button variant='subtle' color="dark">About</Button>
        <Button variant='subtle' color="dark">Projects</Button>
        <Button variant='subtle' color="dark">Contact</Button>
        <Button variant='outline' color="green">Resume</Button>
      </Group>
    </div>
  )
}

export default Menu;
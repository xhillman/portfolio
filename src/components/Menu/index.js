import {Group, Button} from '@mantine/core'
import './menu.css'

const menuItems = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: '#contact',
  }
]

const Menu = () => {
  return (
    <div className='menu'>
      <Group >
        {
          menuItems.map((item) => {
            return (
              <Button key={`${item}-key`} styles={(theme) => ({
                root: {
                  backgroundColor: '#212427',
                  border: 0,
                  height: 36,
                  paddingLeft: 20,
                  paddingRight: 20,
                  '&:hover': {
                    backgroundColor: theme.fn.lighten('#212427', 0.05),
                  },
                },
              })}>{item.title}</Button>
            )
          })
        }
        <Button variant='gradient' gradient={{ from: 'green', to: 'blue' }}>Resume</Button>
      </Group>
    </div>
  )
}

export default Menu;
import { Stack, Button } from '@mantine/core'

import './mobile-menu.css'

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

const MobileMenu = () => {
  return (
    <>
      <Stack className='dropdown'>
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
        <Button variant='outline' color="green">Resume</Button>
      </Stack>
    </>
  )
}

export default MobileMenu;
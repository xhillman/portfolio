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
              <Button component="a"
                key={`${item}-key`}
                href={`${item.href}`}
                styles={(theme) => ({
                  root: {
                    backgroundColor: '#212427',
                    color: '#f7f7f7',
                    fontFamily: 'Titillium Web, sans-serif',
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
        <Button variant='outline' color="green" styles={(theme) => ({
                  root: {
                    backgroundColor: '#212427',
                    color: '#f7f7f7',
                    fontFamily: 'Titillium Web, sans-serif',
                  },
                })}>Resume</Button>
      </Stack>
    </>
  )
}

export default MobileMenu;
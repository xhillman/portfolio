import { Group, Button } from '@mantine/core'
import resume from '../../images/resume.pdf'
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

const handleClick = () => {
  console.log('clicked');
  window.open(resume);
}

const Menu = () => {
  return (
    <div className='menu'>
      <Group >
        {
          menuItems.map((item) => {
            return (
              <Button
                component="a"
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
        <Button variant='gradient'
          gradient={{ from: 'green', to: 'blue' }}
          styles={(theme) => ({
            root: {
              backgroundColor: '#212427',
              color: '#f7f7f7',
              fontFamily: 'Titillium Web, sans-serif',
            },
          })}
          onClick={handleClick}
        >Resume
        </Button>
      </Group>
    </div>
  )
}

export default Menu;
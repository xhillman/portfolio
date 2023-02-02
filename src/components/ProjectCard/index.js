import { Card, Image, Text, Group, Button, Badge } from "@mantine/core"
// import magicgreens from '../../images/MagicGreens.png';
import './project-card.css';

const ProjectCard = ({ project }) => {

  return (
    <Card className='project-card'>
      <Card.Section className='image-section'>
        <Image className="project-img" src={project.image} />
      </Card.Section>
      <Card.Section className='card-content'>
        <Text className='project-title'>
          {project.name}
        </Text>
        <Text className='project-description'>
          {project.description}
        </Text>
      </Card.Section>
      <Card.Section className='technologies'>
        <Text className='tech-used'>
          Technologies Used:
        </Text>
        <Group className='tech-badges'>
          {
            project.technologies.map((tech) => {
              return <Badge variant="gradient" gradient={{ from: 'green', to: 'blue' }}>{tech}</Badge>
            })
          }
        </Group>
      </Card.Section>
      <Group className='project-buttons'>
        <Button className='demo'
          variant='outline'
          color='green'
          component='a'
          target='_blank'
          href={project.url}>
          Demo
        </Button>
        <Button className='github'
          component='a'
          target='_blank'
          href={project.github}>
          GitHub
        </Button>
      </Group>
    </Card>
  )
}

export default ProjectCard;
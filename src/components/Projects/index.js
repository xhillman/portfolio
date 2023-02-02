import { Title } from '@mantine/core';
import ProjectCard from '../ProjectCard';

import projects from '../../projects.json';
import './projects.css';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <Title order={2} variant='gradient' gradient={{ from: 'green', to: 'blue' }} className='projects-title'>Projects</Title>
      <div className='projects-container'>
        {
          projects.projects.map((project) => {
            return <ProjectCard project={project} />
          })
        }
      </div>
    </div>
  )
}

export default Projects;
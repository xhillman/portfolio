import { Title } from '@mantine/core';
import ProjectCard from '../ProjectCard';

import projects from '../../projects.json';
import './projects.css';

const Projects = () => {

  // const projectData = JSON.parse(projects);
  // console.log(projectData);

  // console.log(projects);
  // let projectComps = projects.projects.map(project => {
  //   return {
  //     title: project.name,
  //   }
  // })

  // console.log(projectComps);

  return (
    <div className='projects' id='projects'>
      <Title order={2} variant='gradient' gradient={{ from: 'green', to: 'blue' }} className='about-title'>Projects</Title>
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
import React from 'react'
import ProjectItem from './ProjectItem'

import '../styles/Project.css'
import {ProjectList} from '../helpers/ProjectList'
export default function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'> 
        {ProjectList.map((project,index)=>{
          return <ProjectItem key={index} image={project.image} name={project.name}/>
        })}
      </div>
    </div>
  )
}

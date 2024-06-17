import React from 'react'
import { Navigate } from 'react-router-dom'

function ProjectItem({image,name}) {
  return (
    <div className='projectItem'
    onClick={()=>Navigate("/home")}>
      <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
      <h1> {name}</h1>
    </div>
  )
}

export default ProjectItem

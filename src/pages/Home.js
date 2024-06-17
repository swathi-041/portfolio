import React from 'react'
 import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { SiNetlify } from 'react-icons/si';
import '../styles/Home.css'
export default function Home  () {
  return (
    <div className='home'> 
      <div className="about">
      <h2>Hi,My Name is Swathi Samudrala </h2>
      <div className='prompt'>
        <p>A driven student passionate about learning and eager to start a career in the IT field.</p>
        <LinkedIn/>
        <Email/>
        <GitHub/>
        <SiNetlify/>
      </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, NPM, MaterialUI, Yarn</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span> NodeJS,ExpressJS,MySQL,MongoDB,Flask</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

import React, { Component } from 'react'
import { MyProjects } from '../scripts/project'
import ProjectTemplate from './ProjectTemplate';
import '../styles/projects.scss'

export default class Projects extends Component {

   
   render() {
      
      let projects = MyProjects.map((item, index) => <ProjectTemplate key={index} project={item}/>);

      return (
         <div className="container">
            <h2>Projects</h2>
            <div className="project-container">
               {projects}
            </div>
         </div>
      )
   }
}

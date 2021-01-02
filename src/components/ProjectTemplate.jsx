import React, { Component } from 'react'

export default class ProjectTemplate extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
          
      }
   }

   isEmpty(val){
      return val === undefined ||  val == null || val.length <= 0;
   }
   

   render() {

      let baseClass = "btn btn-primary";

      let codeClass = baseClass;

      if (this.isEmpty(this.props.project.codeLink)){
         codeClass +=' disabled'
      };

      let demoClass = baseClass;

      if (this.isEmpty(this.props.project.demoLink)){
         demoClass +=' disabled'
      };

      return (
         <div className="project">
            <div className="image-container">
               <img src={this.props.project.imgLink} alt={this.props.project.alt}/>
            </div>
            <p>{this.props.project.description}</p>
            <div className="b-group">
               <a target="_blank" href={this.props.project.codeLink} className={codeClass}>Code</a>
               <a target="_blank" href={this.props.project.demoLink} className={demoClass}>Demo</a>
            </div>
         </div>
      )
   }
}

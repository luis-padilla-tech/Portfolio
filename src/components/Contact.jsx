import React, { Component } from 'react'
import '../styles/contact.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const ICON_SIZE = '2x'

export default class Contact extends Component {

   componentDidMount(){
      this.resizeEvent();
      window.addEventListener('resize', this.resizeEvent);
   }

   componentWillUnmount(){
      window.removeEventListener('resize', this.resizeEvent);
   }

   resizeEvent(){
      let navBar = document.getElementById('navbar');

      let navHeight = parseInt(getComputedStyle(navBar).height);
      let viweHeight = parseInt(window.innerHeight);

      let title = document.getElementById('contact-container');
      title.style.height = `${Math.floor(viweHeight - navHeight) - 2}px`
   }

   render() {
      return (
         <div className="container">
            <div className="contact-container" id="contact-container">
               <a href="http://github.com/luis-padilla-tech" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size={ICON_SIZE}/></a>
               <a href="https://linkedin.com/in/luis-padilla-tech" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size={ICON_SIZE}/></a>
               <a href="mailto:luis@luispadilla.tech"><FontAwesomeIcon icon={faEnvelope} size={ICON_SIZE}/></a>
               <a className="contact-link" href="tel:+5414414696"><FontAwesomeIcon icon={faPhone} size={ICON_SIZE}/></a>
            </div>
         </div>
      )
   }
}

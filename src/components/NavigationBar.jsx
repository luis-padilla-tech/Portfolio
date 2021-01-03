import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'

export default class NavigationBar extends Component {
   render() {
      return (
         <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container container-fluid">
            <Link className="navbar-brand" exact to="/">
               <img src="./images/mountains.jpg" alt="self"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav ml-auto align-items-right">
                  <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                  <NavLink className="nav-link" activeClassName="active" exact to="/projects">Projects</NavLink>
                  <NavLink className="nav-link" activeClassName="active" exact to="/contact">Contact</NavLink>
               </div>
            </div>
         </div>
      </nav>
      )
   }
}

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import '../src/styles/shared.scss';
import NavigationBar from './components/NavigationBar';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import NotFound from './components/NotFound';

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <NavigationBar />
            <Switch>
               <Route exact path='/projects'>
                  <Projects/>
               </Route>
               <Route exact path='/contact'>
                  <Contact/>
               </Route>
               <Route exact path='/'>
                  <Home/>
               </Route>
               <Route>
                  <NotFound/>
               </Route>
            </Switch>
         </React.Fragment>
      )
   }
}

export default hot(module)(App);

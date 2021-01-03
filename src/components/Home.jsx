import React, { Component } from 'react'
import '../styles/home.scss'


export default class Home extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
         wordToBlink: "Luis Padilla",
         stuff: [],
      };
   }

   componentDidMount(){
      window.addEventListener('resize', this.resizeEvent);
      this.timerID = setInterval(() => this.tick(), 500);
      this.resizeEvent();
   }

   componentWillUnmount(){
      clearInterval(this.timerID);
      window.removeEventListener('resize', this.resizeEvent);
   }

   resizeEvent(){
      let navBar = document.getElementById('navbar');

      let navHeight = parseInt(getComputedStyle(navBar).height);
      let viweHeight = parseInt(window.innerHeight);

      let title = document.getElementById('title');
      title.style.height = `${Math.floor(viweHeight - navHeight) - 2}px`
   }

   tick(){

      let stuff = this.state.stuff;

      if (stuff.length > 0 && stuff.length < this.state.wordToBlink.length){
         stuff.pop();
         stuff.push({letter: this.state.wordToBlink.charAt(stuff.length), class: 'typed'});
      }

      if (stuff.length < this.state.wordToBlink.length){
         stuff.push({letter: this.state.wordToBlink.charAt(stuff.length), class: 'next'});
      }

      this.setState({stuff})
   }
   

   render() {

      const letters = this.state.stuff.map((item, index) => <span key={index} className={item.class}>{item.letter}</span>)

      return (
         <div className="container">
         <div className="row">
            <div className="col-xl-9">
               <div className="title" id="title">
                     <h1 className="name">{letters}</h1>
                     <h2>In a Jam? I Program</h2>
               </div>
            </div>
            <div className="col-xl-3">
               <div className="json">
                  <pre>{'{'}</pre>
                  <pre> "author": "Luis Padilla",</pre>
                  <pre> "description": "Software Engineer",</pre>
                  <pre> "status": "under-contruction"</pre>
                  <pre>{'}'}</pre>
               </div>
            </div>
         </div>
      </div>
      )
   }
}

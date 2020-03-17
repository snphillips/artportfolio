import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './index.css';
import Header from './Header';
// import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
// import About from './About';
import Art from './Art';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding (if there is any)


    this.state = {
      showingArt: ''
    };
  }




  render(){
    return (
    <div className="App container">
      <aside>
        <Header parentState={this.state}/>
        <Navigation parentState={this.state}/>
        <Contact parentState={this.state}/>
      </aside>
      <Art parentState={this.state}/>
    </div>
  );
  }
}


        // <CV parentState={this.state}/>
        // <About parentState={this.state}/>

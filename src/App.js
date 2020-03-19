import React from 'react';
import './index.css';
import Header from './Header';
import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
import GalleryEnvelopeCollages from './GalleryEnvelopeCollages';



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
      </aside>
      <section>
        <GalleryEnvelopeCollages parentState={this.state}/>
        <About parentState={this.state}/>
        <Contact parentState={this.state}/>
        <CV parentState={this.state}/>
      </section>
    </div>
  );
  }
}




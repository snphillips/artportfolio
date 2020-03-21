import React from 'react';
import './index.css';
import Header from './Header';
import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
import Statement from './Statement';
import GalleryEnvelopeCollages from './GalleryEnvelopeCollages';
import GalleryCurbsideObjectTags from './GalleryCurbsideObjectTags';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding (if there is any)
    this.showStatement = this.showStatement.bind(this)

    this.state = {
      showingArt: '',
      currentStatement: "show statement based on hover"
    };
  }






showStatement(){
  console.log("hello from showStatement().")
  // let hoverStatement = "asjkdhf'asdfhkds"
  // this.setState({currentStatement: hoverStatement})
  // return( hoverStatement )


}










  render(){
    return (
    <div className="App container">
      <aside id="sidebar">
        <Header parentState={this.state}/>
        <Navigation parentState={this.state}/>
        <Statement parent_state={this.state}/>
      </aside>
      <section>
        <GalleryEnvelopeCollages parentState={this.state}/>
        <GalleryCurbsideObjectTags parentState={this.state}/>
        <About parentState={this.state}/>
        <Contact parentState={this.state}/>
        <CV parentState={this.state}/>
      </section>
    </div>
  );
  }
}




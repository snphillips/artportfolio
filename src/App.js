import React from 'react';
import './index.css';
import Header from './Header';
import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
// import Statement from './Statement';
import GalleryEnvelopeCollages from './GalleryEnvelopeCollages';
import GalleryCurbsideObjectTags from './GalleryCurbsideObjectTags';
import GalleryOtherArt from './GalleryOtherArt';



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






showStatement(item){
  console.log("hello from showStatement().")
  console.log("item.statement:", item.statement)
  // this.setState({currentStatement: this.statement})


}


hideStatement(){
  console.log("hello from hideStatement().")
  // console.log("mango", this.statement)


}











  render(){
    return (
    <div className="App container">
      <aside id="sidebar">
        <Header parentState={this.state}/>
        <Navigation parentState={this.state}/>
      </aside>
      <section>
        <GalleryEnvelopeCollages parentState={this.state}
                                 // showStatement={this.showStatement}
                                 // hideStatement={this.hideStatement}
                                 // statement={this.props.statement}
                                 />
        <GalleryCurbsideObjectTags parentState={this.state} />
        <GalleryOtherArt parentState={this.state} />
        <About parentState={this.state}/>
        <Contact parentState={this.state}/>
        <CV parentState={this.state}/>
      </section>
    </div>
  );
  }
}



        // <Statement parent_state={this.state}/>

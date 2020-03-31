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
import artOtherArt from './artOtherArt';
import artEnvelopeCollages from './artEnvelopeCollages';
import artCurbsideObjectTags from './artCurbsideObjectTags';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding
    this.showStatement = this.showStatement.bind(this);
    this.hideStatement = this.hideStatement.bind(this);
    this.includeInGalleryTrue = this.includeInGalleryTrue.bind(this);
    this.filterIncludeInGallery = this.filterIncludeInGallery.bind(this);

    this.state = {
      showingArt: '',
      currentStatement: "show statement based on hover",
      filteredOtherArt: [],
      filteredEnvelopeCollages: [],
      filteredCurbsideObjectTags: []


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


//  ==================================
//  only display images from .json
//  if includeingallery === true
//  ==================================
  includeInGalleryTrue(item){
    return item.includeingallery == true;
  }

  filterIncludeInGallery(){
    this.setState({filteredOtherArt: artOtherArt.filter(this.includeInGalleryTrue)})
    this.setState({filteredEnvelopeCollages: artEnvelopeCollages.filter(this.includeInGalleryTrue)})
    this.setState({filteredCurbsideObjectTags: artCurbsideObjectTags.filter(this.includeInGalleryTrue)})
  }





  componentDidMount(){
    this.filterIncludeInGallery()
  }






//  ==================================
//  And finally, the render
//  ==================================
  render(){
    return (

    <div className="App container">

      <aside id="sidebar">
        <Header parentState={this.state}/>
        <Navigation parentState={this.state}/>
      </aside>

      <section className="content">
        <GalleryEnvelopeCollages parentState={this.state}
                                 filteredEnvelopeCollages={this.state.filteredEnvelopeCollages}
                                 // showStatement={this.showStatement}
                                 // hideStatement={this.hideStatement}
                                 // statement={this.props.statement}
                                 />
        <GalleryOtherArt parentState={this.state}
                         filteredOtherArt={this.state.filteredOtherArt}
                         />
        <GalleryCurbsideObjectTags parentState={this.state}
                                   filteredCurbsideObjectTags={this.state.filteredCurbsideObjectTags}
                                   />
        <About parentState={this.state}/>
        <Contact parentState={this.state}/>
        <CV parentState={this.state}/>
      </section>
    </div>
  );
  }
}



        // <Statement parent_state={this.state}/>

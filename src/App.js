import React from 'react';
import './index.css';
import Header from './Header';
import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Carousel from './Carousel';
import art from './art';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding
    this.includeInGalleryTrue = this.includeInGalleryTrue.bind(this);
    this.filterIncludeInGallery = this.filterIncludeInGallery.bind(this);
    this.showCarouselImage = this.showCarouselImage.bind(this);
    this.closeCarouselImage = this.closeCarouselImage.bind(this);
    this.carouselNextImage = this.carouselNextImage.bind(this);
    this.carouselPreviousImage = this.carouselPreviousImage.bind(this);
    this.establishImageIndex = this.establishImageIndex.bind(this);



    this.state = {
      filteredArt: [],
      showingArt: '',
      currentStatement: '',
      displayCarousel: {'display': 'none'},
      carouselImageIndex: 0,
      carouselImageURL: '',
      carouselTitle: '',
      carouselYear: '',
      carouselDims: '',
      carouselMedia: '',
      carouselPrice: ''
    };
  }


//  ==================================
//  carousel: the expanded image
//  ==================================
//  setStates: 1) change the css display class from "none" to "block"
//             2) to indicate which image it's clicked on
//             3) a bunch of information accompanying each image
  showCarouselImage(carouselURL, carouselTitle, carouselYear, carouselDims, carouselMedia, carouselPrice, carouselStatement) {
    this.setState({displayCarousel: {'display': "block"}})
    this.setState({carouselImageURL: carouselURL})
    this.setState({carouselTitle: carouselTitle})
    this.setState({carouselYear: carouselYear})
    this.setState({carouselDims: carouselDims})
    this.setState({carouselMedia: carouselMedia})
    this.setState({carouselPrice: carouselPrice})
    this.setState({carouselStatement: carouselStatement})
    console.log("filteredArt:", this.state.filteredArt)
    console.log("filteredArt.length:", this.state.filteredArt.length)
  }


  establishImageIndex(imageIndex){
    this.setState({carouselImageIndex: imageIndex}, () => {
      console.log("the index of the clicked image is:", this.state.carouselImageIndex)
    })
  }


// TODO: get this to work
  carouselNextImage(carouselTitle) {
    let nextImageIndex =  this.state.carouselImageIndex + 1
    this.setState({carouselImageIndex: nextImageIndex}, () => {
      console.log("carouselNextImage pressed & carouselImageIndex is: ", this.state.carouselImageIndex)
    })
  }


// TODO: get this to work
  carouselPreviousImage(event) {
    let previousImageIndex =  this.state.carouselImageIndex - 1
    this.setState({carouselImageIndex: previousImageIndex}, () => {
      console.log("carouselPreviousImage pressed & carouselImageIndex is: ", this.state.carouselImageIndex)
    })
  }


// This simply changes the css display class from "block" to "none"
  closeCarouselImage() {
    this.setState({displayCarousel: {'display': "none"}})
  }

//  ==================================
//  only display images from .json
//  1) if includeingallery === true, return it...meaning keep it
//  2) apply the above function as a filter to the states
//  ==================================
  includeInGalleryTrue(item){
    return item.includeingallery === true;
  };

  filterIncludeInGallery(){
    this.setState({filteredArt: art.filter(this.includeInGalleryTrue)})
  };

  componentDidMount(){
    this.filterIncludeInGallery()
  };





//  ==================================
//  The render
//  ==================================
  render(){
    return (

    <div className="App container">

      <aside id="sidebar">
        <Header parentState={this.state}/>
        <Navigation parentState={this.state}/>
      </aside>

      <aside id="ghost-sidebar">
      </aside>

      <section className="content">

        <Gallery parentState={this.state}
                 filteredArt={this.state.filteredArt}
                 showCarouselImage={this.showCarouselImage}
                 establishImageIndex={this.establishImageIndex}
                 />

        <Carousel parentState={this.state}
                  showCarouselImage={this.showCarouselImage}
                  closeCarouselImage={this.closeCarouselImage}
                  carouselNextImage={this.carouselNextImage}
                  carouselPreviousImage={this.carouselPreviousImage}
                  />

        <About parentState={this.state}/>
        <Contact parentState={this.state}/>
        <CV parentState={this.state}/>

      </section>
    </div>
  );
  }
}


        // <Statement parentState={this.state}/>


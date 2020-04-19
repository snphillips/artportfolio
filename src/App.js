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
    this.updateCarouselArt = this.updateCarouselArt.bind(this);
    this.keyAction = this.keyAction.bind(this);



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
  showCarouselImage(carouselURL, carouselTitle, carouselYear, carouselMedia, carouselDims, carouselPrice, carouselStatement) {
    this.setState({displayCarousel: {'display': "block"}})
    this.setState({carouselImageURL: carouselURL})
    this.setState({carouselTitle: carouselTitle})
    this.setState({carouselYear: carouselYear})
    this.setState({carouselMedia: carouselMedia})
    this.setState({carouselDims: carouselDims})
    this.setState({carouselPrice: carouselPrice})
    this.setState({carouselStatement: carouselStatement})
    // console.log("filteredArt:", this.state.filteredArt)
    // console.log("filteredArt.length:", this.state.filteredArt.length)
  }


  establishImageIndex(imageIndex){
    this.setState({carouselImageIndex: imageIndex}, () => {
      console.log("the index of the clicked image is:", this.state.carouselImageIndex)
    })
  }



// TODO: when the carousel next/previous image buttons are pressed,
// the art piece states must update

updateCarouselArt(){
    this.setState({displayCarousel: {'display': "block"}})
    this.setState({carouselImageURL: this.state.filteredArt[this.state.carouselImageIndex].link})
    this.setState({carouselTitle: this.state.filteredArt[this.state.carouselImageIndex].title})
    this.setState({carouselYear: this.state.filteredArt[this.state.carouselImageIndex].year})
    this.setState({carouselMedia: this.state.filteredArt[this.state.carouselImageIndex].media})
    this.setState({carouselDims: this.state.filteredArt[this.state.carouselImageIndex].dims})
    this.setState({carouselPrice: this.state.filteredArt[this.state.carouselImageIndex].price})
    this.setState({carouselStatement: this.state.filteredArt[this.state.carouselImageIndex].statement})
}



  carouselNextImage() {
    let nextImageIndex =  this.state.carouselImageIndex + 1
    this.setState({carouselImageIndex: nextImageIndex}, () => {
      console.log("Next image index is: ", this.state.carouselImageIndex)
      this.updateCarouselArt()
    })
  }


  carouselPreviousImage() {
    let previousImageIndex =  this.state.carouselImageIndex - 1
    this.setState({carouselImageIndex: previousImageIndex}, () => {
      console.log("Next image index is: ", this.state.carouselImageIndex)
      this.updateCarouselArt()
    })
  }


//  ==================================
//  Arrow keys
//  ==================================
  keyAction(event) {
    // console.log("event:", event)
    let whichKey = event.keyCode;
    switch (whichKey) {
      case 39:
        console.log("forward arrow key pushed")
        this.carouselNextImage()
      break;
      case 37:
        console.log("back arrow key pushed")
        this.carouselPreviousImage()
      break;
    }
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

    document.onkeyup = (event) => {
    this.keyAction(event);
  }
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


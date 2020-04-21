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
    this.openCarousel = this.openCarousel.bind(this);
    this.closeCarousel = this.closeCarousel.bind(this);
    this.carouselNextImage = this.carouselNextImage.bind(this);
    this.carouselPreviousImage = this.carouselPreviousImage.bind(this);
    this.establishImageIndex = this.establishImageIndex.bind(this);
    this.updateCarouselArt = this.updateCarouselArt.bind(this);
    this.keyAction = this.keyAction.bind(this);
    this.carouselDisplayForwardBackButtons = this.carouselDisplayForwardBackButtons.bind(this);



    this.state = {
      filteredArt: [],
      showingArt: '',
      currentStatement: '',
      displayCarousel: {'display': 'none'},
      carouselImageIndex: "flowers",
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
  openCarousel(carouselURL, carouselTitle, carouselYear, carouselMedia, carouselDims, carouselPrice, carouselStatement) {
    this.establishImageIndex( () => {
      this.carouselDisplayForwardBackButtons()
    })
    this.setState({displayCarousel: {'display': "block"}})
    this.setState({carouselImageURL: carouselURL})
    this.setState({carouselTitle: carouselTitle})
    this.setState({carouselYear: carouselYear})
    this.setState({carouselMedia: carouselMedia})
    this.setState({carouselDims: carouselDims})
    this.setState({carouselPrice: carouselPrice})
    this.setState({carouselStatement: carouselStatement})
    console.log("Current image index is: (2nd console log)", this.state.carouselImageIndex)
  }

  // This isn't triggering when user first opens the carousel
  establishImageIndex(imageIndex){
    this.setState({carouselImageIndex: imageIndex}, () => {
      console.log("establishImageIndex():", this.state.carouselImageIndex)
      this.carouselDisplayForwardBackButtons()
    })

  }


  carouselDisplayForwardBackButtons(){
    if (this.state.carouselImageIndex == this.state.filteredArt.length - 1) {
      console.log(`image index is:`, this.state.carouselImageIndex , `Don't display forward arrow`)
      document.getElementById('carousel-next-button').style.display = 'none'
      document.getElementById('carousel-back-button').style.display = 'block'
    }
      else if (this.state.carouselImageIndex == 0) {
        console.log(`image index is:`, this.state.carouselImageIndex,  `Don't display back arrow`)
        document.getElementById('carousel-back-button').style.display = 'none'
        document.getElementById('carousel-next-button').style.display = 'block'
      } else {
          console.log(`image index is:`, this.state.carouselImageIndex,  `Both arrows should appear`)
          document.getElementById('carousel-back-button').style.display = 'block'
          document.getElementById('carousel-next-button').style.display = 'block'
      }
  }


  updateCarouselArt(){
    this.setState({displayCarousel: {'display': "block"}})
    this.setState({carouselImageURL: this.state.filteredArt[this.state.carouselImageIndex].link})
    this.setState({carouselTitle: this.state.filteredArt[this.state.carouselImageIndex].title})
    this.setState({carouselYear: this.state.filteredArt[this.state.carouselImageIndex].year})
    this.setState({carouselMedia: this.state.filteredArt[this.state.carouselImageIndex].media})
    this.setState({carouselDims: this.state.filteredArt[this.state.carouselImageIndex].dims})
    this.setState({carouselPrice: this.state.filteredArt[this.state.carouselImageIndex].price})
    this.setState({carouselStatement: this.state.filteredArt[this.state.carouselImageIndex].statement})
    this.carouselDisplayForwardBackButtons()
  }



  carouselNextImage() {
    let nextImageIndex =  this.state.carouselImageIndex + 1
    this.setState({carouselImageIndex: nextImageIndex}, () => {
      console.log("Image index is: ", this.state.carouselImageIndex)
      this.updateCarouselArt()
    })
  }


  carouselPreviousImage() {
    let previousImageIndex =  this.state.carouselImageIndex - 1
    this.setState({carouselImageIndex: previousImageIndex}, () => {
      console.log("Image index is: ", this.state.carouselImageIndex)
      this.updateCarouselArt()
    })
  }

  // This simply changes the css display class from "block" to "none"
  closeCarousel() {
    this.setState({displayCarousel: {'display': "none"}})
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
    // what images from the art json are shown?
    this.filterIncludeInGallery()
    // the hotkeys
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
                 openCarousel={this.openCarousel}
                 establishImageIndex={this.establishImageIndex}

                 />

        <Carousel parentState={this.state}
                  closeCarousel={this.closeCarousel}
                  establishImageIndex={this.establishImageIndex}
                  carouselNextImage={this.carouselNextImage}
                  carouselPreviousImage={this.carouselPreviousImage}
                  carouselDisplayForwardBackButtons={this.carouselDisplayForwardBackButtons}
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


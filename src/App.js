import React from 'react';
import './index.css';
import Header from './Header';
import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Modal from './Modal';
import Footer from './Footer';
import art from './art';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding
    this.includeInGalleryTrue = this.includeInGalleryTrue.bind(this);
    this.filterIncludeInGallery = this.filterIncludeInGallery.bind(this);
    this.openModal = this.openModal.bind(this);
    this.displayBlockModal = this.displayBlockModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalNextImage = this.modalNextImage.bind(this);
    this.modalPreviousImage = this.modalPreviousImage.bind(this);
    this.establishImageIndex = this.establishImageIndex.bind(this);
    this.setModalArtDetails = this.setModalArtDetails.bind(this);
    this.keyAction = this.keyAction.bind(this);
    this.modalDisplayForwardBackButtons = this.modalDisplayForwardBackButtons.bind(this);
    this.landscapeOrPortrait = this.landscapeOrPortrait.bind(this);


    this.state = {
      filteredArt: [],
      showingArt: '',
      currentStatement: '',
      displayModal: {'display': 'none'},
      modalImageIndex: 0,
      modalImageURL: '',
      modalTitle: '',
      modalYear: '',
      modalDims: '',
      modalMedia: '',
      modalPrice: '',
      modalImageOrientation: 'landscape'
    };
  }


//  ==================================
//  modal: the expanded image
//  ==================================
//  setStates: 1) to indicate which image the user has clicked
//             2) change the css display class from "none" to "block"
//             3) a bunch of information accompanying each image
  // openModal(modalURL, modalTitle, modalYear, modalMedia, modalDims, modalPrice, modalStatement, modalImageOrient) {
  openModal(imageIndex) {
    console.log("1) opening modal via openModal() and imageIndex is:", imageIndex)
    this.establishImageIndex(imageIndex)
  }

  // 1) set state with the index of the image the user has clicked
  // 2) then, figure out if the back and forward buttons should be displayed
  establishImageIndex(imageIndex){
    this.setState({modalImageIndex: imageIndex}, () => {
      console.log("2) establishImageIndex():", this.state.modalImageIndex)
      this.setModalArtDetails()
      this.displayBlockModal()
      this.modalDisplayForwardBackButtons()
    })
  }

  // one job: add css display: block; to the modal
  displayBlockModal() {
    this.setState({displayModal: {'display': "block"}})
    console.log(`4) add css display: block; to the modal`)
  }

  setModalArtDetails(imageIndex){
    this.setState({modalTitle: this.state.filteredArt[this.state.modalImageIndex].title})
    this.setState({modalImageOrientation: this.state.filteredArt[this.state.modalImageIndex].imageShape}, () => {
      this.landscapeOrPortrait()
    this.setState({modalImageURL: this.state.filteredArt[this.state.modalImageIndex].link})
    this.setState({modalYear: this.state.filteredArt[this.state.modalImageIndex].year})
    this.setState({modalMedia: this.state.filteredArt[this.state.modalImageIndex].media})
    this.setState({modalDims: this.state.filteredArt[this.state.modalImageIndex].dims})
    this.setState({modalPrice: this.state.filteredArt[this.state.modalImageIndex].price})
    this.setState({modalStatement: this.state.filteredArt[this.state.modalImageIndex].statement})
    })
    // console.log("3) setModalArtDetails():", this.state.modalTitle, this.state.modalYear, this.state.modalMedia,)
  }


  // The art image dimensions are a mixture of landscape and portrait or square.
  // They can't all be displayed with the same width or they'd blow out the user's screen.
  // Every image has a key value pair in the .json where I indicate what type of image is it:
  // lanscape, portrait or square. This function sets the image max-width based on what
  // kind of image it is.
  landscapeOrPortrait() {
    let imageOrientation = this.state.modalImageOrientation
    if (imageOrientation == "landscape") {
        // console.log(`6)`, this.state.modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "700px";
        document.querySelector('.modal-info-container').style.maxWidth = "700px";
    } else if (imageOrientation == "portrait") {

        // console.log(`6)`, this.state.modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "450px";
        document.querySelector('.modal-info-container').style.maxWidth = "450px";
    } else {
        // console.log(`6)`, this.state.modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "500px";
        document.querySelector('.modal-info-container').style.maxWidth = "500px";
    }

  }

  // Don't display the modal back arrows if the user is viewing the first image.
  // Don't display the modal forward arrows if the user is viewing the last image.
  modalDisplayForwardBackButtons(){
    if (this.state.modalImageIndex === this.state.filteredArt.length - 1) {
      // console.log(`5) image index is:`, this.state.modalImageIndex , `Don't display next arrow`)
      document.getElementById('modal-next-button').style.display = 'none'
      document.getElementById('modal-back-button').style.display = 'block'
    }
      else if (this.state.modalImageIndex === 0) {
        // console.log(`5) image index is:`, this.state.modalImageIndex,  `Don't display back arrow`)
        document.getElementById('modal-back-button').style.display = 'none'
        document.getElementById('modal-next-button').style.display = 'block'
      } else {
          // console.log(`5) image index is:`, this.state.modalImageIndex,  `Both arrows should appear`)
          document.getElementById('modal-back-button').style.display = 'block'
          document.getElementById('modal-next-button').style.display = 'block'
      }
  }

// this function applies both to the arrow buttons on the site &
// the arrow buttons on the keyboard
// if the user hits the back arrown on their keyboard on the first image,
// the modal closes.
  modalPreviousImage(imageIndex) {
    console.log("modalNextImage() this.state.modalImageIndex is: ", this.state.modalImageIndex)

    let previousImageIndex = this.state.modalImageIndex - 1

    if (previousImageIndex  < 0) {
      this.closeModal()
      } else {
        this.setState({modalImageIndex: previousImageIndex}, () => {
        this.establishImageIndex(this.state.modalImageIndex)
        })
      }
  }

// this function applies both to the modal arrow buttons &
// the arrow buttons on the keyboard.
// If the user hits the forward arrow on their keyboard on the last image,
// the modal closes.
  modalNextImage(imageIndex) {
    console.log("modalNextImage() this.state.modalImageIndex is: ", this.state.modalImageIndex)

    let nextImageIndex =  this.state.modalImageIndex + 1

    if (nextImageIndex > this.state.filteredArt.length - 1) {
      this.closeModal()
    } else {
      this.setState({modalImageIndex: nextImageIndex}, () => {
        this.establishImageIndex(this.state.modalImageIndex)
      })
    }
  }

  // This simply changes the css display class from "block" to "none"
  closeModal() {
    this.setState({displayModal: {'display': "none"}})
  }


//  ==================================
//  Arrow keys
//  ==================================
  keyAction(event) {
    console.log("event:", event)
    let whichKey = event.keyCode;
    switch (whichKey) {
      case 39:
        console.log("forward arrow key pushed. Next image.")
        this.modalNextImage()
      break;
      case 37:
        console.log("back arrow key pushed. Previous image")
        this.modalPreviousImage()
      break;
      case 38:
        console.log("up arrow key pushed. Previous image.")
        this.modalPreviousImage()
      break;
      case 40:
        console.log("down arrow key pushed Next image.")
        this.modalNextImage()
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
    // This determines which images from the art json are shown
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
        <Footer />
      </aside>

      <aside id="ghost-sidebar">
      </aside>

      <section className="content">

        <Gallery parentState={this.state}
                 filteredArt={this.state.filteredArt}
                 openModal={this.openModal}
                 />

        <Modal parentState={this.state}
               modalPreviousImage={this.modalPreviousImage}
               modalNextImage={this.modalNextImage}
               closeModal={this.closeModal}
              />

        <About parentState={this.state}/>
        <Contact parentState={this.state}/>
        <CV parentState={this.state}/>

      </section>
    </div>
  );
  }
}



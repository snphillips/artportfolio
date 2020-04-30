import React from 'react';
import './index.css';
import Header from './Header';
import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Modal from './Modal';
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
    this.updateModalArt = this.updateModalArt.bind(this);
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
  openModal() {
    console.log("opening modal via openModal()")
    this.establishImageIndex()
    this.displayBlockModal()
    // this.updateModalArt()
    this.modalDisplayForwardBackButtons()

    // this.setState({modalImageURL: modalURL})
    // this.setState({modalTitle: modalTitle})
    // this.setState({modalYear: modalYear})
    // this.setState({modalMedia: modalMedia})
    // this.setState({modalDims: modalDims})
    // this.setState({modalPrice: modalPrice})
    // this.setState({modalStatement: modalStatement})
    // this.setState({modalImageOrientation: modalImageOrient}, () => {
      // this.landscapeOrPortrait()
    // })
  }


  // 1) set state with the index of the image the user has clicked
  // 2) then, figure out if the back and forward buttons should be displayed
  establishImageIndex(imageIndex){
    this.setState({modalImageIndex: imageIndex}, () => {
      console.log("1) establishImageIndex():", this.state.modalImageIndex)
    })
  }


  // one job: add css display: block; to the modal
  displayBlockModal() {
    this.setState({displayModal: {'display': "block"}})
    console.log(`2) add css display: block; to the modal`)
  }


  updateModalArt(modalURL, modalTitle, modalYear, modalMedia, modalDims, modalPrice, modalStatement, modalImageOrient){
    console.log("this.state.modalImageIndex:", this.state.modalImageIndex)
    // this.setState({displayModal: {'display': "block"}})
    this.setState({modalImageURL: this.state.filteredArt[this.state.modalImageIndex].link})
    this.setState({modalTitle: this.state.filteredArt[this.state.modalImageIndex].title})
    this.setState({modalYear: this.state.filteredArt[this.state.modalImageIndex].year})
    this.setState({modalMedia: this.state.filteredArt[this.state.modalImageIndex].media})
    this.setState({modalDims: this.state.filteredArt[this.state.modalImageIndex].dims})
    this.setState({modalPrice: this.state.filteredArt[this.state.modalImageIndex].price})
    this.setState({modalStatement: this.state.filteredArt[this.state.modalImageIndex].statement})
    this.setState({modalImageOrientation: this.state.filteredArt[this.state.modalImageIndex].imageShape}, () => {
      this.landscapeOrPortrait()
    })
    console.log(" 3) updateModalArt():", this.state.modalTitle, this.state.modalYear, this.state.modalMedia,)
    // why does this need to be here?
    // this.modalDisplayForwardBackButtons()
  }


  // work in progress
  landscapeOrPortrait() {

    let imageOrientation = this.state.modalImageOrientation

    if (imageOrientation == "landscape") {
        console.log(this.state.modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "700px";
        document.querySelector('.modal-info-container').style.maxWidth = "700px";
    } else if (imageOrientation == "portrait") {

        console.log(this.state.modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "450px";
        document.querySelector('.modal-info-container').style.maxWidth = "450px";
    } else {
        console.log(this.state.modalTitle, "is:", imageOrientation)
        document.querySelector('#modal-image').style.maxWidth = "500px";
        document.querySelector('.modal-info-container').style.maxWidth = "500px";
    }

  }



  modalDisplayForwardBackButtons(){
    if (this.state.modalImageIndex === this.state.filteredArt.length - 1) {
      // console.log(`image index is:`, this.state.modalImageIndex , `Don't display next arrow`)
      document.getElementById('modal-next-button').style.display = 'none'
      document.getElementById('modal-back-button').style.display = 'block'
    }
      else if (this.state.modalImageIndex === 0) {
        // console.log(`image index is:`, this.state.modalImageIndex,  `Don't display back arrow`)
        document.getElementById('modal-back-button').style.display = 'none'
        document.getElementById('modal-next-button').style.display = 'block'
      } else {
          // console.log(`image index is:`, this.state.modalImageIndex,  `Both arrows should appear`)
          document.getElementById('modal-back-button').style.display = 'block'
          document.getElementById('modal-next-button').style.display = 'block'
      }
  }


// this function applies both to the arrow buttons on the site &
// the arrow buttons on the keyboard
// if the user hits the forward arrow on their keyboard on the last image,
// the modal closes.
  modalNextImage() {
    let nextImageIndex =  this.state.modalImageIndex + 1
    if (nextImageIndex > this.state.filteredArt.length - 1) {
      this.closeModal()
    } else {
      this.setState({modalImageIndex: nextImageIndex}, () => {
        console.log("Image index is: ", this.state.modalImageIndex)
        this.updateModalArt()
        // this.landscapeOrPortrait()
      })
    }
  }


// this function applies both to the arrow buttons on the site &
// the arrow buttons on the keyboard
// if the user hits the back arrown on their keyboard on the first image,
// the modal closes.
  modalPreviousImage() {
    let previousImageIndex = this.state.modalImageIndex - 1
    if (previousImageIndex  < 0) {
      this.closeModal()
      } else {
        this.setState({modalImageIndex: previousImageIndex}, () => {
        this.updateModalArt()
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
    // console.log("event:", event)
    let whichKey = event.keyCode;
    switch (whichKey) {
      case 39:
        console.log("forward arrow key pushed")
        this.modalNextImage()
      break;
      case 37:
        console.log("back arrow key pushed")
        this.modalPreviousImage()
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
      </aside>

      <aside id="ghost-sidebar">
      </aside>

      <section className="content">

        <Gallery parentState={this.state}
                 filteredArt={this.state.filteredArt}
                 openModal={this.openModal}
                 updateModalArt={this.updateModalArt}
                 establishImageIndex={this.establishImageIndex}
                 />

        <Modal parentState={this.state}
               closeModal={this.closeModal}
               // establishImageIndex={this.establishImageIndex}
               modalNextImage={this.modalNextImage}
               modalPreviousImage={this.modalPreviousImage}
               modalDisplayForwardBackButtons={this.modalDisplayForwardBackButtons}
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


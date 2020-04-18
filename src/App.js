import React from 'react';
import './index.css';
import Header from './Header';
import CV from './CV';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import ImageModal from './ImageModal';
import art from './art';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding
    // this.showStatement = this.showStatement.bind(this);
    // this.hideStatement = this.hideStatement.bind(this);
    this.includeInGalleryTrue = this.includeInGalleryTrue.bind(this);
    this.filterIncludeInGallery = this.filterIncludeInGallery.bind(this);
    this.showModalImage = this.showModalImage.bind(this);
    this.closeModalImage = this.closeModalImage.bind(this);
    this.modalNextImage = this.modalNextImage.bind(this);
    this.modalPreviousImage = this.modalPreviousImage.bind(this);
    // this.updatemodalImageIndex = this.updatemodalImageIndex.bind(this);
    // this.setmodalIndex = this.setmodalIndex.bind(this);

    this.state = {
      filteredArt: [],
      showingArt: '',
      currentStatement: '',
      displayModal: {'display': 'none'},
      modalImageURL: '',
      modalTitle: '',
      modalYear: '',
      modalDims: '',
      modalMedia: '',
      modalPrice: '',
      modalImageIndex: 0
    };
  }


//  ==================================
//  modal: the expanded image
//  ==================================
//  setStates: 1) change the css display class from "none" to "block"
//             2) to indicate which image it's clicked on
//             3) a bunch of information accompanying each image
  showModalImage(modalURL, modalTitle, modalYear, modalDims, modalMedia, modalPrice, modalStatement) {
    this.setState({displayModal: {'display': "block"}})
    this.setState({modalImageURL: modalURL})
    this.setState({modalTitle: modalTitle})
    this.setState({modalYear: modalYear})
    this.setState({modalDims: modalDims})
    this.setState({modalMedia: modalMedia})
    this.setState({modalPrice: modalPrice})
    this.setState({modalStatement: modalStatement})

    console.log("filteredArt:", this.state.filteredArt)
    console.log("filteredArt.length:", this.state.filteredArt.length)
    console.log("modalImageIndex:", this.state.modalImageIndex)
    // The findIndex() method returns the index of the first element in an array
    // that pass a test provided as a function.
    console.log("this.state.filteredArt.IndexOf(item):", this.state.filteredArt.findIndex( () => this.state.modalPrice == "$2,000"))
  }

// This simply changes the css display class from "block" to "none"
  closeModalImage() {
    this.setState({displayModal: {'display': "none"}})
  }

// TODO: get this to work
  modalNextImage(modalURL) {
    // let nextNumber =  6
    let nextNumber =  this.state.modalImageIndex + 1
    this.setState({modalImageIndex: nextNumber}, () => {
      console.log("modalNextImage pressed & modalImageIndex is: ", this.state.modalImageIndex)
    })

  }

  modalPreviousImage() {
    let previousNumber =  this.state.modalImageIndex - 1
    this.setState({modalImageIndex: previousNumber}, () => {
      console.log("modalNextImage pressed & modalImageIndex is: ", this.state.modalImageIndex)
    })
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

  updatemodalImageIndex(item) {
    let currentIndex = this.state.filteredArt.IndexOf(this.item)
    this.setState({modalImageIndex: this.currentIndex})
  }

  is() {
    return
  }



  // setmodalIndex(item){
  //  let galleryIndex = this.props.filteredArt.IndexOf(item)
  //  this.setState({modalImageIndex: this.galleryIndex}, () => {
  //    console.log("modalImageIndex:", this.state.modalImageIndex)
  //  })
  // }



//  ==================================
// make the price a readable format
// not working yet
//  ==================================
// formatPrice() {

//   artEnvelopeCollages.map( item => {

//     console.log("price before: ", item.price)
//     const formatter = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 0
//     })

//     let formattedPrice = formatter.format(item.price)
//     console.log("price after: ", formattedPrice )
//   })

// }



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
                 showStatement={this.showStatement}
                 showModalImage={this.showModalImage}
                 />

        <ImageModal parentState={this.state}
                    setmodalIndex={this.state}
                    closeModalImage={this.closeModalImage}
                    modalNextImage={this.modalNextImage}
                    modalPreviousImage={this.modalPreviousImage}
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


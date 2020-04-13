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

    this.state = {
      filteredArt: ["butterfly", "snake"],
      showingArt: '',
      currentStatement: '',
      displayModal: {'display': 'none'},
      modalImageURL: '',
      allArtForModalGallery: [],
      modalImageIndex: 0,
      modalTitle: '',
      modalYear: '',
      modalDims: '',
      modalMedia: '',
      modalPrice: '',
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
    console.log("modalURL", modalURL)
    console.log(this.state.allArtForModalGallery)
  }

// This merely changes the css display class from "block" to "none"
  closeModalImage(modalURL) {
    this.setState({displayModal: {'display': "none"}})
  }

// TODO: get this to work
  modalNextImage() {
    this.setState({modalImageIndex: this.state.modalImageIndex + 1 })
    console.log("modalNextImage pressed & modalImageIndex is: ", this.state.modalImageIndex)
  }

  modalPreviousImage() {
    this.setState({modalImageIndex: this.state.modalImageIndex - 1 })
    console.log("modalNextImage pressed & modalImageIndex is: ", this.state.modalImageIndex)
  }



//  ==================================
// show/hide statement
// partially working
// not using
//  ==================================
// showStatement(statementId){
//   this.setState({currentStatement: statementId})
//   console.log("statementId", statementId)
// }


// hideStatement(){
//   // console.log("hello from hideStatement().")
//   // console.log("mango", this.statement)
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
//  And finally, the render
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


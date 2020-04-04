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
import GalleryOtherArt from './GalleryOtherArt';
import artOtherArt from './artOtherArt';
import artEnvelopeCollages from './artEnvelopeCollages';
import artCurbsideObjectTags from './artCurbsideObjectTags';
import ImageModal from './ImageModal';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding
    this.showStatement = this.showStatement.bind(this);
    this.hideStatement = this.hideStatement.bind(this);
    this.includeInGalleryTrue = this.includeInGalleryTrue.bind(this);
    this.filterIncludeInGallery = this.filterIncludeInGallery.bind(this);
    this.showModalImage = this.showModalImage.bind(this);
    this.closeModalImage = this.closeModalImage.bind(this);

    this.state = {
      showingArt: '',
      currentStatement: "show statement based on hover",
      modalImageURL: "https://sadanduseless.b-cdn.net/wp-content/uploads/2018/05/bumblebee-butt2.jpg",
      displayModal: {"display": "none"},
      filteredOtherArt: [],
      filteredEnvelopeCollages: [],
      filteredCurbsideObjectTags: []


    };
  }


//  ==================================
//  modal: the expanded image
//  not working
//  ==================================
  showModalImage(modalId) {
    this.setState({displayModal: {'display': "block"}})
    this.setState({modalImageURL: modalId})
    console.log("statementId", modalId)
  }

  closeModalImage(modalId) {
    this.setState({displayModal: {'display': "none"}})
  }



//  ==================================
// show/hide statement
// partially working
//  ==================================
showStatement(statementId){
  this.setState({currentStatement: statementId})
  console.log("statementId", statementId)
}


hideStatement(){
  // console.log("hello from hideStatement().")
  // console.log("mango", this.statement)
}


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
//  if includeingallery === true
//  ==================================
  includeInGalleryTrue(item){
    return item.includeingallery === true;
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
        <Statement parentState={this.state}/>
      </aside>

      <section className="content">
        <GalleryEnvelopeCollages parentState={this.state}
                                 filteredEnvelopeCollages={this.state.filteredEnvelopeCollages}
                                 showStatement={this.showStatement}
                                 showModalImage={this.showModalImage}
                                 closeModalImage={this.closeModalImage}
                                 />

        <GalleryOtherArt parentState={this.state}
                         filteredOtherArt={this.state.filteredOtherArt}
                         />

        <GalleryCurbsideObjectTags parentState={this.state}
                                   filteredCurbsideObjectTags={this.state.filteredCurbsideObjectTags}
                                   />

        <ImageModal parentState={this.state}/>


        <About parentState={this.state}/>
        <Contact parentState={this.state}/>
        <CV parentState={this.state}/>


      </section>
    </div>
  );
  }
}




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
    this.viewModalImage = this.viewModalImage.bind(this);
    this.closeModalImage = this.closeModalImage.bind(this);

    this.state = {
      showingArt: '',
      currentStatement: "show statement based on hover",
      // get rid of imageURL once you are satisfied
      // imageURL:"https://sadanduseless.b-cdn.net/wp-content/uploads/2018/05/bumblebee-butt2.jpg",
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
  viewModalImage(event) {
    // console.log("hello from viewModalImage")
    this.setState({displayModal: {'display': "block"}})
    this.setState({modalImageURL: this.modalImageURL})
    // console.log("pinepapple", this.props.parentState.item.link)
    // console.log("pinepapple", this.props.item.link)
    // console.log("pinepapple", this.props.parentState.src)
    // console.log("pinepapple", this.src)
    // console.log("pinepapple", this.props.src)
    // console.log("pinepapple", item.link)
    // console.log("pinepapple", this.state.modalImageURL)
  }

  closeModalImage() {
    // console.log("hello from closeModalImage")
    this.setState({displayModal: {'display': "none"}})
  }



//  ==================================
// show/hide statement
// not working yet
//  ==================================
showStatement(statementId){
  // console.log("hello from showStatement().")
  this.setState({currentStatement: statementId})
  // console.log("this.state.currentStatement:", this.state.hoverStatement)
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
                                 statement={this.props.statement}
                                 modalImageURL={this.modalImageURL}
                                 viewModalImage={this.viewModalImage}
                                 closeModalImage={this.closeModalImage}
                                 showStatement={this.showStatement}
                                 />

        <GalleryOtherArt parentState={this.state}
                         filteredOtherArt={this.state.filteredOtherArt}
                         />
        <GalleryCurbsideObjectTags parentState={this.state}
                                   filteredCurbsideObjectTags={this.state.filteredCurbsideObjectTags}
                                   />
        <ImageModal parentState={this.state}
                    viewModalImage={this.props.viewModalImage}
                    closeModalImage={this.closeModalImage}
                    />


        <About parentState={this.state}/>
        <Contact parentState={this.state}/>
        <CV parentState={this.state}/>


      </section>
    </div>
  );
  }
}




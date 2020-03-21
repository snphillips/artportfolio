import React from 'react';
import './index.css';
import envelopeCollages from "./envelopeCollages.js";



export default class GalleryEnvelopeCollages extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding
   this.formatPrice = this.formatPrice.bind(this)
  }



// make the price a readable format
formatPrice() {

  envelopeCollages.map( item => {

    console.log("price before: ", item.price)

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })

    let formattedPrice = formatter.format(item.price)
    console.log("price after: ", formattedPrice )


  })

}


componentDidMount() {
  console.log("envelopeCollages: ", envelopeCollages)
  this.formatPrice()
}





  render() {





  return (
    <div id="curbside-tags" className="gallery">

             {envelopeCollages.map( item => {
              return(
                <div className="art-card">
                  <img className="art-img" src={item.link} />
                  <div className="art-titlecard-info"><i>{item.title}</i></div>
                  <div className="art-titlecard-info">{item.year}</div>
                  <div className="art-titlecard-info">{item.dims}</div>
                  <div className="art-titlecard-info">{item.location}</div>
                </div>
                )
               })
              }

    </div>
  );
  }



}




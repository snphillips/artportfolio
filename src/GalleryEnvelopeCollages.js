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
    <section id="envelope-collages">
      <h2>Security Envelope Collages</h2>
        <div className="gallery"
           onMouseEnter={this.props.showStatement}
           onMouseLeave={this.props.hideStatement}
           >

               {envelopeCollages.map( item => {
                let statement = item.statement
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
    </section>
  );
  }



}

                  // <div className="art-titlecard-info">{item.statement}</div>




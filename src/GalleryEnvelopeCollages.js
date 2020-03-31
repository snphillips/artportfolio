import React from 'react';
import './index.css';
import artEnvelopeCollages from "./artEnvelopeCollages.js";



export default class GalleryEnvelopeCollages extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding
   this.formatPrice = this.formatPrice.bind(this)
  }



// make the price a readable format
formatPrice() {

  artEnvelopeCollages.map( item => {

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
  console.log("artEnvelopeCollages: ", artEnvelopeCollages)
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

                 {this.props.filteredEnvelopeCollages.map( item => {



                      return(
                        <div className="art-card">
                          <img className="art-img" src={item.link} alt={item.title}/>
                          <div className="art-titlecard-info"><i>{item.title}</i></div>
                          <div className="art-titlecard-info">{item.year}</div>
                          <div className="art-titlecard-info">{item.dims}</div>
                        </div>
                        )

                       })
                 }





        </div>
    </section>
  );
  }



}

                    // <div className="art-titlecard-info">{item.price}</div>
                    // <div className="art-titlecard-info">{item.location}</div>
                  // <div className="art-titlecard-info">{item.statement}</div>
                    // let statement = item.statement




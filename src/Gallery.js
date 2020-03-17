import React from 'react';
import './index.css';
import allArtWorks from "./allArtWorks.js";



export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding
   this.formatPrice = this.formatPrice.bind(this)
  }



// make the price a readable format
formatPrice() {

  allArtWorks.map( item => {

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
  console.log("allArtWorks: ", allArtWorks)
  this.formatPrice()
}













  render() {





  return (
    <div className="gallery">

             {allArtWorks.map( item => {
              return(
                <div className="art-card">
                  <img className="art-img" src={item.link} />
                  <div className="art-titlecard-info">{item.title}</div>
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

                  // <div className="art-titlecard-info">{item.price}</div>


import React from 'react';
import './index.css';
import otherArt from "./otherArt.js";



export default class GalleryOtherArt extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding

  }







  render() {
    return (
      <section id="other-art">
        <h2>Other Art</h2>
        <div className="gallery">

          {otherArt.map( item => {
              {console.log("Hi! from mapping over otherArt")}
            return(
              <div className="art-card">
                <img className="art-img" src={item.link} />
                <div className="art-titlecard-info"><i>{item.title}</i></div>
                <div className="art-titlecard-info"><i>{item.year}</i></div>
                <div className="art-titlecard-info"><i>{item.dims}</i></div>
              </div>
              )
             })
            }

       </div>
      </section>
  );
  }



}

import React from 'react';
import './index.css';
import artCurbsideObjectTags from "./artCurbsideObjectTags.js";



export default class GalleryCurbsideObjectTags extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding

  }







  render() {
    return (
      <section id="curbside-tags">
       <h2>Curbside Object Status Tags</h2>
        <div className="gallery">

          {this.props.filteredCurbsideObjectTags.map( item => {
              {console.log("Hi! from mapping over this.props.filteredCurbsideObjectTags")}
            return(
              <div className="art-card">
                <img className="art-img" src={item.link} alt={item.title} />
              </div>
              )
             })
            }

       </div>
     </section>
  );
  }



}

                // <div className="art-titlecard-info"><i>{item.title}</i></div>

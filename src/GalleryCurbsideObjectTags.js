import React from 'react';
import './index.css';
import curbsideObjectTags from "./curbsideObjectTags.js";



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

          {curbsideObjectTags.map( item => {
              {console.log("Hi! from mapping over curbsideObjectTags")}
            return(
              <div className="art-card">
                <img className="art-img" src={item.link} />
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

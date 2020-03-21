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
      <div id="curbside-tags" className="gallery">

        {curbsideObjectTags.map( item => {
            {console.log("Hi!")}
          return(
            <div className="art-card">
              <img className="art-img" src={item.link} />
              <div className="art-titlecard-info"><i>{item.title}</i></div>
            </div>
            )
           })
          }

     </div>
  );
  }



}

import React from 'react';
import './index.css';
import allArtWorks from "./allArtWorks.js";



export default class Art extends React.Component {
  constructor(props) {
    super(props);

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
                </div>
                )
               })
              }

    </div>
  );
  }



}



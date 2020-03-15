import React from 'react';
import './index.css';
import allArtWorks from "./allArtWorks.js";



export default class Art extends React.Component {
  constructor(props) {
    super(props);

    // This binding (if there is any)
    // this.createGallery = this.createGallery.bind(this)
  }





  // createGallery(){
  //   console.log("allArtWorks: ", allArtWorks)
  //   // let arr = []
  //   allArtWorks.forEach( item => {
  //     let artCard =
  //     console.log(item.title)
  //     console.log(item.year)
  //     console.log(item.dims)
  //     console.log(item.media)
  //     console.log(item.link)
  //     artCard = item.link
  //     return "hello"
  //     // return artCard
  //   })

  // }




  // componentDidMount() {
  //   this.createGallery()
  // }










  render() {
  return (
    <div className="gallery">
          <ul>
             {allArtWorks.map( item => {
              return(
                <li>
                  {item.title}<br/>
                  {item.year}<br/>
                  {item.dims}<br/>
                  {item.link}<br/>
                  <img src={item.link} />
                </li>
                )
               })
              }
          </ul>
    </div>
  );
  }



}



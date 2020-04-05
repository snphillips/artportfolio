import React from 'react';
import './index.css';


export default class GalleryOtherArt extends React.Component {
  constructor(props) {
    super(props);

   // "this" binding

  }





  render() {


  // console.log("this.state.filteredOtherArt:", this.props.filteredOtherArt)


    return (
      <section id="other-art">
        <h2>Other Art</h2>
        <div className="gallery">

          {this.props.filteredOtherArt.map( item => {


            return(
              <div className="art-card"
                   key={item.index}
                   onClick={ () => {
                    this.props.showModalImage(item.link)}
                  }

                  onMouseLeave={this.props.closeModalImage}>

                <img className="art-img" src={item.link} alt={item.title}/>
                <div className="art-titlecard-info"><i>{item.title}</i></div>
                <div className="art-titlecard-info"><i>{item.year}</i></div>
                <div className="art-titlecard-info"><i>{item.dims}</i></div>
                <div className="art-titlecard-info"><i>{item.media}</i></div>
              </div>
              )
             })
            }

       </div>
      </section>
  );
  }



}
          // {artOtherArt.map( item => {

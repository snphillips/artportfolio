import React from 'react';
import './index.css';


export default class Gallery extends React.Component {
  // constructor(props) {
    // super(props);

   // "this" binding
  // }



  render() {

    return (
      <section id="gallery">

          <div className="gallery">

                 {this.props.filteredArt.map( item => {

                     // not working
                     // I'm trying to establish the index of this particular image
                     // then sent that number to app.js
                     // let pinapple = setmodalIndex={this.props.setModalIndex, () => {
                     //    this.setState({modalImageIndex: this.galleryIndex})
                     // }}


                      return(


                        <div className="art-card">

                          <img className="art-img"
                               src={item.link}
                               alt={item.title}
                               onClick={ () => {
                                 this.props.showModalImage(item.link, item.title, item.year, item.media, item.dims, item.price, item.statement)}
                               }
                               onMouseLeave={this.props.closeModalImage}

                              />

                        </div>
                        )

                       })
                 }

        </div>


    </section>
  );
  }




}

                          // not using right now
                          // <div className="art-titlecard-info"><i>{item.title}</i></div>
                          // <div className="art-titlecard-info">{item.year}</div>
                          // <div className="art-titlecard-info">{item.dims}</div>


